import { useEffect, useState } from "react";

export const useNavbarHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
