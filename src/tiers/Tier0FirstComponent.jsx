import TierLayout from "../components/TierLayout";

function StudentCard() {
  return (
    <div className="demo-card">
      <h3>Hồ sơ cá nhân</h3>
      <div className="big-avatar">👨‍🎓</div>
      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Nguyễn Quang Thực</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>quangthuc2312@gmail.com</td>
          </tr>
          <tr>
            <td>Ngành:</td>
            <td>Hệ thống thông tin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="demo-card">
      <h3>iPhone 15</h3>
      <p className="price">25.000.000đ</p>
      <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
      </ul>
      <button>Mua ngay</button>
    </div>
  );
}

function Tier0FirstComponent() {
  return (
    <TierLayout
      title="Tier 0 — Component đầu tiên"
      goal="Làm quen JSX: className, htmlFor, đóng thẻ img/input và viết function component."
    >
      <div className="grid two">
        <StudentCard />
        <ProductInfo />
      </div>
      <div className="note">
        React Component là function trả về JSX. JSX gần giống HTML nhưng dùng <b>className</b> thay cho class và mọi thẻ phải được đóng.
      </div>
    </TierLayout>
  );
}

export default Tier0FirstComponent;
