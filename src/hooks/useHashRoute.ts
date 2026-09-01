import { useEffect, useState } from "react";

const getRoute = () => window.location.hash.replace(/^#\/?/, "") || "home";

export function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route;
}
