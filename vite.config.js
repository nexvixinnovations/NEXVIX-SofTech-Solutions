import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function googleReviewsPlugin() {
  let cache = { data: null, timestamp: 0 };
  const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes in-memory cache

  return {
    name: 'google-reviews-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (url.pathname === '/api/reviews') {
          res.setHeader('Content-Type', 'application/json');
          
          const env = loadEnv(server.config.mode, process.cwd(), '');
          const apiKey = env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_PLACES_API_KEY;
          const placeId = env.GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID;

          if (!apiKey || apiKey === 'YOUR_GOOGLE_PLACES_API_KEY_HERE' || !placeId || placeId === 'YOUR_GOOGLE_PLACE_ID_HERE') {
            res.statusCode = 200;
            return res.end(JSON.stringify({
              configured: false,
              message: 'Google Places API Key or Place ID is not configured yet. Add GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to your .env file.'
            }));
          }

          // Check cache
          const now = Date.now();
          if (cache.data && (now - cache.timestamp < CACHE_TTL_MS)) {
            res.statusCode = 200;
            return res.end(JSON.stringify(cache.data));
          }

          try {
            // Google Places API (New) Place Details endpoint
            const googleUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
            const response = await fetch(googleUrl, {
              headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,googleMapsUri,reviews'
              }
            });

            if (!response.ok) {
              const status = response.status;
              res.statusCode = 200;
              return res.end(JSON.stringify({
                configured: true,
                error: 'GOOGLE_API_ERROR',
                status: status,
                message: status === 403 
                  ? 'Google Places API request forbidden. Please ensure "Places API (New)" is enabled in Google Cloud Console and the API key has the correct permissions/restrictions.'
                  : status === 404
                  ? 'Google Business Place ID not found. Please verify the GOOGLE_PLACE_ID in your configuration.'
                  : 'Failed to fetch reviews from Google Places API.'
              }));
            }

            const data = await response.json();
            
            const payload = {
              configured: true,
              placeId: placeId,
              businessName: data.displayName?.text || 'NEXVIX SofTech Solutions',
              rating: typeof data.rating === 'number' ? data.rating : 5.0,
              userRatingCount: data.userRatingCount || (data.reviews ? data.reviews.length : 0),
              googleMapsUri: data.googleMapsUri || `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeId}`,
              writeReviewUri: `https://search.google.com/local/writereview?placeid=${placeId}`,
              reviews: (data.reviews || []).map((rev, index) => ({
                id: rev.name || `rev-${index}`,
                authorName: rev.authorAttribution?.displayName || 'Google User',
                authorUri: rev.authorAttribution?.uri || null,
                authorPhotoUri: rev.authorAttribution?.photoUri || null,
                rating: rev.rating || 5,
                relativePublishTime: rev.relativePublishTimeDescription || '',
                publishTime: rev.publishTime || null,
                text: rev.text?.text || rev.originalText?.text || '',
                googleMapsUri: rev.googleMapsUri || data.googleMapsUri || null
              }))
            };

            cache = { data: payload, timestamp: now };
            res.statusCode = 200;
            return res.end(JSON.stringify(payload));
          } catch (err) {
            res.statusCode = 200;
            return res.end(JSON.stringify({
              configured: true,
              error: 'NETWORK_ERROR',
              message: 'Failed to connect to Google Places API. Please check your network connection.'
            }));
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), googleReviewsPlugin()],

  // Dev server
  server: {
    port: 3000,
    open: true
  },

  // Production build optimizations
  build: {
    // Target modern browsers for smaller output
    target: 'es2015',
    // Minify with esbuild (fastest)
    minify: 'esbuild',
    // Reduce chunk sizes
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate cached chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
        }
      }
    }
  },

  // Optimise deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
});

