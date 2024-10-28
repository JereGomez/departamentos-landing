import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHash();
  }, [location]);

  return null;
};

export default ScrollToTop;
