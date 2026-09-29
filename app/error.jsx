"use client";

import Link from "next/link";

export default function ErrorPage({ error, reset }) {
  return (
    <main className="status-page">
      <p className="label">Error</p>
      <h1>Something went wrong.</h1>
      <p>The page hit an unexpected issue while rendering. Try again, or head back to the homepage.</p>
      {error.digest ? <p className="status-ref">Reference: {error.digest}</p> : null}
      <div className="text-links">
        <button type="button" onClick={() => reset()}>
          try again ↻
        </button>
        <Link href="/">back home →</Link>
      </div>
    </main>
  );
}
