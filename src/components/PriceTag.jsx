function PriceTag({ originalPrice, salePrice }) {
  return (
    <div className="price-tag">
      <span>{originalPrice}đ</span>
      <strong>{salePrice}đ</strong>
    </div>
  );
}

export default PriceTag;
