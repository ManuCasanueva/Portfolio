import React from "react";
import CV from "../assets/img/logos/CV-Fullstack-Manuel-Casanueva-En.pdf";
import 'animate.css';


const Cv = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a style={{textDecoration:"none"}} download href={CV} target="_blank">
          <span className="navbar-text" style={{ marginTop: 5 }}>
            <button id="download-button" className="btn-descargar">Download Resume</button>
          </span>
        </a>
      </div>
    </>
  );
};

export default Cv;
