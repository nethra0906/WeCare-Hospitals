import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function PatientR() {
  
    const navigate = useNavigate();
      
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    
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
    
        const footerLinks = document.querySelectorAll("#footerlist li a");
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

            <h1 style={{marginTop:"120px",color:"#00246B",fontSize:"35px", fontWeight:"bolder",}}>PATIENT REVIEWS</h1>
            
            
            
            <div className="cardr">
                <div className="card-1p"
                        style={{ 
                            backgroundColor: isHovered1 ? "#00246B"  : "white",
                            padding: "20px",
                            borderRadius: "10px",
                            textAlign: "center",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <h2
                            style={{
                                backgroundColor: isHovered1 ? "#00246B"  : "white",
                                color: isHovered1 ? "white"  : "black",
                                fontSize: "15px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                        >
                            I visited Dr. Rajeev Bashetty. He was friendly, clear in communication and explained the problem in detail and the course of action. The hospital is well managed with quality staff. All the tests and checkups were well coordinated.
                        </h2>
                        
                        
                        <h1
                            style={{
                                fontWeight: "bolder",
                                backgroundColor: isHovered1 ? "#00246B"  : "white",
                                color: isHovered1 ? "#75a6fa"  : "#00246B",
                                fontSize: "20px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                        >
                            <i class='bx bxs-phone-call'  style={{ marginRight: "10px" }}></i> 
                            - Mr. Vachan Rai
                        </h1>
                        
                </div>

                <div className="card-2p"
                        style={{ 
                            backgroundColor: isHovered2 ? "#00246B"  : "white",
                            padding: "20px",
                            borderRadius: "10px",
                            textAlign: "center",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        
                        <h2
                            style={{
                                backgroundColor: isHovered2 ? "#00246B"  : "white",
                                color: isHovered2 ? "white"  : "black",
                                fontSize: "15px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                        >
                            I am very happy with the hospitality, caring staff. Doctors are also amazing. Dr. Ramraj has done my Hernia Surgery & I am very happy now. Dr. Shivkumar is also very good and experienced, I advise all to visit the hospital & consult with the experienced doctors here. Thank you so much.
                        </h2>
                        
                        <h1
                            style={{
                                fontWeight: "bolder",
                                backgroundColor: isHovered2 ? "#00246B"  : "white",
                                color: isHovered2 ? "#75a6fa"  : "#00246B",
                                fontSize: "20px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                        >
                            <i class='bx bxs-phone-call'  style={{ marginRight: "10px" }}></i> 
                            - Mr. Vikram Vicky
                        </h1>
                        
                </div>
            </div>

             

            <div className="cardr">
                <div className = "card-3p"
                    style={{ 
                        backgroundColor: isHovered3 ? "#00246B"  : "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <h2
                        style={{
                            backgroundColor: isHovered3 ? "#00246B"  : "white",
                            color: isHovered3 ? "white"  : "black",
                            fontSize: "15px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                        }}
                    >
                    I had a 2.2 cm kidney stone removed without any incision on the body. They offer advanced equipment on IRS process. I recommend this hospital for kidney stone removal surgery.
                    </h2>
                    
                    <h1 
                        style={{
                            fontWeight: "bolder",
                            backgroundColor: isHovered3 ? "#00246B"  : "white",
                            color: isHovered3 ? "#75a6fa"  : "#00246B",
                            fontSize: "20px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                        }}
                    
                    >
                        <i class='bx bxs-location-plus' style={{ marginRight: "5px" }}></i>
                        - Mr. Siva Kumar
                    </h1>

                    
                </div>

                <div className = "card-4p"
                     style={{ 
                        backgroundColor: isHovered4 ? "#00246B"  : "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <h2 

                        style={{
                        backgroundColor: isHovered4 ? "#00246B"  : "white",
                        color: isHovered4 ? "white"  : "black",
                        fontSize: "15px",
                        display: "inline-block",
                        transition: "background-color 0.3s ease, color 0.3s ease",
                        }}

                        >I was referred by Dr. Raghavendra Prakash to consult Dr. Uday (Urology).  Dr. Uday is an excellent surgeon and I am very happy with the hospital. The doctors, nursing team, Mrs. Lakshmi (PRM) and Mrs. Tanuja and other front desk staff were very cordial and guided me in every step in the process. Thank you for the excellent treatment and very good patient care. I would definitely recommend the hospital for my family and friends.

                    </h2>
                    
                    
                    
                    <h1 
                         style={{
                            fontWeight: "bolder",
                            backgroundColor: isHovered4 ? "#00246B"  : "white",
                            color: isHovered4 ? "#75a6fa"  : "#00246B",
                            fontSize: "20px",
                            display: "inline-block",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                        }}
                    >
                        <i class='bx bxs-envelope' style={{ marginRight: "5px"}}></i>
                        - Mr. Vimarsh Viz
                    </h1>

                    
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

export default PatientR