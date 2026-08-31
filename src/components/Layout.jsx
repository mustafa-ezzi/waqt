import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { PageTransition } from "./PageTransition.jsx";
import { useToast } from "../context/ToastContext.jsx";

export function Layout() {
  const { toast, dismiss } = useToast();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={`shell ${isHome ? "shell-home" : ""}`}>
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      {toast && (
        <div className="toast" role="status">
          <p>{toast.message}</p>
          <button type="button" onClick={dismiss} aria-label="Dismiss">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
