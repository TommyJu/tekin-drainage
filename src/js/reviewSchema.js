import { SITE, BUSINESS } from "@data/client";

// Generates AggregateRating + Review JSON-LD so search engines can show
// star ratings next to your listing. Update ratingValue/reviewCount and
// the reviews array to match what's actually posted on your Google profile
// — don't leave placeholder numbers live.
export function getReviewSchema(reviews, ratingValue, reviewCount) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.quote,
    })),
  };
}
