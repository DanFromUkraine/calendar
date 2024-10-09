import { useContext } from "react";
import { Data } from "../context";
import { nav_next_month } from "../utils";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function NavNextMonth() {
  const { set_all_data } = useContext(Data);
  return (
    <span onClick={nav_next_month(set_all_data)}>
      <ArrowForwardIosIcon fontSize="small" />
    </span>
  );
}
