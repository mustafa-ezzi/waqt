import { useState } from "react";
import { Navigate } from "react-router-dom";
import { formatPkr, normalizePkPhone } from "../lib/format.js";
import { generateOrderNumber, saveLastOrderNumber } from "../lib/orderNumber.js";
import { buildWhatsAppUrl } from "../lib/whatsapp.js";
import { useCart } from "../context/CartContext.jsx";
import { Button } from "../components/Button.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { r2 } from "../data/site.js";

const initial = {
  name: "",
  phone: "",
  city: "",
  address: "",
  note: "",
};

function validate(form) {
  const errors = {};
  const name = form.name.trim();
  if (name.length < 2 || name.length > 80) errors.name = "Please enter your full name.";
  const phone = form.phone.trim();
  const digits = normalizePkPhone(phone);
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Enter a Pakistani number — 03xx or +92.";
  }
  const city = form.city.trim();
  if (city.length < 2 || city.length > 60) errors.city = "Enter your city.";
  const address = form.address.trim();
  if (address.length < 8 || address.length > 200) {
    errors.address = "Enter a delivery address.";
  }
  if (form.note.length > 300) errors.note = "Please keep the note under 300 characters.";
  return errors;
}

export function Checkout() {
  usePageTitle("WAAQT · Order");
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [orderNumber] = useState(() => generateOrderNumber());
  const [sent, setSent] = useState(null);

  if (!sent && items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) return;

    const url = buildWhatsAppUrl({
      orderNumber,
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        address: form.address.trim(),
      },
      items: items.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        price: i.product.price,
      })),
      subtotal,
      note: form.note.trim(),
    });

    saveLastOrderNumber(orderNumber);
    window.open(url, "_blank", "noopener,noreferrer");
    clear();
    setSent(orderNumber);
  };

  if (sent) {
    return (
      <main className="page page-pad checkout">
        <div className="wrap confirm">
          <p className="overline">The house has the hour</p>
          <h1>Thank you.</h1>
          <p className="confirm-copy">
            Your inquiry is ready on WhatsApp. The WAAQT team will continue from there.
          </p>
          <div className="plaque">
            <span>Order number</span>
            <strong>{sent}</strong>
          </div>
          <Button to="/collection" variant="ghost">
            Return to the collection
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="page page-pad checkout">
      <header className="wrap checkout-head">
        <p className="overline">A private appointment</p>
        <h1>Your details</h1>
        <p>The house will receive this inquiry on WhatsApp, with an order number.</p>
      </header>

      <div className="wrap checkout-grid">
        <form className="check-form" onSubmit={onSubmit} noValidate>
          <Field label="Full name" name="name" value={form.name} onChange={onChange} error={errors.name} />
          <Field
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
            error={errors.phone}
            placeholder="03xx xxxxxxx"
          />
          <Field label="City" name="city" value={form.city} onChange={onChange} error={errors.city} />
          <Field
            label="Delivery address"
            name="address"
            value={form.address}
            onChange={onChange}
            error={errors.address}
            textarea
          />
          <Field
            label="Note (optional)"
            name="note"
            value={form.note}
            onChange={onChange}
            error={errors.note}
            textarea
          />

          <p className="form-help">
            You will open WhatsApp with your order ready. The WAAQT team will continue from there.
          </p>
          <Button type="submit">Send order on WhatsApp</Button>
        </form>

        <aside className="check-side">
          <div className="plaque">
            <span>Order number</span>
            <strong>{orderNumber}</strong>
          </div>
          <ul className="check-recap">
            {items.map(({ product, quantity }) => (
              <li key={product.id}>
                <img src={r2(product.images.hero)} alt="" />
                <div>
                  <p>{product.name}</p>
                  <span>
                    × {quantity} · {formatPkr(product.price * quantity)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="sum-row">
            <span>Subtotal</span>
            <strong>{formatPkr(subtotal)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Field({ label, name, value, onChange, error, textarea, placeholder }) {
  const id = `f-${name}`;
  const Comp = textarea ? "textarea" : "input";
  return (
    <label className={`field ${error ? "has-error" : ""}`} htmlFor={id}>
      <span>{label}</span>
      <Comp
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
      />
      {error && <em>{error}</em>}
    </label>
  );
}
