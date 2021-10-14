import "./Header.css";
import image1 from "../assests/images/release-logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header>
      <nav className="navbar">
        <div className="wrapper flex">
          <span className="logo">
            <a href="/">
              <img className="svg" src={image1} alt="this a thumbnail" />
              <h1>Linear</h1>
            </a>
          </span>

          <div className="liner"></div>

          <div className="header-nav">
            <ul>
              <li>
                <a href="/" className="nav">
                  Method
                </a>
              </li>
              <li>
                <a href="/" className="nav">
                  Changelog
                </a>
              </li>
              <li>
                <a href="/" className="nav">
                  Customers
                </a>
              </li>
              <li>
                <a href="/" className="nav">
                  About us
                </a>
              </li>
              <li>
                <a href="/" className="nav">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="nav">
                  We're hiring
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a className="login-link" href="/">
                  Log in
                </a>
              </li>
              <li>
                <button className="button">Sign up</button>
              </li>
            </ul>
          </div>
          <div onClick={handleClick} className="menubar">
            {click ? <FaBars /> : <FaBars />}
          </div>
        </div>
      </nav>

{click ? (
  <div className="dropdown">
  <ul className={click ? "navigation active" : "navigation"}>
    <li>
      <a href="/" className="nav">
        Method
      </a>
    </li>
    <li>
      <a href="/" className="nav">
        Changelog
      </a>
    </li>
    <li>
      <a href="/" className="nav">
        Customers
      </a>
    </li>
    <li>
      <a href="/" className="nav">
        About us
      </a>
    </li>
    <li>
      <a href="/" className="nav">
        Pricing
      </a>
    </li>
    <li>
      <a href="/" className="nav">
        We're hiring
      </a>
    </li>
  </ul>
</div>
) :
 null
}
    
    </header>
  );
}

export default Header;
