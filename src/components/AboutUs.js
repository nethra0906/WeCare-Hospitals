import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AboutUs() {
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

  const navigate = useNavigate();

  const handleHome = () => navigate("/");
  const handleAboutUs = () => navigate("/AboutUs");
  const handleContactUs = () => navigate("/ContactUs");
  const handleBAA = () => navigate("/BAA");
  const handlePR = () => navigate("/PatientR");

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

      <div className="main-AU">
        <div className="maintext-AU">
          <h1 style={{ color: "#00246B" }}>Who We Are?</h1>
          <div className="main-2text">
            <h2>WeCare Hospitals – Your Trusted Partner in Healthcare Information Systems</h2>
            
            <img className="hover-zoom-blur-image" src="Hospital Image.png" alt="HI" />
            
            <p>
            WeCare Hospitals & Solutions Private Limited is a renowned technology firm based in Technopark, Thiruvananthapuram, Kerala. With a team of 50 skilled professionals, we excel in delivering innovative solutions for the healthcare sector, including customized Hospital Management Systems, Hospital Management Software, and Hospital Information Systems. Our expertise lies in developing tailored software suites that meet the specific needs of our clients, earning us a strong reputation in healthcare automation.

Thiruvananthapuram has gained global recognition in the Global Start-up Ecosystem Report (GSER), ranking 1st in Asia and 4th worldwide for Affordable Talent. Leveraging this advantage, we have built a team of top industry professionals, reinforcing our vision to lead the healthcare technology sector.

The healthcare industry has undergone a remarkable transformation over the years, driven by technological advancements. In today’s rapidly evolving digital landscape, simply automating workflows and hospital operations is no longer sufficient. We are now in the era of digital transformation, where next-generation technologies like Artificial Intelligence (AI) and Machine Learning (ML) have replaced conventional IT systems. Hospitals now demand solutions that are efficient, scalable, and future-ready, fostering both operational excellence and long-term growth.

At WeCare Hospitals & Solutions Private Limited, we specialize in designing advanced Healthcare IT solutions that empower healthcare organizations in their digital evolution. Our expert team is proficient in Healthcare ERP (Smart-HMIS), Mobility, Data Warehousing, Business Intelligence, Big Data Technologies, and AI-driven solutions. Through our globally recognized delivery model, we provide exceptional services to our esteemed clients using a well-structured on-site/offshore approach.
            </p>
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

export default AboutUs;
