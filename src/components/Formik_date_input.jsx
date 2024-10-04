import Inputmask from "inputmask";
import { useField } from "formik";
import { useEffect } from "react";

export default function Formik_date_input({
  set_date_inp_completed,
  ...props
}) {
  const [field] = useField(props);

  useEffect(() => {
    // Я пробував виконати задачу з useRef, записуючи туди автоматично input, але є дрібні відмінності, що змушують використовути нативний функціонал js, щоб скористатись inputmask
    Inputmask({
      regex: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$",
      oncomplete: () => set_date_inp_completed(true),
      oncleared: () => set_date_inp_completed(false),
    }).mask(document.getElementById("date_inp"));
  });
  return (
    <input
      type="text"
      id="date_inp"
      placeholder="12:59"
      {...field}
      {...props}
    />
  );
}
