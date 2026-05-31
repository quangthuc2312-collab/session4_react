import { useState } from "react";
import TierLayout from "../components/TierLayout";

function BadCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log("BadCounter count:", count);
  }

  return (
    <div className="demo-card">
      <h3>Biến thường</h3>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleClick}>Tăng thử</button>
      <p className="error-text">Console tăng nhưng giao diện không đổi.</p>
    </div>
  );
}

function GoodCounter() {
  console.log("GoodCounter render lại");
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>useState</h3>
      <p>Bộ đếm: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
      <p className="success-text">Gọi setCount → React render lại → UI cập nhật.</p>
    </div>
  );
}

function FlowDemo() {
  const [step, setStep] = useState(1);

  return (
    <div className="demo-card wide">
      <h3>React Flow</h3>
      <p>Bước hiện tại: <b>{step}</b></p>
      <button onClick={() => setStep(step < 4 ? step + 1 : 1)}>Bước tiếp theo</button>
      <button className="muted-btn" onClick={() => setStep(1)}>Reset</button>
      <div className="flow-box">
        {step === 1 && "1. Component được gọi"}
        {step === 2 && "2. Return JSX"}
        {step === 3 && "3. Người dùng tương tác và setState"}
        {step === 4 && "4. React render lại phần thay đổi"}
      </div>
    </div>
  );
}

function Tier1ReactFlow() {
  return (
    <TierLayout
      title="Tier 1 — Hiểu luồng hoạt động của React"
      goal="So sánh biến thường với useState và hiểu setState làm UI re-render."
    >
      <div className="grid two">
        <BadCounter />
        <GoodCounter />
      </div>
      <FlowDemo />
    </TierLayout>
  );
}

export default Tier1ReactFlow;
