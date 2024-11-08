import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import bppng from "../../assets/images/webiste-designing.png";
import refinement from "../../assets/images/refinement.png";
import Discovery from "../../assets/images/discovery.png";
import delivery from "../../assets/images/delivery.png";
import conceptual from "../../assets/images/conceptual.png";
import hosting from "../../assets/images/hosting.png";
import reviewandapproval from "../../assets/images/review and approval.png";
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";
import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import "./GraphicDesign.css";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import GraphicGallery from "../../Components/GraphicGallery/GraphicGallery";
import Rating from "../../Components/Rating/Rating";

const GraphicDesign = () => {
  return (
    <>
      <ThirdPartyScripts />
      <SideBar />

      <Navbar bgImage={bgImage}>
        <div className="row">
          <div className="col-lg-7 col-sm-6 hero1">
            <p>
              TriDizi . <span style={{ color: "#F5900D" }}>Designing</span>
            </p>
            <h1 style={{letterSpacing:'0.5px'}}>Graphic Designing</h1>
          </div>

          <div className="col-lg-5 col-sm-6 con-form">
            <h1>Get a quote from us.</h1>
            <p>Leave your details and we will get back to you soon.</p>
            <form
              id="contactForm"
              action="https://script.google.com/macros/s/AKfycbyTtw8UilS8_JvY1RTfxqlGbzhLZ3NyL5n-4s890ayRqxgu4BxEqlVtwG4FAvMW-Vw9HQ/exec"
              method="post"
              name="landing-pages"
            >
              <div className="mb-3" style={{ display: "none" }}>
                <label htmlFor="service" className="form-label">
                  Service
                </label>
                <input
                  type="text"
                  className="form-control1"
                  id="service"
                  name="Service"
                  value="Brand Promotion"
                />
              </div>
              <div className="formdata mb-3 ">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control1"
                  id="name"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control1"
                  id="phone"
                  name="Phone"
                  placeholder="Enter your mobile number"
                  required
                  pattern="[6789][0-9]{9}"
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control1"
                  id="email"
                  name="Email"
                  placeholder="Email"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="message" className="form-label">
                  Tell us about your project and timeline
                </label>
                <textarea
                  className="form-control1"
                  id="message"
                  name="Requirement"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Navbar>
      {/*<!---------------------------------------what we offer ?------------------------------------->*/}
      <section className="offer" style={{ marginTop: "200px" }}>
        <div className="container text">
          <div className="row">
            <div
              className="dot"
              style={{ margin: "10px 49%", height: "20px", width: "20px" }}
            ></div>
            <p
              className="offering"
              style={{ color: "#5D5D5D", fontSize: "14px" }}
            >
              WHAT WE'RE OFFERING
            </p>
            <h1 className="fix_font1">
              Elevate your brand's presence{" "}
              <span style={{ color: "#F5900D" }}>
                with our Exceptional Graphic Design services.
              </span>
            </h1>
            <p className="row_para">
              Craft memorable and distinctive designs that represent the
              mainstay of your brand and leave a lasting imprint.TriDizi is your
              go-to destination for unparalleled graphic design services.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}

      <section className="graphic_design_add_details">
        <div className="add_details1">
          <div className="graphic_design1">
            <p className="graphic_para">
              In this initial stage, we intimately explore your brand, target
              audience, and goals. Through detailed discussions and creative
              brainstorming, we uncover the unique elements shaping your design.
            </p>
            <div className="img_tag">
              <img src={Discovery} alt="" />
              <p className="Img_alt_details">Discovery</p>
            </div>
          </div>

          <div className="graphic_design2">
            <p className="graphic_para">
              Using insights from discovery, our expert designers translate your
              ideas into visual concepts. Creativity takes centre stage as we
              explore design directions, presenting a range of initial concepts
              for your feedback.
            </p>
            <div className="img_tag">
              <img src={conceptual} alt="" style={{ margin: "0 10px" }} />
              <p className="Img_alt_details">conceptualization</p>
            </div>
          </div>

          <div className="graphic_design3">
            <p className="graphic_para">
              Upon final approval, we deliver the design assets in your required
              formats. Whether for print, digital use, or both, you receive a
              comprehensive package empowering you to unleash your new design
              across various platforms.
            </p>
            <div className="img_tag">
              <img src={delivery} alt="" />
              <p className="Img_alt_details">Delivery</p>
            </div>
          </div>
          <div className="graphic_design4">
            <p className="graphic_para">
              Your feedback is crucial. We refine and enhance the chosen design
              concept, ensuring it aligns seamlessly with your vision.
              Meticulous attention to detail is our commitment, making
              adjustments until every element is just right.
            </p>
            <div className="img_tag">
              <img src={refinement} alt="" />
              <p className="Img_alt_details">Refinement</p>
            </div>
          </div>
          <div className="graphic_design5">
            <p className="graphic_para">
              Your satisfaction is our top priority. We present the completed
              design for your detailed review and approval. Prompt adjustments
              are made if needed, ensuring the design aligns perfectly with your
              expectations.
            </p>
            <div className="img_tag">
              <img src={hosting} alt="" />
              <p className="Img_alt_details">
                Design <br /> Development
              </p>
            </div>
          </div>
          <div className="graphic_design6">
            <p className="graphic_para">
              Once the refined concept is approved, we enter the design
              development phase. Skilled designers use industry-leading software
              to craft a polished and professional final product, bringing your
              vision to life.
            </p>
            <div className="img_tag">
              <img src={reviewandapproval} alt="" />
              <p className="Img_alt_details">review and approval</p>
            </div>
          </div>
          <img src={bppng} className="bpImg012" alt="" />
          <span className="li-31">
            ------------------------------------------
          </span>
          <span className="li-32">
            ------------------------------------------
          </span>
          <span className="li-33">
            ------------------------------------------
          </span>
          <span className="li-34">
            ------------------------------------------
          </span>
          <span className="li-35">
            ------------------------------------------
          </span>
          <span className="li-36">
            ---------------------------------------------
          </span>
        </div>
      </section>

      {/*graphic_design_add_details minScreen  */}
      <section className="graphicDesign_minScreen">
        <div className="flexItem_1">
          <p className="graphic_para">
            In this initial stage, we intimately explore your brand, target
            audience, and goals. Through detailed discussions and creative
            brainstorming, we uncover the unique elements shaping your design.
          </p>
          <div className="img_tag012">
            <img src={Discovery} alt="" />
            <p className="Img_alt_details">Discovery</p>
          </div>
        </div>
        <div className="flexItem_2">
          <p className="graphic_para">
            Using insights from discovery, our expert designers translate your
            ideas into visual concepts. Creativity takes centre stage as we
            explore design directions, presenting a range of initial concepts
            for your feedback.
          </p>
          <div className="img_tag012">
            <img src={conceptual} alt="" style={{ margin: "0 10px" }} />
            <p className="Img_alt_details">conceptualization</p>
          </div>
        </div>
        <div className="flexItem_3">
          <p className="graphic_para">
            Upon final approval, we deliver the design assets in your required
            formats. Whether for print, digital use, or both, you receive a
            comprehensive package empowering you to unleash your new design
            across various platforms.
          </p>
          <div className="img_tag012">
            <img src={delivery} alt="" />
            <p className="Img_alt_details">Delivery</p>
          </div>
        </div>
        <div className="flexItem_4">
          <p className="graphic_para">
            Your feedback is crucial. We refine and enhance the chosen design
            concept, ensuring it aligns seamlessly with your vision. Meticulous
            attention to detail is our commitment, making adjustments until
            every element is just right.
          </p>
          <div className="img_tag">
            <img src={refinement} alt="" />
            <p className="Img_alt_details">Refinement</p>
          </div>
        </div>
        <div className="flexItem_5">
          <p className="graphic_para">
            Your satisfaction is our top priority. We present the completed
            design for your detailed review and approval. Prompt adjustments are
            made if needed, ensuring the design aligns perfectly with your
            expectations.
          </p>
          <div className="img_tag012">
            <img src={hosting} alt="" />
            <p className="Img_alt_details">
              Design <br /> Development
            </p>
          </div>
        </div>
        <div className="flexItem_6">
          <p className="graphic_para">
            Once the refined concept is approved, we enter the design
            development phase. Skilled designers use industry-leading software
            to craft a polished and professional final product, bringing your
            vision to life.
          </p>
          <div className="img_tag012">
            <img src={reviewandapproval} alt="" />
            <p className="Img_alt_details">review and approval</p>
          </div>
        </div>
      </section>

      {/* ---------------- ----------------------------------------------------------- */}

      <GraphicGallery />

      {/* --------------------------------------------- */}

     <Rating />
      {/* -------------------------------------------- */}
      <section className="why_choose_us">
        <div className="choose-row">
          <div className="choose-left">
            <div className="dot"></div>
            <p>WHY CHOOSE US</p>
            <h1>
              Providing The <span style={{ color: "#F5900D" }}>Best</span>{" "}
              Services
            </h1>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Client-Centric Approach</h5>
                  <p className="card-text">
                    Putting clients at the center of everything you do is key.
                    Understand their needs, provide tailored solutions, and
                    maintain open communication. Building strong client
                    relationships is crucial for long-term success.
                  </p>
                </div>
              </div>
            </div>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Expertise and Innovation</h5>
                  <p className="card-text">
                    Stay at the forefront of your industry by continually
                    enhancing your expertise and embracing innovation. Be a
                    thought leader in your field and provide clients with the
                    latest, most effective solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Efficient Operations</h5>
                  <p className="card-text">
                    Streamline your internal processes to ensure efficiency.
                    This includes project management, communication, and
                    resource allocation. Efficiency not only benefits your
                    agency but also enhances client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="choose-right">
            <div className="orng">
              <div className="blk">
                <img src={servimg} alt="Service Image" />
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

      <ClientImages />
      <Footer />
    </>
  );
};

export default GraphicDesign;
