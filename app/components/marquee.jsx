import { Fragment } from "react";

// Endless sliding row. The items render twice and the track moves by exactly one copy,
// so the loop is seamless. `repeat` fills each copy with the items several times so short
// lists still span the row. Hover pauses it; reduced-motion users get a scrollable row instead.
export default function Marquee({ label, reverse = false, duration = 30, repeat = 1, className = "", children }) {
  const items = Array.from({ length: repeat }, (_, index) => <Fragment key={index}>{children}</Fragment>);

  return (
    <div
      className={`marquee${reverse ? " marquee-reverse" : ""} ${className}`}
      style={{ "--marquee-duration": `${duration * repeat}s` }}
      role="region"
      aria-label={label}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? true : undefined}>
            {items}
          </ul>
        ))}
      </div>
    </div>
  );
}
