import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="status-page">
      <p className="label">404</p>
      <h1>Page not found.</h1>
      <p>The page you requested doesn&apos;t exist or may have been moved.</p>
      <div className="text-links">
        <Link href="/">back home →</Link>
      </div>
    </main>
  );
}
