import "../css/logo.css"
const Footer = () => (
  <>
    {/*::footer_part start::*/}
    <footer className="footer_part">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <a href="/" className="footer_logo_iner">
                  {" "}
                  <img
                    src="logo.png"
                    alt="logo"
                    loading="lazy"
                    className="-img"
                  />{" "}
                </a>
                {/* <p>
                  Heaven fruitful doesn&apos;t over lesser days appear creeping
                  seasons so behold bearing days open
                </p> */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_footer_part">
                <h4>Contact Info</h4>
                <p>
                  Address : 73, Central School Scheme, Airforce Colony,
                  Jodhpur,342011
                </p>
                <p>Email : contact@iceshardgames.com</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            </div>
            <div className="col-sm-6 col-lg-3">
             
                
                </div>
              </div>
            </div>
          </div>
      <div className="copygight_text">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="copyright_text">
                <p>
                  Copyright © All rights reserved | This website is made{" "}
                  <i className="ti-heart" aria-hidden="true" /> by{" "}
                  <a href="/" target="_blank">
                    IceShard Games
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_icon social_icon">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fas fa-globe" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="single_social_icon">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*::footer_part end::*/}
  </>
);

export default Footer;
