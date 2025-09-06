import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Emergency() {

    const navigate = useNavigate();
      
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    
      useEffect(() => {
        const navbarLinks = document.querySelectorAll('#Navbarlist li a');
        navbarLinks.forEach(NavList => {
          NavList.addEventListener('mouseover', function () {
            this.style.color = "#75a6fa";
          });
          NavList.addEventListener('mouseout', function () {
            this.style.color = 'white';
          });
        });
    
        const footerLinks = document.querySelectorAll(".footer2 ul li a");
        footerLinks.forEach(link => {
          link.addEventListener('mouseover', function () {
            this.style.color = "#75a6fa";
          });
          link.addEventListener('mouseout', function () {
            this.style.color = "white";
          });
        });
    
       
      }, []);
     
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
        
        <div className = "container">
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

             
             <h1 style={{marginTop:"120px",color:"#00246B",fontSize:"35px", fontWeight:"bolder",}}>EMERGENCY</h1>
             
             
             <div className="card-1"
                    style={{ 
                        backgroundColor: isHovered1 ? "#00246B" : "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "background-color 0.3s ease",
                        
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <h1
                        style={{
                            fontWeight: "bolder",
                            backgroundColor: isHovered1 ? "#00246B" : "white",
                            color: isHovered1 ? "white" : "black",
                            padding: "10px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            marginTop: "80px",
                        }}
                    >
                        <i class='bx bxs-phone-call'  style={{ marginRight: "10px" }}></i> 
                           CALL AN AMBULANCE
                    </h1>
                    <h2
                        style={{
                            backgroundColor: isHovered1 ? "#00246B" : "white",
                            color: isHovered1 ? "white" : "#00246B",
                            marginBottom: "80px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            
                        }}
                    >
                        +91 9791979797 <br /> +91 82207 30474
                    </h2>
             </div>

            <div className="card2" style={{ marginLeft: "300px" }}>
                <div className = "card-2"
                    style={{ 
                        backgroundColor: isHovered2 ? "#00246B" : "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <h1 
                        style={{
                            fontWeight: "bolder",
                            backgroundColor: isHovered2 ? "#00246B" : "white",
                            color: isHovered2 ? "white" : "black",
                            padding: "10px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            marginTop: "80px",
                        }}
                    
                    >
                        <i class='bx bxs-phone-call'  style={{ marginRight: "10px" }}></i> 
                        CALL A NURSE
                    </h1>

                    <h2
                        style={{
                                backgroundColor: isHovered2 ? "#00246B" : "white",
                                color: isHovered2 ? "white" : "#00246B",
                                marginBottom: "80px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease, color 0.3s ease",

                            }}
                    >
                     +91 9543343442 <br /> +91 8098404595
                    </h2>
                </div>

                <div className = "card-3"
                     style={{ 
                        backgroundColor: isHovered3 ? "#00246B" : "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <h1 
                         style={{
                            fontWeight: "bolder",
                            backgroundColor: isHovered3 ? "#00246B" : "white",
                            color: isHovered3 ? "white" : "black",
                            padding: "10px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            marginTop: "80px",
                        }}
                    >
                        
                        <i class='bx bx-buildings' style={{ marginRight: "5px"}}></i>
                        FIND NEAREST ER
                    </h1>

                    <h2 

                        style={{
                            backgroundColor: isHovered3 ? "#00246B" : "white",
                            color: isHovered3 ? "white" : "#00246B",
                            marginBottom: "80px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                        }}
                    
                    >Based on your Current GPS Location</h2>
                </div>

            </div>
            
            <footer className="footer2">
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

  )
}

export default Emergency;