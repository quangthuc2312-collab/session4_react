function ProductCard({ name, price, icon }) {
  return (
    <div className="product-card">
      <div className="product-icon">{icon}</div>
      <h3>{name}</h3>
      <p className="price">{price}đ</p>
      <button>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductCard;
