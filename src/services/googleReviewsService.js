/**
 * Service to fetch live Google Places reviews from the backend proxy endpoint (/api/reviews)
 */
export async function fetchGoogleReviews() {
  try {
    const response = await fetch('/api/reviews', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to load reviews (HTTP ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      configured: true,
      error: 'CLIENT_FETCH_ERROR',
      message: error.message || 'Unable to connect to reviews service.'
    };
  }
}
