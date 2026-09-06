import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { 
  Star, 
  ExternalLink, 
  MessageSquarePlus, 
  MapPin, 
  AlertCircle, 
  RefreshCw, 
  User, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck
} from 'lucide-react';
import { fetchGoogleReviews } from '../services/googleReviewsService';

// Single Google Review Card component
function GoogleReviewCard({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = review.text && review.text.length > 220;

  return (
    <div className="bg-[#FFFCF9] border border-[#E8E2D5] p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group">
      <div>
        {/* Header: Author info + Google badge */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F0EAE0]">
          <div className="flex items-center gap-3 min-w-0">
            {review.authorPhotoUri ? (
              <img 
                src={review.authorPhotoUri} 
                alt={review.authorName} 
                className="w-11 h-11 rounded-full object-cover border border-[#E2DCCE] shrink-0" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-[#EDE7DA] text-[#6E5A44] flex items-center justify-center font-bold text-sm shrink-0 border border-[#E2DCCE]">
                {review.authorName ? review.authorName.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
              </div>
            )}
            <div className="min-w-0">
              {review.authorUri ? (
                <a 
                  href={review.authorUri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif font-bold text-base sm:text-lg text-[#0F172A] group-hover:text-purple-700 transition-colors truncate block hover:underline"
                >
                  {review.authorName}
                </a>
              ) : (
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#0F172A] group-hover:text-purple-700 transition-colors truncate">
                  {review.authorName}
                </h4>
              )}
              {review.relativePublishTime && (
                <span className="text-[11px] font-medium text-slate-500 block">
                  {review.relativePublishTime}
                </span>
              )}
            </div>
          </div>

          {/* Google source badge */}
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-[#FAF6EC] px-2.5 py-1 rounded-full border border-[#E5DFD3] shrink-0">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span className="hidden xs:inline">Google</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3.5 bg-[#FAF6EC] px-3 py-1 rounded-full border border-[#E5DFD3] w-fit">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star 
              key={s} 
              className={`w-3.5 h-3.5 ${
                s <= (review.rating || 5)
                  ? 'text-amber-500 fill-amber-500' 
                  : 'text-slate-300'
              }`} 
            />
          ))}
          <span className="text-xs font-bold text-[#0F172A] ml-1">
            {(review.rating || 5).toFixed(1)} / 5
          </span>
        </div>

        {/* Review Text */}
        {review.text ? (
          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed relative pt-1">
            <p className="italic">
              "{isLongText && !isExpanded ? `${review.text.slice(0, 220)}...` : review.text}"
            </p>
            {isLongText && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 transition-colors"
              >
                {isExpanded ? (
                  <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Read full review <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>
            )}
          </div>
        ) : (
          <p className="text-slate-400 text-xs italic">
            Positive rating left on Google Reviews without written feedback.
          </p>
        )}
      </div>

      {/* Footer attribution */}
      <div className="mt-5 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Google Review
        </span>
        {review.googleMapsUri && (
          <a
            href={review.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1 font-medium"
          >
            <span>View</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

// Skeleton loading state
function ReviewsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-[#FFFCF9] border border-[#E8E2D5] p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm animate-pulse">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F0EAE0]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-200" />
                <div className="space-y-1.5">
                  <div className="w-28 h-4 bg-slate-200 rounded" />
                  <div className="w-16 h-3 bg-slate-200 rounded" />
                </div>
              </div>
              <div className="w-16 h-6 bg-slate-200 rounded-full" />
            </div>
            <div className="w-24 h-6 bg-slate-200 rounded-full mb-4" />
            <div className="space-y-2">
              <div className="w-full h-3 bg-slate-200 rounded" />
              <div className="w-full h-3 bg-slate-200 rounded" />
              <div className="w-3/4 h-3 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#F0EAE0] flex justify-between">
            <div className="w-28 h-3 bg-slate-200 rounded" />
            <div className="w-12 h-3 bg-slate-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  const loadReviews = async () => {
    setLoading(true);
    const res = await fetchGoogleReviews();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const reviewsList = data?.reviews || [];
  const visibleReviews = reviewsList.slice(0, visibleCount);
  const hasMoreReviews = reviewsList.length > visibleCount;

  const avgRating = data?.rating ? Number(data.rating).toFixed(1) : '5.0';
  const totalCount = data?.userRatingCount ?? reviewsList.length;
  const writeReviewUrl = data?.writeReviewUri || (data?.placeId ? `https://search.google.com/local/writereview?placeid=${data.placeId}` : 'https://www.google.com/maps');
  const googleMapsUrl = data?.googleMapsUri || (data?.placeId ? `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${data.placeId}` : 'https://www.google.com/maps');

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen">
      <SEO 
        title="Client Reviews & Google Ratings | NEXVIX SofTech Solutions" 
        description="Read verified live Google reviews from business founders and managers who built their high-performance web platforms with NEXVIX SofTech Solutions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[#0F172A] font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Google Verified Reviews</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
            Client Success Stories
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Read real, unedited Google reviews from business owners, healthcare practices, and entrepreneurs who partnered with NEXVIX SofTech Solutions.
          </p>

          {/* Average Rating & Action Badges */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl bg-[#FFFCF9] border border-[#E8E2D5] shadow-sm max-w-xl w-full justify-center">
              
              {/* Google G Logo & Stars */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span className="font-heading font-extrabold text-sm text-slate-800 tracking-tight">Google Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star 
                      key={s} 
                      className="w-5 h-5 text-amber-500 fill-amber-500" 
                    />
                  ))}
                </div>
              </div>

              {/* Rating metrics */}
              <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-[#EAE3D6] pt-3 sm:pt-0 sm:pl-6">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-[#0F172A] block leading-tight">
                  {avgRating} <span className="text-base sm:text-lg text-slate-500 font-sans font-normal">/ 5.0</span>
                </span>
                <span className="text-xs text-slate-600 block mt-0.5">
                  {totalCount > 0 ? `Based on ${totalCount} verified Google reviews` : 'Verified Google Business reviews'}
                </span>
              </div>
            </div>

            {/* CTAs: Write a Review & View on Google Maps */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6348f6] hover:bg-[#5134e8] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-[#E5DFD3] shadow-sm transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <ReviewsLoadingSkeleton />
        ) : data && !data.configured ? (
          /* Configuration Setup Notice */
          <div className="max-w-2xl mx-auto bg-[#FFFBF0] border border-[#F3E2B8] rounded-3xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#0F172A] mb-2">
              Google Places API Configuration Required
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              To display live Google reviews, please add your Google Places API Key and Google Business Place ID to your environment configuration file (<code className="bg-amber-50 px-2 py-0.5 rounded text-amber-900 font-mono text-xs border border-amber-200">.env</code>).
            </p>
            <div className="bg-white/90 border border-[#EBE1CD] rounded-2xl p-4 text-left font-mono text-xs text-slate-700 max-w-lg mx-auto mb-6 overflow-x-auto">
              <p className="text-slate-400 select-none"># .env</p>
              <p><span className="text-purple-700 font-bold">GOOGLE_PLACES_API_KEY</span>=your_api_key_here</p>
              <p><span className="text-purple-700 font-bold">GOOGLE_PLACE_ID</span>=your_place_id_here</p>
            </div>
            <button
              onClick={loadReviews}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Reviews</span>
            </button>
          </div>
        ) : data?.error ? (
          /* Error State */
          <div className="max-w-2xl mx-auto bg-[#FEF2F2] border border-[#FECACA] rounded-3xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-rose-950 mb-2">
              Unable to Load Google Reviews
            </h3>
            <p className="text-rose-800 text-sm mb-6 leading-relaxed">
              {data.message || 'An error occurred while communicating with the Google Places API.'}
            </p>
            <button
              onClick={loadReviews}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-full transition-colors shadow"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        ) : reviewsList.length === 0 ? (
          /* Empty Reviews State */
          <div className="max-w-xl mx-auto bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-10 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#0F172A] mb-2">
              No Reviews Found Yet
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Be the first to share your experience working with NEXVIX SofTech Solutions on Google!
            </p>
            <a
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6348f6] hover:bg-[#5134e8] text-white font-bold text-xs rounded-full shadow-md transition-all hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write the First Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          /* Active Google Reviews Grid */
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleReviews.map((rev) => (
                <GoogleReviewCard key={rev.id} review={rev} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreReviews && (
              <div className="text-center mt-12">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-full border border-[#E5DFD3] shadow-sm hover:shadow transition-all hover:scale-105"
                >
                  <span>Load More Reviews</span>
                  <ChevronDown className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
