const Home = () => {
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/hero2.png" />
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content">
            <div className="content_in">
              <h3 className="name">
                <span>Mình</span> là
                <br />
                Quang Đại
              </h3>
              <span className="welcome">Chào mừng đến với Website của mình</span>
              <div className="tonni_tm_button">
                <a className="anchor" href="#portfolio">
                  Xem toàn bộ dịch vụ{" "}
                  <img className="svg" src="img/svg/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tonni_tm_down">
            <a className="anchor" href="#about">
              <img className="svg" src="img/svg/down_button.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="play_button">
          <a
            className="popup-youtube"
            href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
          />
        </div>
        <span className="shape1">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape2">
          <img className="svg" src="img/svg/icon7.svg" alt="" />
        </span>
        <span className="shape3">
          <img className="svg" src="img/svg/icon3.svg" alt="" />
        </span>
        <span className="shape4">
          <img className="svg anim_circle" src="img/svg/icon6.svg" alt="" />
        </span>
        <span className="shape5">
          <img className="svg" src="img/svg/icon1.svg" alt="" />
        </span>
        <span className="shape6">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape7">
          <img className="svg" src="img/svg/icon2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Home;
