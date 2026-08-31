import { Link } from "react-router-dom";

export function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  to,
  href,
  ...props
}) {
  const cls = `btn btn-${variant} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}
