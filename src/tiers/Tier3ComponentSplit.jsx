import TierLayout from "../components/TierLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import UserCard from "../components/UserCard";
import PriceTag from "../components/PriceTag";

function Tier3ComponentSplit() {
  const products = [
    { id: 1, name: "iPhone 15", price: "25.000.000", icon: "📱" },
    { id: 2, name: "Samsung S24", price: "22.000.000", icon: "📲" },
    { id: 3, name: "Xiaomi 14", price: "15.000.000", icon: "📞" }
  ];

  const users = [
    { id: 1, name: "Minh", email: "minh@example.com", avatar: "M" },
    { id: 2, name: "An", email: "an@example.com", avatar: "A" },
    { id: 3, name: "Linh", email: "linh@example.com", avatar: "L" }
  ];

  return (
    <TierLayout
      title="Tier 3 — Chia Component"
      goal="Tách giao diện thành Header, Footer, ProductCard, UserCard và truyền props từ cha xuống con."
    >
      <div className="mini-page">
        <Header />
        <main>
          <h3>Cửa hàng điện thoại</h3>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                icon={product.icon}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>

      <div className="grid two">
        <div className="demo-card">
          <h3>UserCard nhận props</h3>
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              avatar={user.avatar}
            />
          ))}
        </div>

        <div className="demo-card">
          <h3>PriceTag nhận props</h3>
          <PriceTag originalPrice="2.500.000" salePrice="1.990.000" />
          <PriceTag originalPrice="900.000" salePrice="690.000" />
        </div>
      </div>
    </TierLayout>
  );
}

export default Tier3ComponentSplit;
