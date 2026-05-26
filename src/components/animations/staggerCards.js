import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const staggerCards = (elements) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",

      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        once: true,
      },
    },
  );
};

export default staggerCards;
