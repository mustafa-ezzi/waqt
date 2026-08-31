import { site } from "../data/site.js";
import { formatPkr } from "./format.js";

export function buildWhatsAppUrl({
  orderNumber,
  customer,
  items,
  subtotal,
  note,
}) {
  const lines = [
    "WAAQT order inquiry",
    `Order number: ${orderNumber}`,
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `City: ${customer.city}`,
    `Address: ${customer.address}`,
    "",
    "Items:",
    ...items.map(
      (item, i) =>
        `${i + 1}. ${item.name} × ${item.quantity} — ${formatPkr(item.price * item.quantity)}`
    ),
    "",
    `Subtotal: ${formatPkr(subtotal)}`,
  ];

  if (note) {
    lines.push("", `Note: ${note}`);
  }

  lines.push("", "—", "Sent from waaqt.pk");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
