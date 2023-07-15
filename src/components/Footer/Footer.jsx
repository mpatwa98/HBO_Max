import Heading from "../Header/Heading";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container__row">
          <div className="col-fot1">
            <Heading />
            <div className="footer__details">
              <p>Movies and TV Series</p>
              <p>India</p>
              <p>
                Call Us: <span>(+91) 9876543210</span>
              </p>
            </div>
          </div>
          <div className="col-fot2">
            <h4 className="footer-title">Resources</h4>
            <div className="menu-footer">
              <ul className="menu">
                <li className="menu-item ">
                  <Link to="#">About</Link>
                </li>
                <li id="menu-item-72" className="menu-item">
                  <Link to="#">Contact Us</Link>
                </li>
                <li id="menu-item-73" className="menu-item ">
                  <Link to="#">Forums</Link>
                </li>
                <li id="menu-item-74" className="menu-item">
                  <Link to="#">Blog</Link>
                </li>
                <li id="menu-item-75" className="menu-item ">
                  <Link to="#">Help Center</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-fot4">
            <h4 className="footer-title">Legal</h4>
            <div className="menu-footer">
              <ul className="menu">
                <li id="menu-item-76" className="menu-item-76">
                  <Link to="#">Terms of Use</Link>
                </li>
                <li id="menu-item-77" className="menu-item-77">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li id="menu-item-78" className="menu-item-78">
                  <Link to="#">Security</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
