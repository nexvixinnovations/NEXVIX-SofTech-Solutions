// Serverless function handler for /api/reviews (Vercel / Node)
// Reads GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID from process.env

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || apiKey === 'YOUR_GOOGLE_PLACES_API_KEY_HERE' || !placeId || placeId === 'YOUR_GOOGLE_PLACE_ID_HERE') {
    return res.status(200).json({
      configured: false,
      message: 'Google Places API Key or Place ID is not configured yet. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in your environment variables.'
    });
  }

  try {
    const googleUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const googleRes = await fetch(googleUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,googleMapsUri,reviews'
      }
    });

    if (!googleRes.ok) {
      const status = googleRes.status;
      return res.status(200).json({
        configured: true,
        error: 'GOOGLE_API_ERROR',
        status: status,
        message: status === 403
          ? 'Google Places API request forbidden. Ensure Places API (New) is enabled and the API key has proper permissions.'
          : status === 404
          ? 'Google Business Place ID not found. Verify your GOOGLE_PLACE_ID.'
          : 'Failed to fetch reviews from Google Places API.'
      });
    }

    const data = await googleRes.json();

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

    res.setHeader('Cache-Control', 'public, max-age=900, stale-while-revalidate=3600');
    return res.status(200).json(payload);
  } catch (err) {
    return res.status(200).json({
      configured: true,
      error: 'NETWORK_ERROR',
      message: 'Failed to communicate with Google Places API.'
    });
  }
}
