import { useContext } from "react";
import { Data } from "../context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { nav_last_month } from "../utils";

export default function NavLastMonth() {
  const { set_all_data } = useContext(Data);
  return (
    <span onClick={nav_last_month(set_all_data)}>
      <ArrowBackIosIcon fontSize="small" />
    </span>
  );
}
