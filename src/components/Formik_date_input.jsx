import Inputmask from "inputmask";
import { useField } from "formik";
import { useEffect } from "react";

export default function Formik_date_input({
  set_date_inp_completed,
  ...props
}) {
  const [field] = useField(props);

  const handleInput = ({ target }) => {
    const H = Number(target.value[0]);
    const h = Number(target.value[1]);
    const M = Number(target.value[3]);
    const m = Number(target.value[4]);

    target.setSelectionRange(0, 0);

    if (H > 2) {
      target.value = "2";
    }

    if (H === 2 && h > 3) {
      target.value = "23";
    }

    if (M > 5) {
      target.value = `${H}${h} 5`;
    }

    if (!Number.isNaN(m)) {
      set_date_inp_completed(true);
    } else {
      set_date_inp_completed(false);
    }
  };

  useEffect(() => {
    // Я пробував виконати задачу з useRef, записуючи туди автоматично input, але є дрібні відмінності, що змушують використовути нативний функціонал js, щоб скористатись inputmask
    Inputmask({
      mask: "99:99",
    }).mask(document.getElementById("date_inp"));
  });
  return (
    <input
      type="text"
      id="date_inp"
      placeholder="12:59"
      onInput={handleInput}
      {...field}
      {...props}
    />
  );
}
