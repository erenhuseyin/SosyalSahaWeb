import React from "react";
import "./LoginOrRegis.css";
import image from "../../images/login.png";
import { Link } from "react-router-dom";
const LoginOrRegis = () => {
  return (
    <div>
      <div className="login-container">
        <div className="d-flex justify-content-between align-items-center login-container ">
          <div className="w-100 align-items-center">
            <div>
              <h1>Giriş Yap</h1>
            </div>
            <div>
              <p className="mb-0 mt-3">Kullanıcı Adı</p>
              <input type="text" />
            </div>
            <div>
              <p className="mb-0 mt-3">e Posta</p>
              <input type="email" />
            </div>
            <div>
              <p className="mb-0 mt-3">Şifre</p>
              <input type="password" />
            </div>
            <button>Giriş</button>
            <Link to="/login">
              <p className="mb-0 mt-0">
                <span>admin girişi</span>
              </p>
            </Link>
          </div>
          <div>
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegis;
