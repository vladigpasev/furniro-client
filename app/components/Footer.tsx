export const Footer = () => {
    return (
      <footer>
        <div className="footer">
          <div className="footer-column">
            <h2 className="footer-name">Furniro.</h2>
            <p className="address">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Help</h3>
            <ul>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="bottom-footer">
          <p className="bottom-p">2023 Furniro. All rights reserved</p>
        </div>
      </footer>
    );
  };
  