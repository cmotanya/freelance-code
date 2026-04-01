import gsap from "gsap";

export function glitchEffect(element: HTMLElement | null) {
  if (!element) return;

  let timeoutId: ReturnType<typeof setTimeout>;
  const ctx = gsap.context(() => {});

  const glitch = () => {
    ctx.add(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          timeoutId = setTimeout(glitch, 2000 + Math.random() * 3000);
        },
      });

      tl.to(element, {
        x: () => (Math.random() - 0.5) * 10,
        duration: 0.045,
        skewX: () => (Math.random() - 0.5) * 20,
        opacity: 0.8,
        animationDuration: 0.05,
        ease: "none",
      })
        .to(element, {
          x: () => (Math.random() - 0.5) * 15,
          //   duration: 0.045,
          skewX: () => (Math.random() - 0.5) * -20,
          filter: "contrast(200%) brightness(150%)",
          animationDuration: 0.03,
          ease: "none",
        })
        .to(element, {
          x: 0,
          y: 0,
          opacity: 1,
          filter: "none",
          duration: 0.045,
          ease: "none",
        });
    });
  };

  timeoutId = setTimeout(glitch, 3000);

  return () => {
    clearTimeout(timeoutId);
    ctx.revert();
  };
}
