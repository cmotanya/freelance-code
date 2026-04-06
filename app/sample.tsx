import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_32%),radial-gradient(circle_at_bottom_right,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_28%),linear-gradient(to_right,var(--grid-line)_1px,transparent_2px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_2px)] bg-size-[auto,auto,56px_56px,56px_56px] opacity-90" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 py-8 lg:py-14">
        <div className="max-w-3xl space-y-5">
          <span className="bg-background/85 text-muted-foreground border-border inline-flex rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.24em] uppercase shadow-sm backdrop-blur-sm">
            Contact
          </span>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let&apos;s build something sharp, useful, and ready for real
              people.
            </h1>
            <p className="text-copy max-w-2xl text-base leading-7 sm:text-lg">
              Whether you need a portfolio, a business website, network setup,
              CCTV installation, or a custom digital workflow, this is the best
              place to start the conversation.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.85fr]">
          <Card className="relative border border-white/20 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--card)_88%,white_12%),color-mix(in_oklab,var(--accent)_16%,var(--card)_84%))] shadow-xl shadow-black/5">
            <CardHeader className="gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="bg-foreground text-background inline-flex rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.26em] uppercase">
                  Open for Work
                </span>
                <div className="bg-background/80 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                  <MapPin className="size-3.5" />
                  {contactDetails.location}
                </div>
              </div>
              <CardTitle className="text-2xl font-semibold sm:text-3xl">
                Direct contact, quick replies, and clear next steps.
              </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-2">
              {quickLinks.map(({ title, value, href, icon: Icon, note }) => (
                <Link
                  key={title}
                  href={href}
                  className="group bg-background/80 rounded-3xl border p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="bg-muted text-foreground inline-flex rounded-2xl p-3">
                      <Icon className="size-5" />
                    </div>
                    <ArrowUpRight className="text-muted-foreground size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.22em] uppercase">
                    {title}
                  </p>
                  <p className="text-lg font-semibold tracking-tight break-all">
                    {value}
                  </p>
                  <p className="text-copy mt-3 text-sm leading-6">{note}</p>
                </Link>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="bg-card/90 border border-white/15 shadow-lg shadow-black/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Social links
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="border border-white/15 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--primary)_14%,var(--card)_86%),color-mix(in_oklab,var(--card)_92%,white_8%))] shadow-lg shadow-black/5">
              <CardContent className="space-y-4 pt-6">
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
                  Preferred flow
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Send the idea. I&apos;ll help shape the next move.
                </h2>
                <p className="text-copy text-sm leading-6">
                  Share what you&apos;re building, what&apos;s blocking you, or
                  what kind of setup you need. We can keep it simple and turn it
                  into a clear plan fast.
                </p>
                <Button
                  asChild
                  className="w-full py-6 text-sm font-semibold uppercase"
                >
                  <Link href={contactDetails.emailHref}>
                    Start With Email
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
