import SplitType from "split-type";
import gsap from "gsap";

type HeroAnimationProps = {
  titleEl: HTMLElement;
  subTextEl: HTMLElement;
};

export function animateHeroEntrance({
  titleEl,
  subTextEl,
}: HeroAnimationProps) {
  const titleSplit = SplitType.create(titleEl, {
    types: "words",
  });

  const subSplit = SplitType.create(subTextEl, {
    types: "lines",
  });

  gsap.from(titleSplit.words, {
    y: 30,
    scale: 0.5,
    opacity: 0,
    duration: 0.3,
    ease: "back.out(2.0)",
    stagger: { each: 0.1 },
  });

  gsap.from(subSplit.lines, {
    y: 20,
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    stagger: { each: 0.15 },
    delay: 1.2,
  });

  return () => {
    titleSplit?.revert();
    subSplit?.revert();
  };
}
