import Header from "./Header";
import classNames from "classnames";
import BigCalendar from "./BigCalendar";

export default function MainContent() {
  const main_classes = classNames(
    "flex flex-col flex-grow custom_border border-l-0"
  );

  return (
    <main className={main_classes}>
      <Header />
      <BigCalendar />
    </main>
  );
}
