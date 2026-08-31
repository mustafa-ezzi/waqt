export function CornerOrnaments() {
  return (
    <div className="ornaments" aria-hidden="true">
      <span className="ornament ornament-tl" />
      <span className="ornament ornament-tr" />
      <span className="ornament ornament-bl" />
      <span className="ornament ornament-br" />
    </div>
  );
}

export function FiligreeRule({ className = "" }) {
  return (
    <div className={`filigree ${className}`} aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  );
}
