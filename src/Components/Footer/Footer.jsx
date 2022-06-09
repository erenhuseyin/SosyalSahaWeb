import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>İletişim Bilgileri</h6>
              <p className="text-justify">0543 530 3665</p>
            </div>

            <div className="col-sm-12 col-md-6">
              <h6>Sosyal Saha e Posta</h6>
              <p className="text-justify">sosyalsaha@gmail.com</p>
            </div>

            <div className="col-xs-6 col-md-3"></div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12"></div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
