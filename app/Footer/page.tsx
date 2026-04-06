import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 text-muted-foreground w-full border-t py-4 text-center text-xs">
      <div className="flex flex-col">
        <span>
          &copy; {new Date().getFullYear()} <strong>Cornelius Motanya</strong>.
        </span>
        <span>
          Designed & built with{" "}
          <Heart className="stroke-error fill-error inline-block size-4" />{" "}
          using Next.js.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
