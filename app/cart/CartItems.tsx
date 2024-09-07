export default function CartItems() {
  return (
    <section className="card-information">
      <div className="card-table">
        <div className="separation-options">
          <div className="empty-div"></div>
          <div className="sep-product">Product</div>
          <div className="sep-prize">Price</div>
          <div className="sep-quantity">Quantity</div>
          <div className="seb-subtotal">Subtotal</div>
        </div>

        <div className="all-card-items">
          <div className="one-card-item">
            <div className="furn-cart-image">
              <img src="/public/cart-sofa.svg" alt="cart-furniture" />
            </div>

            <div className="card-item-name">Asgaard sofa</div>
            <div className="card-item-prize">Rs. 250,000.00</div>
            <div className="card-item-quantity-out">
              <div className="card-item-quantity">1</div>
            </div>
            <div className="card-item-subtotal">Rs. 250,000.00</div>
            <div className="cart-item-trash">
              <img src="/public/trash.svg" alt="trash" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-totals">
        <h1 className="cart-totals-heading">Cart Totals</h1>

        <div className="totals-info">
          <div className="subtotal-info">
            <span className="subtotal-span">Subtotal</span>
            <span className="subtotal-prize">Rs. 250,000.00</span>
          </div>

          <div className="total-info">
            <span className="total-span">Total</span>
            <span className="total-prize">Rs. 250,000.00</span>
          </div>
        </div>

        <button className="check-out-btn">Check Out</button>
      </div>
    </section>
  );
}
