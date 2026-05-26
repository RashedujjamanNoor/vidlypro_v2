import { useEffect } from "react";

import gsap from "gsap";

const useGsapReveal = (ref) => {
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
    );
  }, [ref]);
};

export default useGsapReveal;
