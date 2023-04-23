import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Generate your custom T-shirt</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              👕🤖Create a custom personality tee that perfectly matches your style and personality? With the latest AI-powered design tools, designing your own tee has never been more effortless and fun. 🎨💻
              </p>
              <p>
              Whether you want to upload your own image or let AI generate a design from scratch, the possibilities are endless. These design tools use advanced algorithms to analyze your preferences, and create designs that are tailored specifically to you. And if you want to add your personal touch, you can use a range of design tools to fine-tune your design further. 🖼️🎨
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  {/* <img src="svg/opensea.svg" alt="" className="fn__svg" /> */}
                </span>
                <span className="text">Custom design</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                </span>
                <span className="text">AI Generated</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Readymade collection!</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              👕🛍️ Don't feel like designing your own custom personality tee? No worries, we've got you covered!
              </p>
              <p>
              Check out our vast collection of ready-made tees that are perfect for showcasing your unique style and personality. With a wide range of designs to choose from, you're sure to find a tee that speaks to you. 💯
              </p>
            </div>
            <div className="buttons">
              <Link href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">Buy now!</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;



// import TshirtScene from "../pages/TshirtScene";
// <TshirtScene />