export default function CartFooter() {
  return (
    <section className="promise">
      <div className="promises-list">
        <div className="one-promise">
          <div className="promise-icon">
            <img src="/public/prize.svg" alt="prize" />
          </div>
          <div className="one-promise-text">
            <h3 className="promise-title">High Quality</h3>
            <p className="promise-description">crafted from top materials</p>
          </div>
        </div>

        <div className="one-promise">
          <div className="promise-icon">
            <img src="/public/guarantee.svg" alt="guarantee" />
          </div>
          <div className="one-promise-text">
            <h3 className="promise-title">Warranty Protection</h3>
            <p className="promise-description">Over 2 years</p>
          </div>
        </div>

        <div className="one-promise">
          <div className="promise-icon">
            <img src="/public/shipping.svg" alt="shipping" />
          </div>
          <div className="one-promise-text">
            <h3 className="promise-title">Free Shipping</h3>
            <p className="promise-description">Order over 150 $</p>
          </div>
        </div>

        <div className="one-promise">
          <div className="promise-icon">
            <img src="/public/customer-support.svg" alt="support" />
          </div>
          <div className="one-promise-text">
            <h3 className="promise-title">24 / 7 Support</h3>
            <p className="promise-description">Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
