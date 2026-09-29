"use client";

// Rendered without the root layout, so styles are inline.
const bodyStyle = {
  margin: 0,
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background: "#ffffff",
  color: "#0a0a0a",
  fontFamily: "ui-sans-serif, system-ui, sans-serif"
};

const buttonStyle = {
  marginRight: "16px",
  padding: 0,
  border: 0,
  background: "none",
  color: "#0a0a0a",
  font: "13px ui-monospace, monospace",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  cursor: "pointer"
};

export default function GlobalErrorPage({ error, reset }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={{ width: "min(520px, 100%)" }}>
          <p style={{ margin: 0, color: "#737373", font: "12px ui-monospace, monospace", textTransform: "uppercase" }}>Error</p>
          <h1 style={{ margin: "10px 0", fontSize: "1.8rem", fontWeight: 500 }}>The app needs a fresh retry.</h1>
          <p style={{ margin: 0, color: "#525252", lineHeight: 1.6 }}>
            A top-level rendering error interrupted the app. Retry, or reload the homepage.
          </p>
          {error.digest ? <p style={{ color: "#737373", fontSize: "0.9rem" }}>Reference: {error.digest}</p> : null}
          <p style={{ marginTop: "20px" }}>
            <button type="button" onClick={() => reset()} style={buttonStyle}>
              retry
            </button>
            <button type="button" onClick={() => window.location.assign("/")} style={buttonStyle}>
              reload home
            </button>
          </p>
        </div>
      </body>
    </html>
  );
}
