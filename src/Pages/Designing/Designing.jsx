import React  from 'react'
import { useNavigate } from 'react-router-dom'
import ThirdPartyScripts from '../../Components/ThirdPartyScript/ThirdPartyScripts'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/Sidebar/SideBar'
import './services.css'
import Design from '../../assets/images/about image3.png'
import Graphicdesign from '../../assets/images/graphicdesign.png'
import Appdesign from '../../assets/images/app-designing.png'
import Websiteuiuxdesign from '../../assets/images/websiteuiux.png'
import brandlogodesign from '../../assets/images/brandlogodesigning.png'
import Mobileuiuxdesign from '../../assets/images//mobileuiux.png'
import MarqueeScroll from '../../Components/MarqueeScroll/MarqueeScroll'
import Footer from '../../Components/Footer/Footer'
import WhatsAppLogo from '../../Components/WhatsAppLogo/WhatsAppLogo'
import bgImage from  "../../assets/images/branding-bg.png"

export default function Designing({top}) {
  const navigate = useNavigate()
  return (
    <div>
      <ThirdPartyScripts />
      <Navbar bgImage={bgImage}>
        <div className="hero">
          <p>
            TriDizi . <span style={{ color: "#F5900D" }}>Services</span>
          </p>
          <h1>Designing</h1>
        </div>
      </Navbar>
      <SideBar />

      {/*  */}
      <section className="abt" style={{ marginTop: "140px !important" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="designingimg3">
              <img src={Design} alt="Designing" />
            </div>
            <div
              className="designingimg1 "
              style={{
                backgroundImage:
                  "url(../../assets/images/designingimg1.jpeg) !important",
              }}
            />
            <div
              className="designingimg2"
              style={{
                backgroundImage:
                  "url(../../assets/images/designingimg2.jpeg) !important",
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
              Designing
            </h1>
            <p className="txt" style={{ color: "#F5900D" }}>
              Excellence in Visual Design
            </p>
            <p className="txt">
              Your ideas will come to life with the help of our design services.
              We combine imagination and planning to create designs that are
              aesthetically spectacular, engaging, and effective. We bring your
              idea to life with accuracy and style, whether it's for a logo,
              website, or marketing materials. Allow outstanding design to leave
              a lasting impression on your brand.
            </p>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{navigate('/graphicdesign'), top()}}>
              <div
                className="brand-box"
                onclick="window.location.href='graphic.html'"
              >
                <img src={Graphicdesign} alt="Graphic Designing" />
                <h6>Graphic Designing</h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1 onclick="window.location.href='graphic.html'">
                Graphic Designing
              </h1>
              <h6>Visual Storytelling, Exceptional Impact</h6>
              <p>
                Transform concepts into eye-catching designs. Our graphic design
                service combines creativity and strategy to create visually
                stunning pieces that captivate viewers and leave an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1>App Designing</h1>
              <h6>Your vision into a stunning reality</h6>
              <p>
                Our skilled designers blend innovation with practicality to
                develop visually engaging and intuitive apps. Whether you're
                seeking to launch a new application or enhance an existing one,
                we're dedicated to translating your concepts into reality.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-5">
              <div className="brand-box">
                <img src={Appdesign} alt="Brand Logo Designing" />
                <h6>App Designing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-sm-12 col-md-5"
              onClick={() => {navigate("/webuiux"), top()}}
            >
              <div
                className="brand-box"
              
              >
                <img src={Websiteuiuxdesign} alt="Website UI/UX" />
                <h6>Website UI/UX</h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1 onclick="window.location.href='websiteUX.html'">
                Website UI/UX
              </h1>
              <h6>Seamless User Experience, Striking Design</h6>
              <p>
                Improve the appearance and effectiveness of your website.
                Through the integration of aesthetics and user-centric design,
                our UI/UX design service creates a smooth and captivating user
                experience that encourages repeat business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1>Brand Logo Designing</h1>
              <h6>Your Brand's Iconic Signature</h6>
              <p>
                Make a logo that perfectly captures the spirit of your company.
                With the help of our logo design service, your brand identity is
                transformed into a distinctive mark that represents your
                beliefs, goals, and distinct position in the marketplace.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-5">
              <div className="brand-box">
                <img src={brandlogodesign} alt="Brand Logo Designing" />
                <h6>Brand Logo Designing</h6>
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
                <img src={Mobileuiuxdesign} alt="Mobile App UI/UX" />
                <h6>Mobile App UI/UX</h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 infom">
              <h1>Mobile App UI/UX</h1>
              <h6>Intuitive Interface, Delightful Experience</h6>
              <p>
                Enhance your mobile app's usability and attractiveness. Our
                UI/UX design for mobile apps ensures an intuitive interface,
                creating a delightful user experience that maximizes engagement
                and satisfaction.
              </p>
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
