import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Star, 
  CheckCircle2, 
  MessageSquarePlus, 
  ShieldCheck, 
  Info,
  Calendar
} from 'lucide-react';
import { Review } from '../../types';

export const ReviewsSection: React.FC = () => {
  const { reviews, setIsReviewModalOpen } = useApp();
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');

  // Filter to approved reviews only
  const approvedReviews = reviews.filter((r) => r.status === 'approved');

  // Compute breakdown
  const total = approvedReviews.length;
  const ratingCounts = {
    5: approvedReviews.filter((r) => r.rating === 5).length,
    4: approvedReviews.filter((r) => r.rating === 4).length,
    3: approvedReviews.filter((r) => r.rating === 3).length,
    2: approvedReviews.filter((r) => r.rating === 2).length,
    1: approvedReviews.filter((r) => r.rating === 1).length
  };

  const avgRating = total > 0
    ? (
        approvedReviews.reduce((sum, r) => sum + r.rating, 0) / total
      ).toFixed(1)
    : '5.0';

  const displayedReviews = selectedRatingFilter === 'all'
    ? approvedReviews
    : approvedReviews.filter((r) => r.rating === selectedRatingFilter);

  return (
    <section id="reviews-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Verified Customer Feedback</span>
            <span aria-hidden="true">·</span>
            <span>Genuine Quality</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Customer Reviews & Experiences
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Transparent ratings and project reviews from clients who trusted ODS with their digital deliverables.
          </p>
        </div>

        {/* Rating Breakdown & Summary Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 mb-12 shadow-xs">
          
          {/* Average Score Box */}
          <div className="lg:col-span-4 text-center lg:border-r border-slate-200/80 lg:pr-8">
            <span className="text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
              {avgRating}
            </span>
            <div className="flex items-center justify-center gap-1 my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Based on {total} authenticated client evaluations
            </p>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>

          {/* Breakdown Bars */}
          <div className="lg:col-span-8 space-y-2.5">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingCounts[stars as keyof typeof ratingCounts];
              const percentage = total > 0 ? (count / total) * 100 : 0;

              return (
                <button
                  key={stars}
                  onClick={() => setSelectedRatingFilter(selectedRatingFilter === stars ? 'all' : stars)}
                  className={`w-full flex items-center gap-3 p-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                    selectedRatingFilter === stars ? 'bg-sky-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-700 w-16 shrink-0 flex items-center gap-1">
                    <span>{stars}</span>
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  </span>

                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="text-xs font-mono text-slate-500 w-12 text-right shrink-0">
                    {count} ({Math.round(percentage)}%)
                  </span>
                </button>
              );
            })}

            {selectedRatingFilter !== 'all' && (
              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedRatingFilter('all')}
                  className="text-xs text-sky-600 hover:underline"
                >
                  Clear filter (show all)
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev: Review) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all text-left"
            >
              <div>
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s <= rev.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{rev.date}</span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md inline-block mb-3">
                  {rev.serviceName}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.customerName}</h4>
                  <p className="text-[11px] text-slate-500">{rev.roleOrCompany}</p>
                </div>
                {rev.verifiedCustomer && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Development Disclosure Notice */}
        <div className="mt-12 p-3.5 bg-slate-100/80 border border-slate-200 rounded-xl text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-500">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>All reviews are vetted by our moderation desk before publishing. Demo reviews during development are marked transparently.</span>
        </div>

      </div>
    </section>
  );
};
