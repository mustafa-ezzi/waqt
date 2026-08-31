import { useState } from "react";

export function WatchImage({ src, alt, className = "", eager = false, ratio = "1 / 1" }) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div
        className={`watch-fallback ${className}`}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => setOk(false)}
    />
  );
}
