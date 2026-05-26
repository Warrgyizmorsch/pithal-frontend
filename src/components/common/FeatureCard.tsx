import { ShieldCheck } from "lucide-react";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-secondary/50 text-secondary">
        <ShieldCheck aria-hidden size={22} strokeWidth={1.6} />
      </span>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-text-muted">{text}</p>
      </div>
    </article>
  );
}
