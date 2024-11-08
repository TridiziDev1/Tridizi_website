import React from "react";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import WhatsAppLogo from "../../Components/WhatsAppLogo/WhatsAppLogo";
import "../Designing/services.css"
import { useNavigate } from "react-router-dom";
import "./branding.css"
import branding1 from "../../assets/images/About Image3.png"
import br1 from "../../assets/images/br-1.png"
import br2 from "../../assets/images/app-marketing.png"
import br3 from "../../assets/images/event-marketing.png"
import br4 from "../../assets/images/br-3.png"
import br5 from "../../assets/images/br-4.png"
import br6 from "../../assets/images/br-5.png"
import br7 from "../../assets/images/br-6.png"
import br8 from "../../assets/images/br-7.png"
import br9 from "../../assets/images/br-8.png"
import br10 from "../../assets/images/br-2.png"
import MarqueeScroll from "../../Components/MarqueeScroll/MarqueeScroll";
import Footer from "../../Components/Footer/Footer";
import bgImage from  "../../assets/images/branding-bg.png"

function Branding({top}){
  const navigate = useNavigate(); //using useNavigate hook to navigate to desired page without loading webpage

  return (
    <div>
      <ThirdPartyScripts />
      <Navbar bgImage={bgImage}>
        <div className="hero">
          <p>
            TriDizi . <span style={{ color: "#F5900D" }}>Services</span>
          </p>
          <h1>Branding</h1>
        </div>
      </Navbar>
      <SideBar />

      <section className="abt" style={{ marginTop: "140px !important" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="branding3">
              <img src={branding1} alt="Image" />
            </div>
            <div className="branding1" />
            <div className="branding2" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 getto">
            <div className="dot" />
            <p className="txt">ABOUT THE AGENCY</p>
            <h1>
              <span style={{ color: "#F5900D" }}>
                Get to know about <br />{" "}
              </span>{" "}
              Branding
            </h1>
            <p className="txt" style={{ color: "#F5900D" }}>
              Transforming Vision into Identity
            </p>
            <p className="txt">
              Improve your company with our skilled branding services. We create
              distinctive brand identities that touch your audience's emotions,
              leaving a lasting impact and encouraging brand loyalty.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-sm-12"
              onClick={()=>{navigate("/brandpromotion"), top()}}
            >
              <div
                className="brand-box"
                onclick="window.location.href='brandpromotion.html'"
              >
                <img src={br1} alt="Brand Promotion" />
                <h6> Brand Promotion</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1 onclick="window.location.href='brandpromotion.html'">
                Brand Promotion
              </h1>
              <h6>Maximize Reach, Amplify Impact</h6>
              <p>
                Increase the recognition and resonance of your brand. Our clever
                brand-promotion efforts make sure your message gets to the right
                people, leaving a lasting impact and encouraging participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1 onClick={()=>{navigate('/appmarketing') , top()}}>
                App Marketing
              </h1>
              <h6>From launch to growth</h6>
              <p>
                Our comprehensive app marketing services are designed to uprise
                your app's visibility, drive downloads, and increase user
                engagement. From crafting compelling app store listings to
                executing targeted advertising campaigns, we specialize in
                strategies that deliver results.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12"
              onClick={() => {navigate("/appmarketing"), top()}}
            >
              <div
                className="brand-box"
                onclick="window.location.href='AppMarketing.html'"
              >
                <img src={br2} alt="Content Writing" />
                <h6>App Marketing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br3} alt="Event Marketing" />
                <h6>Event Marketing</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>Event Marketing</h1>
              <h6>From planning to execution</h6>
              <p>
                Our area of expertise is providing outstanding event marketing
                services that increase attendance, foster engagement, and create
                a lasting impact. We can help with everything from
                well-thought-out product launches to engaging brand activations
                and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1 onclick="window.location.href='performancemarketing.html'">
                Performance Marketing
              </h1>
              <h6>Drive Results, Fuel Growth</h6>
              <p>
                Utilize the effectiveness of data-driven tactics. Every campaign
                is optimized by our performance marketing expertise, which also
                produces quantifiable outcomes that increase your brand's
                profitability
              </p>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12"
              onClick={() =>{ navigate("/performancemarketing") , top()}}
            >
              <div
                className="brand-box"
                onclick="window.location.href='performancemarketing.html'"
              >
                <img src={br4} alt="Performance Marketing" />
                <h6>Performance Marketing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br5} alt="Lead Generation" />
                <h6>Lead Generation</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>Lead Generation</h1>
              <h6>Quality Leads, Real Conversions</h6>
              <p>
                Create quality leads for your company. Our lead-generating
                techniques target the proper demographic, bringing you prospects
                who are eager to interact and relate to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1 onclick="window.location.href='linkedin.html'">
                LinkedIn Prospecting
              </h1>
              <h6>Connect with Precision</h6>
              <p>
                Leverage the power of LinkedIn. Our prospecting services help
                you engage with a relevant network, fostering meaningful
                professional connections and potential business opportunities.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12" onClick={()=>{navigate('/linkedinprospecting') , top()}}>
              <div
                className="brand-box"              >
                <img src={br6} alt="LinkedIn Prospecting" />
                <h6>LinkedIn Prospecting</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br7} alt="Email Marketing" />
                <h6>Email Marketing</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>Email Marketing</h1>
              <h6>Direct Engagement, Lasting Impressions</h6>
              <p>
                Reach your audience directly and effectively. Our email
                marketing strategies craft personalized campaigns that resonate,
                driving engagement and nurturing customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>YouTube Marketing</h1>
              <h6>Visual Storytelling for Impact</h6>
              <p>
                Draw viewers' attention with visuals. With the help of our
                YouTube marketing techniques, you can engage your audience and
                increase brand recognition on one of the biggest platforms.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br8} alt="YouTube Marketing" />
                <h6>YouTube Marketing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br9} alt="Content Writing" />
                <h6>Content Writing</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>Content Writing</h1>
              <h6>Words that Inspire, Content that Resonates</h6>
              <p>
                Create an engaging story. Our content writing services provide
                interesting, educational, and SEO-optimized material that
                successfully spreads the word about your company through a
                variety of media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 infom">
              <h1>Search Engine Optimization (SEO)</h1>
              <h6>Boost Your Online Presence</h6>
              <p>
                Make yourself more visible on search engines. Our SEO tactics
                improve your website, generating organic traffic and ensuring
                that your brand is noticeable in the online environment.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="brand-box">
                <img src={br10} alt="Search Engine Optimization" />
                <h6>Search Engine Optimization (SEO)</h6>
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

      <div>
        <MarqueeScroll />
        <Footer />
        <WhatsAppLogo />
      </div>
    </div>
  );
}
export default Branding;