import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Varna Blogs</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Moving Blog List Shortcode */}
        <div className="neoh_fn_moving_blog">
          <ul>
            <li>
              <div className="item">
                <img src="img/blog/1.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>June 01, 2022</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                    AI TEES
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/2.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>May 25, 2022</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                  AI TEES                  
                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/3.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>May 13, 2022</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                  AI TEES                  </Link>
                </h3>
                <p className="fn_desc">
                  Morbi non dignissim erat, a blandit felis nec lorem vel orci
                  varius congue ut vitae est.
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Read More</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
      </div>
    </section>
  );
};
export default BlogComponent;
