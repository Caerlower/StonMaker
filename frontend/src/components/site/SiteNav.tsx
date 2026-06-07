import { Link } from "@tanstack/react-router";
import { StonMakerLogo } from "@/components/brand/StonMakerLogo";
import { Send } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <StonMakerLogo className="text-[15px]" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/dashboard" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Dashboard</Link>
          <Link to="/how-it-works" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">How it works</Link>
        </nav>
        <a
          href="https://t.me/StonMakerBot"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-px"
        >
          <Send className="size-3.5" />
          Add to Telegram
        </a>
      </div>
    </header>
  );
}
