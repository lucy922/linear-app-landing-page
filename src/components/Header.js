import "./Header.css";
import image1 from "../assests/images/release-logo.png";

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="wrapper flex">
          <span className="logo">
            <a href="/">
              <img className="svg" src={image1} alt="this a thumbnail" />
              <h1>Linear</h1>
            </a>
          </span>

          <div>
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
        </div>
      </header>
    </>
  );
}

export default Header;
