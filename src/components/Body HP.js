import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BodyHP() {
  const navigate = useNavigate();

  useEffect(() => {
 
    const navbarLinks = document.querySelectorAll("#Navbarlist li a");
    navbarLinks.forEach((link) => {
      link.addEventListener("mouseover", () => (link.style.color = "#75a6fa"));
      link.addEventListener("mouseout", () => (link.style.color = "white"));
    });

   
    const footerLinks = document.querySelectorAll("#footerlist li a");
    footerLinks.forEach((link) => {
      link.addEventListener("mouseover", () => (link.style.color = "#75a6fa"));
      link.addEventListener("mouseout", () => (link.style.color = "white"));
    });
  }, []);


  const handleRegister = () => {
    navigate('/register');
  };


  const handleLogin = () => {
    navigate('/login');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleAboutUs = () => {
    navigate('/AboutUs');
  }

  const handleContactUs = () => {
    navigate('/ContactUs');
  }

  const handleBAA = () => {
    navigate('/BAA');
  }
  
  const handlePR = () => {
    navigate('/PatientR');
    }

    const handleEm = () => {
      navigate('/Emergency');
      }

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img className="logo-image" src="WeCare Logo.png" alt="LI" />
          <h1>WeCare Hospitals</h1>
        </div>
        <ul id="Navbarlist">
          <li><a href="#" onClick={handleHome}> Home</a></li>
          <li><a href="#" onClick={handlePR}> Patient Reviews</a></li>
          <li><a href="#" onClick={handleBAA}> Book Consultation</a></li>
          <li><a href="/360 Tour.mp4" target="_blank" rel="noopener noreferrer">360° Tour</a></li>
          <li><a href="#" onClick={handleContactUs}> Contact Us</a></li>
          <li><a href="#" onClick={handleAboutUs}> About Us</a></li>
          <button className="E-Button" onClick={handleEm}>Emergency</button>
        </ul>
      </nav>

      <div className="main">
        <div className="maintext">
          <h1 style={{ color: "#00246B" }}>Where Your Care Comes First</h1>
          <h3>
            Depend on the finest group of medical care for your <br /> health
            and wellbeing.
          </h3>
          <div className="buttons">
            <button
              id="RButton"
              onClick={handleRegister}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#00246B")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                width: "120px",
                height: "40px",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                marginTop: "30px",
                marginLeft: "65px",
                marginRight: "30px",
              }}
            >
              Register
            </button>

            <button
              id="LButton"
              onClick={handleLogin}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#00246B")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                width: "120px",
                height: "40px",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                marginTop: "30px",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Login
            </button>
          </div>
        </div>

        <img className="Doctor-Image" src="Doctors Image.png" alt="DI" />
      </div>

      <footer className="footer1">
        <div className="footer-content">
          <p>&copy; 2025 WeCare Hospitals. All rights reserved.</p>
          <ul id="footerlist">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default BodyHP;
