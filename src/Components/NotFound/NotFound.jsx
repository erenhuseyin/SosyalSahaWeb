import React from "react";
import SVG from "../../images/notfound.jpg";
const NotFound = () => {
  return (
    <div>
      {/* 404 hatası */}
      <img className="img-fluid" src={SVG} alt="not found" />
      <h2 className="mt-5 mb-5">4O4 Sayfa Bulunamadı</h2>
    </div>
  );
};

export default NotFound;
