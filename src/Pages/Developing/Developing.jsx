import React from "react";
import { useNavigate } from "react-router-dom";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import "./developing.css";
import Develop from "../../assets/images/about image3.png";
import Webdevimg from "../../assets/images/webdev.png";
import Webappdevimg from "../../assets/images/webappdev.png";
import Wordpressdevimg from "../../assets/images/wordpressdev.png";
import Protofoliadevimg from "../../assets/images/protofoliadev.png";
import MarqueeScroll from "../../Components/MarqueeScroll/MarqueeScroll";
import WhatsAppLogo from "../../Components/WhatsAppLogo/WhatsAppLogo";
import Footer from "../../Components/Footer/Footer";
import bgImage from "../../assets/images/branding-bg.png";
import Slider from "react-slick";
import slider1 from "../../assets/images/bpms.png";
import slider2 from "../../assets/images/rems.png";
import slider3 from "../../assets/images/lms.png";
import slider4 from "../../assets/images/hrms.png";
import slider5 from "../../assets/images/pms.png";
import slider6 from "../../assets/images/rms.png";

export default function Developing({top}) {
  const navigate = useNavigate()
  const settings = {
    dots: false, // Disable dots for navigation
    infinite: true, // Enable infinite scroll
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Speed of autoplay
    pauseOnHover: true, // Pause on hover
    arrows: false, // Hide next/prev arrows
    centerPadding: "0px", // Remove extra padding around the centered slide
    responsive: [
      {
        breakpoint: 2000, // 4K view
        settings: {
          slidesToShow: 5, // Show 5 slides
        },
      },
      {
        breakpoint: 1450, // Large laptop view
        settings: {
          slidesToShow: 4, // Show 4 slides
        },
      },
      {
        breakpoint: 1030, // Laptop view
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 770, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 425, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div>
      <ThirdPartyScripts />
      <Navbar bgImage={bgImage}>
        <div className="hero">
          <p>
            TriDizi . <span style={{ color: "#F5900D" }}>Services</span>
          </p>
          <h1>Developing</h1>
        </div>
      </Navbar>
      <SideBar />

      <section className="abt" style={{ marginTop: "140px !important" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="developingimg3">
              <img src={Develop} alt="development" />
            </div>
            <div
              className="developingimg1"
              style={{
                backgroundImage: "url(images/developingimg1.jpeg) !important",
              }}
            />
            <div
              className="developingimg2"
              style={{
                backgroundImage: "url(images/developingimg2.jpeg) !important",
              }}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 getto">
            <div className="dot" />
            <p className="txt">ABOUT THE AGENCY</p>
            <h1>
              <span style={{ color: "#F5900D" }}>
                Get to know about <br />{" "}
              </span>
              Developing
            </h1>
            <p className="txt" style={{ color: "#F5900D" }}>
              Bringing Ideas to Life
            </p>
            <p className="txt">
              Your digital vision's foundation is made up of our development
              services. We give ideas life by transforming them into useful,
              approachable realities. We code with accuracy and ingenuity to
              create everything from web and mobile applications to software
              solutions, enabling your business to flourish in the digital
              sphere. Let's transform your concepts into useful, tech-based
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{navigate('/webdesign'), top()}}>
              <div
                className="brand-box"
                onclick="window.location.href='websitedesigning.html'"
              >
                <img src={Webdevimg} alt="Website Development" />
                <h6>Website Development</h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1 onclick="window.location.href='websitedesigning.html'">
                Website Development
              </h1>
              <h6>Your Digital Gateway, Tailored for Success</h6>
              <p>
                Your brand will have a vibrant online presence thanks to our
                website creation service. We painstakingly plan and code to
                guarantee a flawless user experience, making a positive
                impression on visitors and advancing your company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Custom-Crm">
        <h2>
          Custom CRM <span>Development</span>
        </h2>
        {/* <div className="slider_wrapper"> */}
        <div className="slider-container">
          <Slider {...settings} style={{marginLeft:"0vw"}}>
            <div className="crm">
              <img src={slider1} alt="BPMS" />
              <h3>BPMS</h3>
              <h4>Business Process Management System</h4>
            </div>
            <div className="crm">
              <img src={slider2} alt="BPMS" />
              <h3>REMS</h3>
              <h4>Real Estate Management System</h4>
            </div>
            <div className="crm">
              <img src={slider3} alt="BPMS" />
              <h3>LMS</h3>
              <h4>Learning Management System</h4>
            </div>
            <div className="crm">
              <img src={slider4} alt="BPMS" />
              <h3>HRMS</h3>
              <h4>Human Resources Management System</h4>
            </div>
            <div className="crm">
              <img src={slider5} alt="BPMS" />
              <h3>PMS</h3>
              <h4>Property Management System</h4>
            </div>
            <div className="crm">
              <img src={slider6} alt="BPMS" />
              <h3>RMS</h3>
              <h4>Recruitment Management System</h4>
            </div>
          </Slider>
        {/* </div> */}
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1>Web Application Development</h1>
              <h6>Your Brand's Iconic Signature</h6>
              <p>
                Enter the realm of web apps. Our development service develops
                interactive, dynamic platforms that satisfy difficult business
                demands. We create applications that break new ground by fusing
                creativity with cutting-edge technology.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-5">
              <div className="brand-box">
                <img src={Webappdevimg} alt="Web Application Development" />
                <h6>Web Application Development</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-5">
              <div className="brand-box">
                <img src={Wordpressdevimg} alt="WordPress Development" />
                <h6>WordPress Development</h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 infor">
              <h1>WordPress Development</h1>
              <h6>Effortless Content Management, Infinite Possibilities</h6>
              <p>
                Utilize our development services to fully realize WordPress'
                potential. We customize and optimize this strong platform to
                meet your specific requirements, giving you access to a
                user-friendly interface and countless chances for development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="brand-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-md-6 infom">
              <h1>Portfolio Designing</h1>
              <h6>Showcase Your Vision, Captivate Your Audience</h6>
              <p>
                Create a compelling portfolio that communicates your tale. Our
                portfolio design service combines beauty and utility to display
                your work in an attractive and well-organized way. Allow future
                clients and colleagues to remember your portfolio.
              </p>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-5">
              <div class="brand-box">
                <img src={Protofoliadevimg} alt="Portfolio Designing" />
                <h6>Portfolio Designing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container separator">
        <div className="line" />
        <h2>50+ Brands Trust Us</h2>
        <div className="line" />
      </div>

      <MarqueeScroll />

      <WhatsAppLogo />

      <Footer />
    </div>
  );
}
