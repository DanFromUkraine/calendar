// import { useContext } from "react";
import Header from "./Header";
// import { SidebarUtils } from "../context";
import classNames from "classnames";
import BigCalendar from "./BigCalendar";

export default function MainContent() {
    // const {is_shown} = useContext(SidebarUtils);
    const main_classes = classNames("flex flex-col flex-grow custom_border border-l-0",
      //  {"w-full": !is_shown}
      )
    
  return (
    <main className={main_classes}>
      <Header />
      <BigCalendar />
    </main>
  );
}
