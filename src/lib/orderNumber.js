const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function pad(n) {
  return String(n).padStart(2, "0");
}

export function generateOrderNumber(date = new Date()) {
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  let suffix = "";
  const bytes = new Uint8Array(4);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < 4; i += 1) {
    suffix += CHARS[bytes[i] % CHARS.length];
  }
  return `WQT-${y}${m}${d}-${suffix}`;
}

export function saveLastOrderNumber(number) {
  sessionStorage.setItem("waaqt.lastOrderNumber", number);
}

export function readLastOrderNumber() {
  return sessionStorage.getItem("waaqt.lastOrderNumber") || "";
}
