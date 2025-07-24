import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Start as false so initial render has a valid boolean
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Listen for changes
    mql.addEventListener("change", onChange);
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return the boolean directly
  return isMobile;
}
