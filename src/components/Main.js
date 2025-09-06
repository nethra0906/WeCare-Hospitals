import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Main() {
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
    <div className="container">
      <nav>
        <div className="logo">
          <img className="logo-image" src="WeCare Logo.png" alt="LI" />
          <h1>WeCare Hospitals</h1>
        </div>
        <ul id="Navbarlist">
          <li><a href="#" onClick={handleMain}> Home</a></li>
          <li><a href="#" onClick={handlePR}> Patient Reviews</a></li>
          <li><a href="#" onClick={handleBAA}> Book Consultation</a></li>
          <li><a href="/360 Tour.mp4" target="_blank" rel="noopener noreferrer">360° Tour</a></li>
          <li><a href="#" onClick={handleContactUs}> Contact Us</a></li>
          <li><a href="#" onClick={handleAboutUs}> About Us</a></li>
          <button className="E-Button" onClick={handleEm}>Emergency</button>
        </ul>
      </nav>

      <div className="main-Landing "> 
      <div className="mainltext">
          <h1 style={{ color: "black", fontSize: "30px" }}> <span style={{ color: "#00246B", fontWeight: "bolder", fontSize: "50px" }}> Welcome to, </span> <br/> <span style={{ color: "#ffffff", fontWeight: "bolder", fontSize: "65px" }}>WeCare Hospitals</span> <br/> <br/> Discover top-notch healthcare at WeCare Hospital, the leading multispeciality hospital in Delhi, India. </h1>
        
          
          <img className="Hospital-Out" src="home.png" alt="HO" />
          
      </div>

        
        <div className="main2">
        <div className="card-landing">
                <div className="card-1lp">

                        <h1>
                            Qualified Doctors
                        </h1>

                        <h2
                            style={{
                                fontSize: "15px",
                            }}
                        >
                            Highly skilled Doctors, Nurses and technicians from every corner of the country

                        </h2>
          
                </div>

                <div className="card-1lp">

                        <h1>
                        Trusted Treatment
                        </h1>

                        <h2
                            style={{
                                fontSize: "15px",
                            }}
                        >
                            Our Hospital has all the facilities that a patient requires during their stay

                        </h2>
          
                </div>

                <div className="card-1lp">

                        <h1>
                        24/7 Services
                        </h1>

                        <h2
                            style={{
                                fontSize: "15px",
                            }}
                        >
                            WeCare provides round the clock emergency services and facilities

                        </h2>
          
                </div>
            </div>

            <h1 style={{marginTop:"100px",color:"#00246B",fontSize:"35px", fontWeight:"bolder",}}>OUR SPECIALITIES</h1>

            <div className="card-landing">
                <div className="card-2lp">

                <img className="heart" src="heart.png"  />
                        <h1 style={{fontSize:"25px"}}>
                        Cardiac Sciences
                        </h1>

          
                </div>

                <div className="card-2lp">

                <img className="child" src="child.png"  />
                        <h1 style={{fontSize:"25px"}}>
                        Pediatrics
                        </h1>

                        
          
                </div>

                <div className="card-2lp">

                <img className="brain" src="brain.png"  /> 
                        
                        <h1 style={{fontSize:"25px"}}>
                        Neurosciences
                        </h1>

                       
          
                </div>
            </div>

      </div>
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

export default Main;
