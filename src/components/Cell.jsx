import classNames from "classnames";

export default function Cell({
  text_color,
  is_selected,
  children,
  onClick,
  day
}) {
  
  const div_classes = classNames("w-8 h-8 flex justify-center items-center", {
      text_color: text_color,
    }),
    text_wrapper_classes = classNames({
      [`rounded-full ${is_selected && "bg-blue text-white p-1"}`]: is_selected,
    });

  return (
    <div className={div_classes} onClick={onClick?.bind(null, day)}>
      <div className={text_wrapper_classes}>{children}</div>
    </div>
  );
}
