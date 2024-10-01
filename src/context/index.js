import { createContext } from "react";

const size = window.innerWidth
console.log({size})

export const Logined = createContext(false);
export const Data = createContext({});
export const ShowSidebar = createContext(false);