import Note from "./Note";

export default function RenderNotes({ notes_list, is_disabled }) {


  if (Array.isArray(notes_list)) {
    return (
      <div className="flex flex-col">
        {notes_list.map((note, i) => (
          <Note key={i} note={{...note, is_disabled}} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}
