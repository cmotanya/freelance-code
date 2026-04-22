import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import CurrentTime from "@/components/current-time";
import { contactDetails, quickLinks } from "@/data/contact";

const Contact = () => {
  return (
    <section className="mt-10 min-h-screen space-y-6">
      <div className="space-y-5 px-5">
        <div>
          <h1 className="mt-8 text-3xl font-bold">Contact</h1>
          <h3 className="text-muted-foreground">
            Feel free to reach out for new projects, creative ideas, or
            opportunities to work together.
          </h3>
        </div>

        <div className="px-3">
          <div className="flex items-center justify-between">
            <span className="border-success/70 bg-success/10 text-success flex items-center gap-1.5 rounded-xl border px-2 py-1.5 text-xs font-semibold tracking-wide uppercase">
              <span className="bg-success size-2.5 rounded-full" />
              Open For Work.
            </span>
            <div className="text-muted-foreground flex items-center gap-1 rounded-xl border px-2 py-1 text-xs font-medium uppercase">
              <MapPin
                size={18}
                strokeWidth={3}
                className="fill-primary stroke-primary-foreground"
              />
              <span>{contactDetails.location}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-2 pt-5">
          {quickLinks.map(({ title, value, href, iconSrc, note }) => (
            <Link
              key={title}
              href={href}
              className="bg-muted border-muted-foreground/30 space-y-4 rounded-3xl border p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="mr-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={`${title} icon`}
                      width={20}
                      height={20}
                    />
                  ) : null}
                  <p>{title}</p>
                </div>

                <p className="text-primary border-muted-foreground/30 bg-background rounded-lg border p-1 text-xs font-medium tracking-tighter transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm active:scale-[102]">
                  {value}
                </p>
              </div>
              <p className="text-muted-foreground text-xs font-medium">
                {note}
              </p>
            </Link>
          ))}
        </div>

        <div className="border-muted-foreground/15 mt-16 gap-3 space-y-3 rounded-3xl border p-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/contact/checkmark-badge.svg"
              alt="checkmark badge"
              width={20}
              height={20}
            />
            <h3 className="text-muted-foreground text-lg font-medium">
              Fast Response
            </h3>
          </div>
          <p className="text-muted-foreground leading-tight">
            I typically respond as soon as possible.
          </p>
          <div className="text-muted-foreground flex items-center justify-center gap-3 text-xs font-medium">
            <Image
              src="/contact/customer-service-stroke-rounded.svg"
              alt="24 hour icon for support call"
              width={20}
              height={20}
              className="object-fit"
            />

            <div className="rounded-md py-1 font-semibold tracking-wider">
              <CurrentTime /> EAT (UTC+3)
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15 mb-10 flex w-full justify-center px-6">
        <button
          type="button"
          className="bg-muted border-muted-foreground/50 text-muted-foreground rounded-2xl border px-4 py-3 leading-5 font-semibold uppercase shadow-xs transition-all duration-200 ease-in-out hover:scale-105 focus:ring-4 active:scale-95"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft size={15} className="animate-arrow transition-all" />{" "}
            Back to Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Contact;
