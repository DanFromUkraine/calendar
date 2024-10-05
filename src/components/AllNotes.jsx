import Note from "./Note";

export default function RenderNotes({ notes_list }) {
  return (
    <div>
      <h2>Upcoming events</h2>
      <div className="flex flex-col">
        {notes_list.map((note, i) => (
          <Note key={i} note={note}/>
        ))}
      </div>
    </div>
  );
}
