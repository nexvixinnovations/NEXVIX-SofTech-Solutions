// Cloudflare Pages Functions handler for /api/reviews
// Reads GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID from context.env

export async function onRequestGet(context) {
  const { env } = context;
  const apiKey = env.GOOGLE_PLACES_API_KEY;
  const placeId = env.GOOGLE_PLACE_ID;

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=900, stale-while-revalidate=3600'
  };

  if (!apiKey || apiKey === 'YOUR_GOOGLE_PLACES_API_KEY_HERE' || !placeId || placeId === 'YOUR_GOOGLE_PLACE_ID_HERE') {
    return new Response(JSON.stringify({
      configured: false,
      message: 'Google Places API Key or Place ID is not configured yet. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in your environment variables.'
    }), {
      status: 200,
      headers: corsHeaders
    });
  }

  try {
    const googleUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const res = await fetch(googleUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,googleMapsUri,reviews'
      }
    });

    if (!res.ok) {
      const status = res.status;
      return new Response(JSON.stringify({
        configured: true,
        error: 'GOOGLE_API_ERROR',
        status: status,
        message: status === 403 
          ? 'Google Places API request forbidden. Ensure Places API (New) is enabled and your API key has appropriate permissions.'
          : status === 404
          ? 'Google Business Place ID not found. Verify your GOOGLE_PLACE_ID.'
          : 'Failed to fetch reviews from Google Places API.'
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const data = await res.json();

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

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({
      configured: true,
      error: 'NETWORK_ERROR',
      message: 'Failed to communicate with Google Places API.'
    }), {
      status: 200,
      headers: corsHeaders
    });
  }
}
