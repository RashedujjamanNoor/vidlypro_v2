import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealUp = (element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 120,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    },
  );
};

export default revealUp;
