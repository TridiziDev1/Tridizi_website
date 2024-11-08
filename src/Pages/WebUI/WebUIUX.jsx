import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import researching_and_refining from "../../assets/images/researching_and_refining.png";
import Understanding_Requirement from "../../assets/images/Understanding_Requirement.png";
import Submission_for_approval from "../../assets/images/Submission_for_approval.png";
import designing from "../../assets/images/designing.png";
import figma from "../../assets/images/figma.png";
import subhasthira from "../../assets/images/subhasthira.png";
import egifthub from "../../assets/images/egifthub.png";
import YuvaPark from "../../assets/images/YuvaPark.png";
import VasaviSignatures from "../../assets/images/Vasavi Signatures.png";
import link from "../../assets/images/link.png";
import devseccops from "../../assets/images/devseccops.png";
import MakeCareer from "../../assets/images/MakeCareer.png";
import LakeCity from "../../assets/images/LakeCity.png";
import Dequalita from "../../assets/images/Dequalita.png";
import SSR from "../../assets/images/SSR.png";
import Vspin from "../../assets/images/Vspin.png";
import GTBCRM from "../../assets/images/GTBCRM.png";
import goodtobuy from "../../assets/images/goodtobuy.png";
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";
import tick from "../../assets/images/Tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import "./WebUIUX.css";
import Rating from "../../Components/Rating/Rating";

const WebUIUX = () => {
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
            <h1 style={{letterSpacing:'0.5px'}}>Website UI/UX</h1>
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
            <h1 className="fix_font">
              Transform your online image{" "}
              <span style={{ color: "#F5900D" }}>
                with our skilled UI/UX design services
              </span>
            </h1>
            <p className="row_para">
              Our solutions are designed to delight and inspire, ranging from
              elegant interfaces to flawless user experiences. With the help of
              our specialized design knowledge, improve your brand's online
              visibility and stimulate interaction. Together, let's create your
              vision in a visually stunning and intuitive manner
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}

      <section className="webui_add_details">
        <div className="add_details">
          <div className="webui_items1">
            <p className="pTag">
              We start by thoroughly understanding your business goals,
              Requirements, target audience, and market landscape.
            </p>
            <div className="img_tag">
              <img src={Understanding_Requirement} alt="" />
              <p className="Img_alt_details">Understanding Requirement</p>
            </div>
          </div>

          <div className="webui_items2">
            <p>
              we prioritize researching and refining to ensure optimal user
              experiences. This involves analyzing market trends, user feedback,
              and competitor strategies to refine our design approach.
            </p>
            <div className="img_tag">
              <img src={researching_and_refining} alt="" />
              <p className="Img_alt_details">Researching & Refining</p>
            </div>
          </div>

          <div className="webui_items3">
            <p>
              Once the design is finalized, we submit it for approval from
              stakeholders. This involves presenting the design concepts,
              prototypes, and rationale behind design decisions. Feedback is
              gathered and incorporated as needed to ensure alignment with
              project goals and user needs.
            </p>
            <div className="img_tag">
              <img src={Submission_for_approval} alt="" />
              <p className="Img_alt_details">Submission approval</p>
            </div>
          </div>
          <div className="webui_items4">
            <p>
              we leverage insights from research and refine our concepts to
              create compelling designs. This phase involves translating user
              requirements into wireframes, mockups, and prototypes.
            </p>
            <div className="img_tag">
              <img src={designing} alt="" />
              <p className="Img_alt_details">designing</p>
            </div>
          </div>
          <img src={figma} className="bpImg3" alt="" />
          <span className="li-12">
            ------------------------------------------
          </span>
          <span className="li-23">
            ------------------------------------------
          </span>
          <span className="li-343">
            ------------------------------------------
          </span>
          <span className="li-45">
            ------------------------------------------
          </span>
        </div>
      </section>

      {/*  webui_add_details minScreen*/}
      <section className="webUIUX_minScreen">
        <div className="flexItem_111">
          <p className="pTag">
            We start by thoroughly understanding your business goals,
            Requirements, target audience, and market landscape.
          </p>
          <div
            className="img_tag"
            style={{
              height: "120px",
              width: "fit-content",

              padding: "0px 25px",
            }}
          >
            <img src={Understanding_Requirement} alt="" />
            <p className="Img_alt_details">Understanding Requirement</p>
          </div>
        </div>
        <div className="flexItem_221">
          <p>
            we prioritize researching and refining to ensure optimal user
            experiences. This involves analyzing market trends, user feedback,
            and competitor strategies to refine our design approach.
          </p>
          <div
            className="img_tag"
            style={{
              height: "120px",
              width: "fit-content",

              padding: "0px 25px",
            }}
          >
            <img src={researching_and_refining} alt="" />
            <p className="Img_alt_details">Researching & Refining</p>
          </div>
        </div>
        <div className="flexItem_331">
          <p>
            Once the design is finalized, we submit it for approval from
            stakeholders. This involves presenting the design concepts,
            prototypes, and rationale behind design decisions. Feedback is
            gathered and incorporated as needed to ensure alignment with project
            goals and user needs.
          </p>
          <div
            className="img_tag"
            style={{
              height: "120px",
              width: "fit-content",

              padding: "0px 25px",
            }}
          >
            <img src={Submission_for_approval} alt="" />
            <p className="Img_alt_details">Submission approval</p>
          </div>
        </div>
        <div className="flexItem_441">
          <p>
            we leverage insights from research and refine our concepts to create
            compelling designs. This phase involves translating user
            requirements into wireframes, mockups, and prototypes.
          </p>
          <div
            className="img_tag"
            style={{
              height: "120px",
              width: "fit-content",

              padding: "0px 30px",
            }}
          >
            <img src={designing} alt="" />
            <p className="Img_alt_details">designing</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------- */}

      <div className="container-fluid folio ui">
        <div className="container separator" style={{ marginBottom: "50px" }}>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="dot"></div>
        <h1 style={{ color: "#F5900D", textAlign: "center", fontWeight: 700 }}>
          Portfolio
        </h1>

        <div className="container ui-port">
          <a
            href="https://www.figma.com/file/ZTu1hf6iqInGWpdevptPto/GTB-Website?type=design&node-id=0-1&mode=design&t=EDIJWVZMDlCNkUcZ-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={goodtobuy} alt="Good To Buy" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/proto/0OgjLnAAP55OAOc8CZpq9a/infra-company?node-id=1-1324&starting-point-node-id=1%3A1324"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={subhasthira} alt="Subhasthira" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/proto/wA1sjtntFVzVZBMcZmlTLI/project-2?type=design&node-id=1-928&t=ZOp72SsU5nPqtE1E-0&scaling=scale-down-width&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={egifthub} alt="E Gift Hub" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/sRfW4N7yFed1M2gGD3Fog1/Vasavi-home-page?type=design&node-id=0-1&mode=design&t=F69PLWllaaEMNqcr-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img
              className="image"
              src={VasaviSignatures}
              alt="Vasavi Signatures"
            />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/sOghzBGOKrg1SqtnfvtXh9/SSR-Training?type=design&mode=design&t=F69PLWllaaEMNqcr-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={SSR} alt="SSR Training" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/R96lAxamaGn22P5MkkF9On/Untitled?type=design&node-id=1-66&mode=design&t=ljHbIBWyxwcI8U80-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={Vspin} alt="Vspin" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/4qOu6ykjIBZhQnIAlOVFgs/Yuva-Park-Landing-Page?type=design&mode=design&t=kyTZWFagxk1z7EQc-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={YuvaPark} alt="Yuva Park" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/0Stqg67aEDzEphgsmuJBDl/Lake-City-Landing-Page?type=design&mode=design&t=kyTZWFagxk1z7EQc-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={LakeCity} alt="Lake City" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/E9hgv9nhPIIyNMJEG0Sg3r/DQ-Landing-Page?type=design&mode=design&t=F69PLWllaaEMNqcr-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={Dequalita} alt="Dequalita" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://bankings.makecareer.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={MakeCareer} alt="Make Career" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://www.figma.com/file/00M69q1Vmid9I2zvuoRKwg/GTB-CRM?type=design&mode=design&t=kyTZWFagxk1z7EQc-0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={GTBCRM} alt="GTB CRM" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>

          <a
            href="https://devseccops.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img className="image" src={devseccops} alt="DevSecCops" />
            <div className="middle">
              <img src={link} alt="Linking Icon" className="linkicon" />
            </div>
          </a>
        </div>

       
      </div>

      {/* --------------------------------------------- */}
            <Rating/>
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

export default WebUIUX;
