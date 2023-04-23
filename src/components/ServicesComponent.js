const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Why Choose Us?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Huge Collection</h3>
                  <p className="fn_desc fn_animated_text">
                  Our exclusive unlimited collection of Varna is designed to offer unparalleled personalization and creativity, thanks to our AI-generated personality tees.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">High Quality</h3>
                  <p className="fn_desc fn_animated_text">
                  Choose us for top-quality AI-generated personality tees and an effortless shopping experience. Backed by cutting-edge technology and exceptional customer service, we offer a premium collection that is unmatched in quality and creativity.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Top Resource</h3>
                  <p className="fn_desc fn_animated_text">
                  Shop with confidence knowing that we use trusted payment gateways and ethical suppliers in our supply chain. Our commitment to quality and sustainability is reflected in every AI-generated personality tee we offer, providing a premium shopping experience that you can feel good about.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Big Community</h3>
                  <p className="fn_desc fn_animated_text">
                    Be part of a community of AI-Tees owners and create user
                    generated items. Flex Your Personality now.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
