import { createContext } from "react";
import { FilterType } from "../types/Filter";

type ContextType = {
    filter: FilterType;
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | undefined>(undefined);
