import { Link } from "@remix-run/react";
import homestyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1>Keep Track of Your Notes</h1>
      <p>Try our early beta and never lose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homestyles }];
}
