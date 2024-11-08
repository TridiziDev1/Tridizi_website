import React from "react";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import WhatsAppLogo from "../../Components/WhatsAppLogo/WhatsAppLogo";
import "./contacts.css"
import branding1 from "../../assets/images/About Image3.png"
import MarqueeScroll from "../../Components/MarqueeScroll/MarqueeScroll";
import Footer from "../../Components/Footer/Footer";
import map from "../../assets/images/map.png"
import contactlogo from "../../assets/images/contactbanner.jpeg"
import { useNavigate } from "react-router-dom";

 function Contact(){
  const navigate = useNavigate()
  const handleNavigate=()=>{
    navigate("/careers")
  }
    return (
        <div>
            <ThirdPartyScripts />
            <Navbar bgImage={contactlogo}>
            <div className="hero">
                <p>TriDizi . <span style={{color: '#F5900D'}}>Contact</span></p>
                <h1>Contact</h1>
            </div>
            </Navbar>
            <SideBar/>

    <section className="abt" style={{marginTop:'300px'}}>
        <div className="heading">
          <div className="dot" />
          <p className="txt">CONTACT THE AGENCY</p>
          <h1>Get a quote <span style={{color: '#F5900D'}}>from us</span></h1>
          <p className="txt" style={{color: '#F5900D'}}>Leave your details and we will get back to you soon</p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contactimg3"><img src={branding1} alt="contact" /></div>
            <div className="contactimg1"/>
            <div className="contactimg2"/>
          </div>
        <div className="col-lg-6 col-md-12 col-sm-12 getto">
          <form id="contactForm" onsubmit="emailSend(); reset(); return false;" name="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="Name" placeholder="Enter Your Name" required />
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" name="Phone" placeholder="Enter your mobile number" required pattern="[6789][0-9]{9}" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="Email" placeholder="Email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
        </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Tell us about your requirement</label>
            <textarea className="form-control" id="message" name="Requirement" placeholder="Message" defaultValue={""} />
        </div>
          <button type="submit" className="btn" value="submit">Submit</button>
        </form>
        <div id="form-filling-time" name="Timestamp">
            </div>
          </div>
          </div>
        </section>

        <div className="work">
        <div className="heading">
          <div className="dot" />
          <p className="txt">CAREERS &amp; INTERNSHIPS</p>
          <h1>Want to work <span style={{color: '#F5900D'}}>with us.</span></h1>
          <button className="btn" onclick="window.location.href='careers.html'" type="button" onClick={handleNavigate}>View Current
            Openings</button>
        </div>
      </div>


      <div className="container boxes">
        <div className="box">
          <h1>Nanakramguda</h1>
          <h4>4th floor, Abhinav Enclave, Khajaguda, Nanakramguda, Hyderabad - 500075.</h4>
          <a href="https://maps.app.goo.gl/TxaVTTAKXTef3XwM8" target="_blank"><img src={map} alt="location" /></a>
        </div>
        <div className="box2">
          <h1>KPHB</h1>
          <h4>6th Phase, KPHB, Hyderabad&nbsp;-&nbsp;500072.</h4>
          <a href="https://maps.app.goo.gl/Yav7dBv9rY6GXDVo6" target="_blank"><img src={map} alt="location" /></a>
        </div>
      </div>

        <div>
            <MarqueeScroll/>
            <Footer/>
            <WhatsAppLogo/>
        </div>
        

        </div>
    )
 }

 export default Contact;