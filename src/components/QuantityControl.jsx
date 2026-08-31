export function QuantityControl({ value, onChange, min = 1, max = 5 }) {
  return (
    <div className="qty">
      <button
        type="button"
        className="qty-btn"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        −
      </button>
      <span className="qty-val" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="qty-btn"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
