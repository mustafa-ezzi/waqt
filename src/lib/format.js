export function formatPkr(amount) {
  const n = Number(amount) || 0;
  return `Rs ${n.toLocaleString("en-PK")}`;
}

export function normalizePkPhone(input) {
  const raw = String(input || "").trim();
  let digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0") && digits.length === 11) {
    digits = `92${digits.slice(1)}`;
  }
  return digits;
}

export function displayPhone(input) {
  return String(input || "").trim();
}
