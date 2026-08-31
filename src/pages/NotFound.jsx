import { Button } from "../components/Button.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export function NotFound() {
  usePageTitle("WAAQT");
  return (
    <main className="page page-pad empty-page">
      <div className="wrap empty-box">
        <h1>This hour is not on the page.</h1>
        <p>The path does not exist in the house.</p>
        <Button to="/" variant="ghost">
          Return home
        </Button>
      </div>
    </main>
  );
}
