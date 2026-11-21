import { about } from "../config/site";
import { useBooking } from "../context/BookingContext";
import { btnPrimary } from "../lib/styles";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function AboutSection() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="scroll-mt-24 bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading index="01" eyebrow="The photographer" title={about.headline} />
            <blockquote className="mt-8 max-w-2xl font-display text-2xl leading-snug text-paper italic md:text-3xl">
              {about.mission}
            </blockquote>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl text-paper">{stat.value}</dt>
                  <dd className="mt-2 font-grotesk text-[11px] tracking-[0.16em] text-muted uppercase">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <button type="button" className={`${btnPrimary} mt-8`} onClick={() => openBooking()}>
              Let's create something special
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
