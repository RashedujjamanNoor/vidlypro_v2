import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallax = (element, y = -120) => {
  gsap.to(element, {
    y,
    ease: "none",

    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export default parallax;
