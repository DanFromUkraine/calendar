import { ShowSidebar } from ".";

export default function ShowSidebarProvider({ children }) {
  const value = window.innerWidth > 1024 ? true : false;
  return <ShowSidebar.Provider value={value}>{children}</ShowSidebar.Provider>;
}
