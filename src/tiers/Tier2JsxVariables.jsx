import TierLayout from "../components/TierLayout";

function Tier2JsxVariables() {
  const ten = "Nguyễn Quang Thực";
  const tuoi = 20;
  const queQuan = "Bắc Ninh";
  const gio = new Date().getHours();
  const loiChao = gio < 12 ? "Chào buổi sáng" : gio < 18 ? "Chào buổi chiều" : "Chào buổi tối";
  const canNang = 62;
  const chieuCao = 1.7;
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
  const isOnline = true;
  const stock = 0;

  const products = [
    { id: 1, name: "Bàn phím", price: 450000 },
    { id: 2, name: "Màn hình", price: 2500000 },
    { id: 3, name: "Chuột", price: 300000 },
    { id: 4, name: "Tai nghe", price: 1200000 },
    { id: 5, name: "Laptop", price: 15000000 }
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <TierLayout
      title="Tier 2 — Biến trong JSX"
      goal="Dùng dấu {} để đưa biến, điều kiện và danh sách JavaScript vào giao diện."
    >
      <div className="grid two">
        <div className="demo-card">
          <h3>{loiChao}, {ten}!</h3>
          <p>Tuổi: {tuoi}</p>
          <p>Năm sau: {tuoi + 1}</p>
          <p>Quê quán: {queQuan}</p>
          <p>BMI: {bmi}</p>
          <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
          <p>{stock === 0 ? "Hết hàng" : "Còn hàng"}</p>
        </div>

        <div className="demo-card">
          <h3>Danh sách sản phẩm</h3>
          {products.map((product, index) => (
            <div key={product.id} className="row-line">
              <span>{index + 1}. {product.name}</span>
              <b className={product.price > 1000000 ? "red" : ""}>
                {product.price.toLocaleString("vi-VN")}đ
              </b>
            </div>
          ))}
          <hr />
          <p>Tổng giá: <b>{total.toLocaleString("vi-VN")}đ</b></p>
        </div>
      </div>
    </TierLayout>
  );
}

export default Tier2JsxVariables;
