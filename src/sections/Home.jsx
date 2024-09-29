import { Sidebar } from "../components";
// import { useContext } from "react";
// import { Data } from "../context";
import DataProvider from "../components/DataProvider";

export default function Home() {
  return (
    <main className="font_poppins">
      <DataProvider>
        <Sidebar />
      </DataProvider>
    </main>
  );
}
