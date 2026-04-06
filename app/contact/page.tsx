import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactDetails, quickLinks } from "@/data/contact";

const Contact = () => {
  return (
    <section className="min-h-screen space-y-6 px-5 py-8">
      <Button asChild className="text-base">
        <Link href="/">
          <ArrowBigLeft /> Back
        </Link>
      </Button>

      <div>
        <h1 className="mt-8 text-3xl font-bold">Contact</h1>
        <h3 className="text-muted-foreground">
          Feel free to reach out for new projects, creative ideas, or
          opportunities to work together.
        </h3>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="border-card bg-muted text-muted-foreground rounded-xl border px-2 py-1.5 text-xs font-semibold tracking-[0.22em] uppercase">
            Open For Work
          </span>
          <div className="text-muted-foreground border-ring/30 flex items-center gap-1 rounded-xl border px-2 py-1 text-xs font-medium">
            <MapPin
              size={18}
              strokeWidth={3}
              className="fill-primary stroke-primary-foreground"
            />
            <span>{contactDetails.location}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        {quickLinks.map(({ title, value, href, iconSrc, note }) => (
          <Link
            key={title}
            href={href}
            className="bg-muted border-border space-y-4 rounded-3xl border p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm"
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

              <p className="text-primary font-semibold">{value}</p>
            </div>
            <p className="text-muted-foreground text-xs font-medium">{note}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
