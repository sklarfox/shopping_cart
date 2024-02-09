const Product = ({ product, setEditFormVisible }) => {
  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart" disabled={product.quantity <= 0}>
          Add to Cart
        </button>
        <button className="edit" onClick={() => setEditFormVisible(true)}>
          Edit
        </button>
      </div>
      <button className="delete-button">
        <span>X</span>
      </button>
    </div>
  );
};

export default Product;
