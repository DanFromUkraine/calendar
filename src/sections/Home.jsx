import { Sidebar } from "../components";

import ShowSidebarProvider from "../context/SidebarProvider";
import DataProvider from "../context/DataProvider";

export default function Home() {
  return (
    <main className="font_poppins">
      <DataProvider>
        <ShowSidebarProvider>
          <Sidebar />
        </ShowSidebarProvider>
      </DataProvider>
    </main>
  );
}
