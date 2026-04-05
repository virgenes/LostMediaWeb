import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export type GameTheme = "default" | "talkingtom" | "happymod";

export function useGameTheme(): GameTheme {
  const location = useLocation();
  
  let theme: GameTheme = "default";
  if (location.pathname.includes("/juegos/talkingtom")) theme = "talkingtom";
  else if (location.pathname.includes("/juegos/happymod")) theme = "happymod";

  useEffect(() => {
    document.body.classList.remove("theme-default", "theme-talkingtom", "theme-happymod");
    document.body.classList.add(`theme-${theme}`);
    return () => {
      document.body.classList.remove(`theme-${theme}`);
    };
  }, [theme]);

  return theme;
}
