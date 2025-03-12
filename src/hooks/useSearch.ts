import { useContext } from "react";
import { Context } from "../context/Context";

export const useSearch = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};