import { Fragment, useState } from "react";
import Counter from "./Counter";
import ContactPopup from "./popup/ContactPopup";

const Contact = () => {
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <ContactPopup show={active} close={() => setActive(false)} />
      <div className="tonni_tm_section" id="contact">
        <div className="tonni_tm_contact">
          <div className="container">
            <div
              className="tonni_tm_counter_list wow fadeInUp"
              data-wow-duration="1s"
            >
              <ul>
                <li>
                  <div className="list_inner">
                    <span className="title">
                      Số lượt truy cập
                    </span>
                    <h3>
                      <Counter end={31} />K
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">Downloaded Total In 2018-2022</span>
                    <h3>
                      <Counter end={50} />M
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">
                      Product Sale Per Day Using Out Tools
                    </span>
                    <h3>
                      <Counter end={900} />+
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span className="title">
                      Quality and Satisfaction Guarantee
                    </span>
                    <h3>
                      <Counter end={100} />%
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact_box">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <h3>
                  I want to hear from
                  <br />
                  you please{" "}
                  <a
                    className="contact_modalbox_link c-pointer"
                    onClick={() => setActive(true)}
                  >
                    contact me!
                  </a>
                </h3>
              </div>
            </div>
            <div className="short wow fadeInUp" data-wow-duration="1s">
              <div className="left">
                <span>
                  <a href="mailto:infomaya.tonni@gmail.com">
                    infomaya.tonni@gmail.com
                  </a>
                  <img className="svg" src="img/svg/vector3.svg" alt="" />
                </span>
              </div>
              <div className="right">
                <div className="social">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/facebook-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/twitter-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/linkedin-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/instagram-stroke.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>
                    © {new Date().getFullYear()} by{" "}
                    <a
                      href="https://themeforest.net/user/codeefly"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Codeefly.
                    </a>{" "}
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="shape">
            <img className="svg" src="img/svg/vector.svg" alt="" />
          </span>
          <span className="shape2">
            <img className="svg" src="img/svg/vector2.svg" alt="" />
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
