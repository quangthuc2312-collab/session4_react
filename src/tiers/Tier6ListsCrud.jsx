import { useState } from "react";
import TierLayout from "../components/TierLayout";

function ListBasics() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho"];
  const students = [
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 }
  ];
  const averageAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;

  return (
    <div className="demo-card">
      <h3>Render danh sách</h3>
      <ul>
        {fruits.map((fruit, index) => <li key={fruit}>{index + 1}. {fruit}</li>)}
      </ul>
      {students.map((student, index) => (
        <div key={student.id} className="row-line">
          <span>{index + 1}. {student.name}</span>
          <b className={student.age >= 20 ? "green" : ""}>{student.age} tuổi</b>
        </div>
      ))}
      <p>Tuổi trung bình: {averageAge.toFixed(1)}</p>
    </div>
  );
}

function CrudStudents() {
  const [students, setStudents] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 }
  ]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [message, setMessage] = useState("");
  const [lastDeleted, setLastDeleted] = useState(null);

  function addStudent() {
    if (newName.trim() === "" || newAge === "") return;
    const newStudent = {
      id: Date.now(),
      name: newName,
      age: Number(newAge)
    };
    setStudents([...students, newStudent]);
    setNewName("");
    setNewAge("");
    setMessage("Đã thêm thành công!");
  }

  function deleteStudent(student) {
    if (!window.confirm(`Xóa ${student.name}?`)) return;
    setStudents(students.filter((item) => item.id !== student.id));
    setLastDeleted(student);
    setMessage(`Đã xóa ${student.name}`);
  }

  function undoDelete() {
    if (!lastDeleted) return;
    setStudents([...students, lastDeleted]);
    setLastDeleted(null);
    setMessage("Đã hoàn tác");
  }

  function startEdit(student) {
    setEditingId(student.id);
    setEditName(student.name);
    setEditAge(student.age.toString());
  }

  function saveEdit() {
    if (editName.trim() === "" || editAge === "") return;
    setStudents(students.map((student) => (
      student.id === editingId
        ? { ...student, name: editName, age: Number(editAge) }
        : student
    )));
    setEditingId(null);
    setMessage("Đã lưu!");
  }

  function cancelEdit() {
    setEditingId(null);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") addStudent();
  }

  return (
    <div className="demo-card wide">
      <h3>CRUD sinh viên</h3>
      <div className="form-row">
        <input value={newName} onChange={(e) => setNewName(e.target.value)} onKeyDown={handleKeyDown} placeholder="Tên sinh viên" />
        <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} onKeyDown={handleKeyDown} placeholder="Tuổi" />
        <button onClick={addStudent}>Thêm</button>
      </div>

      {message && <p className="success-text">{message}</p>}
      {lastDeleted && <button className="muted-btn" onClick={undoDelete}>Hoàn tác xóa</button>}

      {students.length === 0 ? (
        <p className="empty-text">Danh sách trống</p>
      ) : (
        students.map((student) => (
          <div key={student.id} className="crud-row">
            {editingId === student.id ? (
              <>
                <input className="highlight-input" value={editName} onChange={(e) => setEditName(e.target.value)} autoFocus />
                <input className="highlight-input age-input" type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                <button className="success" onClick={saveEdit}>Lưu</button>
                <button className="muted" onClick={cancelEdit}>Hủy</button>
              </>
            ) : (
              <>
                <span>{student.name} - {student.age} tuổi</span>
                <button onClick={() => startEdit(student)}>Sửa</button>
                <button className="danger" onClick={() => deleteStudent(student)}>Xóa</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

function Tier6ListsCrud() {
  return (
    <TierLayout
      title="Tier 6 — Lists & CRUD"
      goal="Render danh sách bằng map, thêm bằng spread, sửa bằng map và xóa bằng filter."
    >
      <div className="grid two">
        <ListBasics />
        <CrudStudents />
      </div>
    </TierLayout>
  );
}

export default Tier6ListsCrud;
