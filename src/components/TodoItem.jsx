import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    if (editText.trim() === "") return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  }

  function cancelEdit() {
    setEditText(todo.text);
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  }

  return (
    <div className={todo.done ? "todo-item done" : "todo-item"}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <input
          className="todo-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      {isEditing ? (
        <>
          <button className="small success" onClick={saveEdit}>Lưu</button>
          <button className="small muted" onClick={cancelEdit}>Hủy</button>
        </>
      ) : (
        <>
          <button className="small" onClick={() => setIsEditing(true)}>Sửa</button>
          <button className="small danger" onClick={() => onDelete(todo.id)}>Xóa</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
