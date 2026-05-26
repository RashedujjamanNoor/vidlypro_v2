import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGsapRefresh = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);
};

export default useGsapRefresh;
