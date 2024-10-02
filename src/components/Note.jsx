import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";

export default function Note({ text, color, timestamp, is_completed }) {
  const dot = classNames("w-2 h-2 rounded-full", `bg-${color}-dot`);
  const span = classNames(`text-${color}-text`, {
    "text-slate-600": is_completed,
  });
  const cont = classNames(
    "flex justify-between items-center text-sm font-semibold",
    { "line-through": is_completed }
  );
  let icon;
  try {
    icon = <CheckIcon style={{width: "16px", height:"16px"}} />;
  } catch (e) {
    console.log(e);
  }

  return (
    <div className={cont}>
      <span className="flex gap-0.5 items-center ">
        {is_completed ? (
          <span className="">
            {icon}
          </span>
        ) : (
          <span className={dot}></span>
        )}
        <span className={span}>{text}</span>
      </span>
      <span className="text-mid_gray">{timestamp}</span>
    </div>
  );
}
