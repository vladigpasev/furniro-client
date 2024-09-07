export default function CartHeader() {
  return (
    <section className="cart-page">
      <div className="text-group">
        <img className="cart-logo" src="/public/page-logo.svg" alt="logo" />
        <h1 className="page">Cart</h1>
        <div className="cart-navigation">
          <span className="from-home">Home</span>
          <span className="to">
            <img src="/public/to.svg" alt="to" />
          </span>
          <span className="cart">Cart</span>
        </div>
      </div>
    </section>
  );
}
