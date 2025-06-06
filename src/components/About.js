const About = () => {
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>7</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>Chúc một ngày mới tốt lành</span>
                <h3> Mình là Quang Đại</h3>
              </div>
              <div className="text">
                <p>
                Xin chào mọi người! Mình là Quang Đại, hiện đang là Chuyên viên tư vấn tại Azura Global - Chuyên tư vấn đầu tư, định cư Mỹ. Với kinh nghiệm và sự tận tâm,mình luôn sẵn sàng hỗ trợ khách hàng tìm ra những giải pháp tối ưu nhất.
                </p>
              </div>
              <div className="dodo_progress">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={90}
                        data-color="#000"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img
                            className="svg"
                            src="img/svg/photoshop.svg"
                            alt=""
                          />
                          <span className="number">90%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={75}
                        data-color="#0ACF83"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/xd.svg" alt="" />
                          <span className="number">75%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={80}
                        data-color="#f75023"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/figma.svg" alt="" />
                          <span className="number">80%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
