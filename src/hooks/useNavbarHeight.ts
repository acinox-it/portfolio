import { useLayoutEffect, useState } from "react";

export const useNavbarHeight = () => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleResize = () => {
      if (navbar) {
        setHeight(navbar.offsetHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
