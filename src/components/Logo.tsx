import { cn } from "../lib/styles";

export function Logo({ className, large = false }: { className?: string; large?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-display text-paper italic", large ? "text-4xl" : "text-[1.55rem]")}>Mark</span>
      <span className="mt-1.5 flex items-center gap-2">
        <span className="h-px w-5 bg-neon" aria-hidden="true" />
        <span
          className={cn(
            "font-grotesk tracking-[0.42em] text-paper/85 uppercase",
            large ? "text-[11px]" : "text-[8px]",
          )}
        >
          Photography
        </span>
      </span>
    </span>
  );
}
