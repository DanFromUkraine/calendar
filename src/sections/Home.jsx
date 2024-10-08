import { Sidebar } from "../components";

import ShowSidebarProvider from "../context/SidebarProvider";
import DataProvider from "../context/DataProvider";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <main className="font_poppins">
      <DataProvider>
        <ShowSidebarProvider>
          <div className="flex">
          <Sidebar />
          <MainContent />
          </div>
         
        </ShowSidebarProvider>
      </DataProvider>
    </main>
  );
}
