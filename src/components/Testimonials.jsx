import { reviews } from "../data/reviews.js";

function Stars({ count }) {
  return (
    <span className="rev-stars" aria-label={`${count} out of 5`}>
      {"★★★★★".slice(0, count)}
      <span className="rev-stars-empty">{"★★★★★".slice(count)}</span>
    </span>
  );
}

function Card({ review }) {
  return (
    <article className="rev-card">
      <Stars count={review.stars} />
      <p className="rev-text">“{review.text}”</p>
      <footer className="rev-meta">
        <strong>{review.name}</strong>
        <span>
          {review.city} · {review.piece}
        </span>
      </footer>
    </article>
  );
}

export function Testimonials() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="reviews" aria-label="Client notes">
      <div className="wrap reviews-head">
        <p className="overline">On the wrist</p>
        <h2>Notes from the house</h2>
      </div>
      <div className="reviews-stripe">
        <div className="reviews-track">
          {loop.map((review, i) => (
            <Card key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
