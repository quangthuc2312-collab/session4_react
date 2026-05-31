import { useState } from "react";
import TierLayout from "../components/TierLayout";

function ClickEvents() {
  const colors = ["#f5f7ff", "#fff4e6", "#eefbf1", "#fff0f3"];
  const [message, setMessage] = useState("Chưa click");
  const [clickCount, setClickCount] = useState(0);
  const [like, setLike] = useState(false);
  const [boxColor, setBoxColor] = useState(colors[0]);

  function handleClick() {
    setMessage("Đã click lúc " + new Date().toLocaleTimeString());
    setClickCount(clickCount + 1);
  }

  function randomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBoxColor(colors[randomIndex]);
  }

  return (
    <div className="demo-card">
      <h3>Click Events</h3>
      <p>{message}</p>
      <p>Số lần click: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={randomColor}>Đổi màu</button>
      <button onClick={() => setLike(!like)}>{like ? "❤️ Đã thích" : "🤍 Thích"}</button>
      <div className="color-box" style={{ background: boxColor }}>Box đổi màu</div>
    </div>
  );
}

function InputEvents() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="demo-card">
      <h3>Input Events</h3>
      <input maxLength={100} value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập nội dung" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
      <p>Ký tự: {text.length}/100</p>
      <p>Số từ: {wordCount}</p>
      <p>Email: {email.includes("@") ? "Hợp lệ" : "Chưa hợp lệ"}</p>
      <p>Preview: {text || "..."}</p>
      {text.length > 80 && <p className="error-text">Sắp hết ký tự!</p>}
    </div>
  );
}

function KeyboardEvents() {
  const randomKeys = ["a", "s", "d", "f"];
  const [targetKey, setTargetKey] = useState("a");
  const [lastKey, setLastKey] = useState("");
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleKeyDown(event) {
    setLastKey(event.key);

    if (event.key.toLowerCase() === targetKey) {
      setScore(score + 1);
      const randomIndex = Math.floor(Math.random() * randomKeys.length);
      setTargetKey(randomKeys[randomIndex]);
    }

    if (event.key === "ArrowRight") setPosition({ ...position, x: position.x + 10 });
    if (event.key === "ArrowLeft") setPosition({ ...position, x: position.x - 10 });
    if (event.key === "ArrowDown") setPosition({ ...position, y: position.y + 10 });
    if (event.key === "ArrowUp") setPosition({ ...position, y: position.y - 10 });
  }

  return (
    <div className="demo-card" tabIndex={0} onKeyDown={handleKeyDown}>
      <h3>Keyboard Events</h3>
      <p>Click vào khung này rồi nhấn phím.</p>
      <p>Phím cần nhấn: <b>{targetKey.toUpperCase()}</b></p>
      <p>Phím vừa nhấn: {lastKey || "chưa có"}</p>
      <p>Điểm: {score}</p>
      <div className="move-area">
        <div className="move-box" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      </div>
    </div>
  );
}

function FormEvents() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name.trim() === "" || !formData.email.includes("@")) {
      alert("Tên không được trống và email phải có @");
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  }

  return (
    <div className="demo-card wide">
      <h3>Form Events</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Tên" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tin nhắn" rows="3" />
          <p className={formData.email.includes("@") ? "success-text" : "error-text"}>
            {formData.email.includes("@") ? "Email hợp lệ" : "Email cần có @"}
          </p>
          <button type="submit">Gửi</button>
          <button type="button" className="muted-btn" onClick={handleReset}>Xóa</button>
        </form>
      ) : (
        <div className="success-box">
          <h3>Đã gửi thành công!</h3>
          <p>Tên: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Tin nhắn: {formData.message || "Không có"}</p>
          <button onClick={handleReset}>Gửi lại</button>
        </div>
      )}
    </div>
  );
}

function Tier5EventsBasics() {
  return (
    <TierLayout
      title="Tier 5 — Events cơ bản"
      goal="Xử lý onClick, onChange, onKeyDown và onSubmit trong form."
    >
      <div className="grid three">
        <ClickEvents />
        <InputEvents />
        <KeyboardEvents />
      </div>
      <FormEvents />
    </TierLayout>
  );
}

export default Tier5EventsBasics;
