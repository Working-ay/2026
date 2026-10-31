import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <figure className="p-5 rounded-2xl bg-surface border border-line break-inside-avoid mb-4">
      <div className="flex gap-0.5 text-accent mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <blockquote className="text-ink/90 leading-relaxed text-[15px]">
        {review.content}
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-4 pt-4 border-t border-line">
        <div className="w-8 h-8 rounded-full bg-raised flex items-center justify-center text-xs font-medium text-muted uppercase">
          {review.username.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-ink truncate">@{review.username}</p>
          {review.date && <p className="text-xs text-dim">{review.date}</p>}
        </div>
      </figcaption>
    </figure>
  );
};