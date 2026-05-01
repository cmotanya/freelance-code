import ContactForm from "@/components/contact-form";
import { faqs, quickLinks } from "@/data/contact";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  CustomerService01Icon,
  MapPinIcon,
  Quiz02Icon,
  ZapIcon,
} from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import CurrentTime from "@/components/current-time";
import { cn } from "@/lib/utils";
import { nova } from "@/data/fonts";

const Contact = () => {
  return (
    <section className="my-10 min-h-screen space-y-8">
      <div className="space-y-4 px-5">
        <h1 className="text-6xl font-extrabold tracking-tighter uppercase">
          Let&apos;s <span className="text-primary">Build</span>{" "}
          <span className={cn("text-foreground/50", nova.className)}>
            Together
          </span>
        </h1>

        <div className="flex items-center justify-between gap-1 text-xs">
          <div className="flex items-center gap-1 font-medium">
            <MapPinIcon size={18} strokeWidth={2} /> Mombasa, Kenya
          </div>
          <div className="font-medium">
            <CurrentTime />
            EAT
          </div>
        </div>
      </div>

      <ContactForm />

      {/* Fast Response */}
      <div className="my-14 space-y-2 px-5">
        <h3 className="text-foreground/70 flex items-center gap-2 text-base font-bold tracking-widest uppercase">
          <ZapIcon color="#4a4a4a" strokeWidth={2} /> Fast Response
        </h3>
        <div className="space-y-3">
          <p className="text-foreground/50">
            I typically respond within the shortest time, the moment I am
            notified of the response.
          </p>

          <Link href="#contact-form">
            <button
              type="button"
              className="bg-foreground text-background group flex items-center gap-2 rounded-2xl px-5 py-3.5 tracking-wide uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100"
            >
              Book A Schedule{" "}
              <ArrowRight02Icon className="transition-transform group-active:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* Faqs */}
      <div className="my-14 space-y-2 px-5">
        <h3 className="text-foreground/70 flex items-center gap-2 text-base font-bold tracking-widest uppercase">
          <Quiz02Icon color="#4a4a4a" strokeWidth={2} /> faq
        </h3>
        <p className="text-foreground/60 font-medium">
          Everything you need to know before we get started.{" "}
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-0.5">
              <div className="flex items-center">
                <span className="text-foreground/60 mr-2 font-medium">
                  {index + 1}.
                </span>
                <h4 className="font-semibold">{faq.q}</h4>
              </div>
              <p className="text-foreground/60 ml-5 text-xs">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct contact */}
      <div className="my-14 space-y-2 px-5">
        <h3 className="text-foreground/70 flex items-center gap-2 text-base font-bold tracking-widest uppercase">
          {" "}
          <CustomerService01Icon color="#4a4a4a" strokeWidth={2} /> Direct
          Channel
        </h3>
        <p className="text-foreground/60">
          Do not hesitate to reach out for immediate technical questions and
          chats.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
          {quickLinks.map(({ title, value, href, iconSrc }) => (
            <Link
              key={title}
              href={href}
              className="bg-muted/30 rounded-3xl border p-4 transition-all duration-300 ease-in-out hover:scale-95 active:scale-105"
            >
              <div className="mb-4 flex items-start justify-between">
                {iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={title}
                    width={24}
                    height={24}
                    className=""
                  />
                )}
                <span className="text-foreground/50 bg-background rounded-md border px-1 py-0.5 text-[10px] font-medium">
                  {title}
                </span>
              </div>

              <span className="text-primary font-medium tracking-wide">
                {value}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
          <button className="bg-foreground group text-background flex items-center gap-2 rounded-2xl px-5 py-3.5 font-medium tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100">
            <ArrowLeft02Icon className="transition-all group-active:-translate-x-1" />{" "}
            Return to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
