import { CONTACT_LINKS, SECTION_INDEX } from "@/data/content";
import { Reveal } from "./Reveal";

/** Two plain lines. No form, no service, no persuasion. */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-index"
      className="grain border-t border-metadata/25"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p id="contact-index" className="label-editorial">
            {SECTION_INDEX.contact}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <ul className="mt-10 border-t border-metadata/25">
            {CONTACT_LINKS.map((link) => (
              <li
                key={link.label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-metadata/25 py-5 sm:flex sm:gap-8"
              >
                <span className="label-editorial sm:w-24 sm:shrink-0">{link.label}</span>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="min-w-0 truncate text-sm text-metadata underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
