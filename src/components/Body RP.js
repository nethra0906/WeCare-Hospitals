import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function BodyRP() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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

    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("mouseover", () => {});
        link.removeEventListener("mouseout", () => {});
      });

      footerLinks.forEach((link) => {
        link.removeEventListener("mouseover", () => {});
        link.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(""); 
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
    setErrorMessage("All fields are required!");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setErrorMessage("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3003/usersR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Form Submitted:", formData);
    handleMain();
  } catch (error) {
    console.error("Error storing data:", error);
    setErrorMessage("Failed to store data!");
  }
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

  const handleMain = () => {
    navigate('/Main_Page');
    }

  return (
    <div className="body-lr">
      <nav>
        <div className="logo">
          <img className="logo-image" src="WeCare Logo.png" alt="WeCare Logo" />
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

      <div className="wrapper">
        <form id="myForm" onSubmit={handleSubmit}>
          <h1 style={{ fontWeight: "750" }}>REGISTER</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <i className="bx bxs-lock-open-alt"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="btn"
            id="RegB"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#75a6fa")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Register
          </button>

          {errorMessage && <p id="errorMessage" style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default BodyRP;

