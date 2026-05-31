import { useState } from "react";
import TierLayout from "../components/TierLayout";

function NumberState() {
  const [count, setCount] = useState(0);
  const color = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div className="demo-card">
      <h3>useState với số</h3>
      <h2 style={{ color }}>Bộ đếm: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(count + 5)}>Tăng 5</button>
      <button className="muted-btn" onClick={() => setCount(0)}>Reset</button>
      <p>{count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Bằng 0"}</p>
    </div>
  );
}

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="demo-card">
      <h3>useState với chuỗi</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
      <div className="inline-input">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩu"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Ẩn" : "Hiện"}
        </button>
      </div>
      <p>Ký tự tên: {name.length}/100</p>
      <p>Email: {email.includes("@") ? "Hợp lệ" : "Chưa hợp lệ"}</p>
      {name && <p className="preview">Xin chào <b>{name}</b>! Email của bạn là {email || "..."}</p>}
    </div>
  );
}

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={isDarkMode ? "demo-card dark" : "demo-card"}>
      <h3>useState với boolean</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
      </button>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "💡 Bật" : "⚫ Tắt"}
      </button>
      {isVisible && <p className="preview">Đây là nội dung có thể ẩn / hiện.</p>}
    </div>
  );
}

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (name.trim() === "" || email.trim() === "" || age === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const ageNumber = Number(age);
    if (ageNumber <= 0 || ageNumber >= 100) {
      alert("Tuổi phải > 0 và < 100");
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setAge("");
    setEmail("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div className="demo-card wide">
      <h3>Kết hợp nhiều useState</h3>
      {!submitted ? (
        <div className="form-grid">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Tuổi" />
          <label className="check-line">
            <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
            Là sinh viên
          </label>
          {name && <p>Xin chào {name}!</p>}
          <button onClick={handleSubmit}>Đăng ký</button>
        </div>
      ) : (
        <div className="success-box">
          <h3>Đăng ký thành công!</h3>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
          <p>Tuổi: {age}</p>
          <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
          <button onClick={handleReset}>Đăng ký lại</button>
        </div>
      )}
    </div>
  );
}

function Tier4UseStateBasics() {
  return (
    <TierLayout
      title="Tier 4 — useState cơ bản"
      goal="Quản lý trạng thái với số, chuỗi, boolean và nhiều state trong cùng component."
    >
      <div className="grid three">
        <NumberState />
        <StringState />
        <BooleanState />
      </div>
      <MultipleStates />
    </TierLayout>
  );
}

export default Tier4UseStateBasics;
