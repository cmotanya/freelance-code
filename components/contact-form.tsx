"use client";

import { errorMessage, getInputClass, labelClass } from "./ui/form-helpers";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { SentIcon } from "hugeicons-react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const initialState = {
    success: true,
    error: {},
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="space-y-5 px-5">
      <h2 className="text-foreground/60 flex items-center font-medium">
        For consultation, reach me here...{" "}
        <span className="animate-blink ms-1 h-4 w-0.5 bg-current" />
      </h2>

      <form ref={formRef} action={formAction} noValidate className="space-y-3">
        <div className="flex flex-col">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Your name"
            autoComplete="name"
            disabled={isPending}
            className={getInputClass(state.error?.name, false)}
          />
          {errorMessage(state.error?.name?.[0])}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Your email address"
            autoComplete="email"
            disabled={isPending}
            className={getInputClass(state.error?.email, false)}
          />
          {errorMessage(state.error?.email?.[0])}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Write your message here"
            disabled={isPending}
            className={cn(
              "placeholder:text-foreground/40 focus-visible:border-foreground/50 border-muted-foreground/20 resize-none rounded-2xl border py-3 ps-4 transition",
              state.error?.message ? "border-error/40" : "",
            )}
          />
          {errorMessage(state.error?.message?.[0])}
        </div>

        <div className="w-full">
          <button
            disabled={isPending}
            className={cn(
              "bg-foreground text-background group ml-auto flex items-center gap-2 rounded-2xl px-4 py-3 font-medium uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100",
              isPending &&
                "bg-foreground/30 text-foreground/50 cursor-not-allowed",
            )}
          >
            {isPending ? "Submitting..." : "Submit"}
            {!isPending && (
              <SentIcon className="transition-transform group-active:translate-x-1" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
