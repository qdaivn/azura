import { useEffect } from "react";
import { scroll_ } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo2.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Trang chủ</a>
              </li>
              <li>
                <a href="#about">Đôi điều về mình</a>
              </li>
              <li>
                <a href="#service">Dịch vụ</a>
              </li>
              <li>
                <a href="#portfolio">Tra cứu</a>
              </li>
              <li>
                <a href="#news">Tin tức</a>
              </li>
              <li>
                <a href="#contact">Liên hệ</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>Follow Us:</span>
            <ul>
              <li>
                <a href="#">
                  <img
                    className="svg"
                    src="img/svg/social/facebook.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="svg"
                    src="img/svg/social/twitter.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src="img/svg/social/vimeo.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src="img/svg/social/skype.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
