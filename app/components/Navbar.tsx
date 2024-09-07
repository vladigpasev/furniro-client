export const Navbar = () => {
    return (
      <header>
        <nav className="navbar">
          <div className="logo">
            <img className="logo-svg" src="/logo.svg" alt="Logo" />
            <span className="logo-name">Furniro</span>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="nav-icons">
            <a href="#"><img className="person" src="/person.svg" alt="person" /></a>
            <a href="#"><img className="search" src="/search.svg" alt="search" /></a>
            <a href="#"><img className="wish" src="/wish.svg" alt="wish" /></a>
            <a href="#"><img className="cart" src="/cart.svg" alt="cart" /></a>
          </div>
        </nav>
      </header>
    );
  };
  