import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BodyRP() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    speciality: "",
    date: "",
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

  if (!formData.name || !formData.phone || !formData.speciality || !formData.date) {
    setErrorMessage("All fields are required!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3003/usersB", {
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
    alert("Form submitted successfully!");
    console.log("Form Submitted:", formData);
    
    // Optional: Clear form after successful submission
    setFormData({
      name: "",
      phone: "",
      speciality: "",
      date: "",
    });
    
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
          <h1 style={{ fontWeight: "750" }}>Book An Appointment</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
  
          </div>


          <div className="input-box">
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />

          </div>


          <div className="input-box">
            <input
              type="text"
              placeholder="Speciality"
              name="speciality"
              value={formData.speciality}
              onChange={handleInputChange}
            />
      
          </div>

          <div className="input-box">
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            
          </div>

          <button
            type="submit"
            className="btn"
            id="RegB"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#75a6fa")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
           SUBMIT
          </button>

          {errorMessage && <p id="errorMessage" style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      </div>

     
    </div>
  );
}

export default BodyRP;

