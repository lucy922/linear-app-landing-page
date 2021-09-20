import "./Footer.css";
import image1 from "../assests/images/release-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <span>
          <img src={image1} alt="this is a thumbnail" />
          <p>Linear - Designed in california, cloned in Nigeria</p>
        </span>
        <div className="footer-links">
          <a href="/">Status</a>
          <a href="/">Twitter</a>
          <a href="/">Contact Us</a>
          <a href="/">Docs</a>
          <a href="/">API</a>
          <a href="/">Privacy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
