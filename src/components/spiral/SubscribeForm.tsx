import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Email updates form — INTERFACE ONLY.
 *
 * Nothing is stored, sent, or transmitted anywhere. The success state is
 * rendered locally so the layout can be reviewed.
 *
 * TO CONNECT A REAL EMAIL SERVICE LATER (choose one):
 *  - Lovable Cloud: create a `subscribers` table with RLS + insert policy,
 *    then insert { name, email } inside handleSubmit.
 *  - Brevo / Mailchimp: call their contacts API from a server function so the
 *    API key never reaches the browser, then await it inside handleSubmit.
 * Replace the marked block below; keep the client-side validation as is.
 */
export function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);

    // ── FUTURE EMAIL SERVICE CONNECTION POINT ─────────────────────────────
    // await subscribe({ name, email })
    // No data is collected, stored, or sent in this first version.
    // ──────────────────────────────────────────────────────────────────────

    setSubmitted(true);
    setEmail("");
    setName("");
  }

  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="Updates"
            title="Receive the next signals."
            subtitle="Occasional updates on new works, editions, and publications."
          />

          <Reveal delay={120}>
            {submitted ? (
              <p
                role="status"
                className="border border-ember/40 p-6 text-sm leading-relaxed text-ember"
              >
                Thank you. Your registration has been received.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="max-w-md">
                <div>
                  <label htmlFor="subscribe-name" className="label-editorial block">
                    Name (optional)
                  </label>
                  <input
                    id="subscribe-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-3 w-full border-b border-border bg-transparent pb-2 text-base text-foreground outline-none focus:border-ember"
                  />
                </div>

                <div className="mt-8">
                  <label htmlFor="subscribe-email" className="label-editorial block">
                    Email address (required)
                  </label>
                  <input
                    id="subscribe-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-describedby={error ? "subscribe-error" : undefined}
                    aria-invalid={error ? true : undefined}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 w-full border-b border-border bg-transparent pb-2 text-base text-foreground outline-none focus:border-ember"
                  />
                </div>

                {error ? (
                  <p id="subscribe-error" role="alert" className="mt-3 text-sm text-destructive">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="mt-10 border border-foreground bg-foreground px-6 py-3 text-xs tracking-[0.18em] text-background uppercase transition-opacity hover:opacity-85"
                >
                  Receive updates
                </button>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  This first version does not store or send any information.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
