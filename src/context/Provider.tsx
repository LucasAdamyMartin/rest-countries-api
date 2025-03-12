import { ReactNode, useEffect, useMemo, useState } from "react";
import { Context } from "./Context";
import { FilterType } from "../types/Filter";

type ProviderProps = {
    children : ReactNode;
}

export const Provider = ( {children}:  ProviderProps) => {
    const [filter,setFilter] = useState<FilterType>("none");
    const getInitialTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    const [darkMode, setDarkMode] = useState(getInitialTheme);
    
    const value = useMemo(() => ({
        filter,
        setFilter,
        darkMode,
        setDarkMode
    }),[filter, darkMode]);

    useEffect(() => {
        if (darkMode) {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}