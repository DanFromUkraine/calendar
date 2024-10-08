import Note from "./Note";

export default function BigDayCell(props) {

  const { notes, day_number } = props;

  const notes_to_show = notes.slice(0, 2);
  const hidden_notes_countity = notes.slice(2).length;


  return (
    <div className="p-1.5 w-full">
      <span>{day_number}</span>

      <div className="w-full flex flex-col items-end">
        {notes_to_show.length > 0 &&
          notes_to_show.map((note, i) => <Note key={i} note={note}/>)}
        {hidden_notes_countity > 0 && (
          <span>{`+ ${hidden_notes_countity} More`}</span>
        )}
      </div>
    </div>
  );
}
