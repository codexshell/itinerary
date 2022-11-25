import { useState } from "react";

export default function ListItem({
  location,
  onCheckedChange,
  onEdit,
  onDelete,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(location.text);

  function handleClick(e) {
    // make sure the button text is on 'save' before executing function
    if (e.target.innerText === "Save") {
      setIsEdit(false);
      onEdit({
        ...location,
        text,
      });
    } else {
      setIsEdit(true);
    }
  }

  return (
    <div style={{ marginBottom: ".5em" }}>
      {isEdit ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </>
      ) : (
        <>
          <label style={{ paddingLeft: ".5em" }}>
            <input
              onChange={() => onCheckedChange(location.id)}
              checked={location.done}
              type="checkbox"
            />
            <span style={{ marginLeft: ".5em" }}>{location.text}</span>
          </label>
        </>
      )}

      <button onClick={handleClick} disabled={text.length === 0}>
        {isEdit ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(location.id)}>Delete</button>
    </div>
  );
}
