import Link from "next/link";
import Icon from "./components/Icon";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <h1>Looks like you took a wrong turn</h1>
        <p>This page doesn&apos;t exist — but your room is still waiting on the GT Road.</p>
        <Link href="/" className="btn-gradient">
          Back To Home
          <span className="arrow">
            <Icon name="arrow" />
          </span>
        </Link>
      </div>
    </section>
  );
}
