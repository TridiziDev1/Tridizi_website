import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"
import creativeAgency from "../../assets/images/cardimage-1.png"
import badgeImg from "../../assets/images/BG Badge-1.png"
import qualityWork from "../../assets/images/cardimage-2.png"
import badgeImg1 from "../../assets/images/BG Badge-2.png"
import professionalTeam from "../../assets/images/cardimage-3.png"
import badgeImg2 from "../../assets/images/BG Badge-3.png"
import BrandingAgency from "../../assets/images/chair.png"
import TriDiziTeam from "../../assets/images/Design.png"
import GCGCorporation from "../../assets/company-logos/GCG.png"
import goodtobuy from "../../assets/company-logos/logo-goodtobuy (1).png"
import entersoft from "../../assets/company-logos/entersoftLogo.png"
import SideBar from '../../Components/Sidebar/SideBar';
import MarqueeScroll from '../../Components/MarqueeScroll/MarqueeScroll';
import WhatsAppLogo from '../../Components/WhatsAppLogo/WhatsAppLogo';
import ThirdPartyScripts from '../../Components/ThirdPartyScript/ThirdPartyScripts';
import Footer from '../../Components/Footer/Footer';
import NavBarHome from '../../Components/Navbar/NavBarHome';


export default function Home({top}) {
  const navigate = useNavigate();

    return (
      <div>
        <ThirdPartyScripts />
        <NavBarHome />
        <SideBar />
        <div className="banner1">
          <h1>
            Unleashing Imagination,
            <br />
            Igniting Brands
          </h1>
          <h3>
            Transform Your Vision into Vibrant Reality with <span>TriDizi</span>
          </h3>
          <p>
            <button onClick={()=>{navigate('/about') , top()}}>Discover More</button>
          </p>
        </div>

        <div className="social-icon">
          <a href="https://www.linkedin.com/company/tridizi/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4em"
              viewBox="0 0 448 512"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                svg {\n                    fill: #ffffff\n                }\n\n                svg:hover {\n                    fill: #F5900D;\n                }\n            ",
                }}
              />
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552356849618"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4em"
              viewBox="0 0 320 512"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                    svg {\n                        fill: #fafafa\n                    }\n\n                    svg:hover {\n                        fill: #F5900D;\n                    }\n                ",
                }}
              />
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/tridizi_/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4em"
              viewBox="0 0 448 512"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                    svg {\n                        fill: #ffffff\n                    }\n\n                    svg:hover {\n                        fill: #F5900D;\n                    }\n                ",
                }}
              />
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href="https://twitter.com/TriDizi" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4em"
              viewBox="0 0 512 512"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                    svg {\n                        fill: #ffffff\n                    }\n\n                    svg:hover {\n                        fill: #F5900D;\n                    }\n                ",
                }}
              />
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
        </div>
        <div className="ph-no">
          <a href='tel:"+918019670144"' target="_blank">
            +91 &nbsp;8019670144
          </a>
        </div>

        <div id="triangle-container" style={{ display: "none" }}>
          <div className="text-container text1">Branding</div>
          <div className="text-container text2">Designing</div>
          <div className="text-container text3">Develop</div>
        </div>

        <section className="card-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="content">
                  <img
                    className="content-image"
                    src={creativeAgency}
                    alt="Creative Agency"
                  />
                  <div className="title">
                    <h3>Creative Agency</h3>
                    <p className="content-text-1">
                      Elevating Brands with Imagination <br /> and Innovation
                    </p>
                    <p className="content-text">
                      Immerse in a realm where limitless creativity intertwines
                      with strategic brilliance, shaping unparalleled brand
                      experiences that resonate profoundly, leaving enduring
                      impressions.
                    </p>
                  </div>
                  <img src={badgeImg} className="badge-img" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="content">
                  <img
                    className="content-image"
                    src={qualityWork}
                    alt="Quality Work"
                  />
                  <div className="title">
                    <h3>Quality Work</h3>
                    <p className="content-text-1">
                      Excellence Redefined, Every Project,
                      <br /> Every Time
                    </p>
                    <p className="content-text">
                      TriDizi sets the standard with unwavering commitment to
                      quality. Every project reflects excellence, showcasing our
                      dedication. Experience the transformative impact.
                    </p>
                  </div>
                  <img src={badgeImg1} className="badge-img" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="content">
                  <img
                    className="content-image"
                    src={professionalTeam}
                    alt="Professional Team"
                  />
                  <div className="title">
                    <h3>Professional Team</h3>
                    <p className="content-text-1">
                      A Team Driven by Passion and <br />
                      Expertise
                    </p>
                    <p className="content-text">
                      Our passionate professionals turn ideas into reality,
                      blending deep design expertise with professionalism. We
                      unite creativity and experience, giving your brand a
                      deserving edge.
                    </p>
                  </div>
                  <img src={badgeImg2} className="badge-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="circle-1" />
          <div className="row">
            <div className="col bgColorok">
              <img
                src={BrandingAgency}
                className="brndagency"
                alt="Branding Agency"
              />
            </div>
            <div className="col">
              <div
                className="dot"
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#F5900D",
                  borderRadius: "10px",
                  marginTop: "35px",
                }}
              ></div>
              <p>About The Agency</p>
              <h2>
                We’re Top Notch &amp; Best{" "}
                <span>Branding &amp; Web Design </span> Agency
              </h2>
              <h6>Crafting Brands, Shaping Futures</h6>
              <p>
                We craft compelling brand stories that resonate. Our creative
                alchemy fuses strategy, design, and innovation, sparking the
                extraordinary. Elevate your brand with our passion for the art
                of storytelling
              </p>
            </div>
          </div>
          <div className="circle-2" />
        </section>

        <section className="marquee1">
          <marquee scrollamount={15} behavior="scroll" className="scroll_txt1">
            Branding<span style={{ color: "#F5900D" }}>-</span> Designing{" "}
            <span style={{ color: "#F5900D" }}>-</span> Developing
          </marquee>
        </section>

        <section className="play-btn1">
          <div className="row">
            <img src={TriDiziTeam} alt="TriDizi team" />
            {/* <img src="images/Play Icon.png" alt="" class="ply-icon"> */}
          </div>
        </section>

        <section className="Services">
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#F5900D",
              borderRadius: "10px",
              textAlign: "center",
              margin: "1% 50%",
            }}
          ></div>
          <p style={{ textAlign: "center" }}>What We’re Offering</p>
          <h2>
            {" "}
            <span style={{ color: "#F5900D" }}>Services</span> we're offering{" "}
            <br />
            to our cherished clients
          </h2>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col">
              <div className="cards">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 96 96"
                >
                  <path
                    d="M73.6 15.8C71.9 19.6 71.8 19.6 53.2 25.8C35.6 31.6 33.9 32 25.2 32C12.3 32 12 32.3 12 48C12 62.9 12.7 64 22 64H28V74V84H32H36V74.5C36 69.3 36.3 65 36.7 
                        65C37.1 65 45.2 67.6 54.7 70.7C71.7 76.4 71.9 76.4 73.6 80.2C75.2 83.8 75.6 84 79.7 84H84V70C84 57.3 84.2 55.8 86 54C87.3 52.7 88 50.7 88 48C88 45.3 87.3 43.3 86 42C84.2 40.2 84 38.7 84 
                        26V12H79.7C75.6 12 75.2 12.2 73.6 15.8ZM76 48.1C76 63.8 75.7 68.1 74.8 67.7C74.1 67.5 66.9 65.1 58.8 62.4L44 57.6V48V38.5L59.3 33.3C67.6 30.5 74.8 28.1 75.3 28.1C75.7 28 76 37 76 48.1ZM36 48V56H28H20V48V40H28H36V48Z"
                  />
                </svg>
                <h5>Brand Promotion</h5>
                <p style={{ paddingBottom: "40px", lineHeight: "27px" }}>
                  Increase the recognition and resonance of your brand. Our
                  clever brand-promotion efforts make sure your message gets to
                  the right people, leaving a lasting impact and encouraging
                  participation
                </p>
              </div>
            </div>
            <div className="col">
              <div className="cards">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 96 96"
                >
                  <path d="M31 15.5L34.4 19L23.2 30.3C17 36.5 12 42 12 42.6C12 43.9 16.2 48 17.5 48C18.1 48 23.5 43 29.7 36.8L41 25.6L44.5 29L48 32.4V22.2V12H37.8H27.6L31 15.5Z" />
                  <path d="M72 48V84H78H84V48V12H78H72V48Z" />
                  <path d="M52 64V84H58H64V64V44H58H52V64Z" />
                  <path d="M32 72V84H38H44V72V60H38H32V72Z" />
                  <path d="M12 76V84H18H24V76V68H18H12V76Z" />
                </svg>
                <h5>Graphic Design</h5>
                <p style={{ paddingBottom: "65px", lineHeight: "27px" }}>
                  We give your brand life, from thoughts to images. Our graphic
                  design team turns concepts into eye-catching graphics that
                  captivate audiences across all touchpoints.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="cards">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 96 96"
                >
                  <path d="M6 10C4.1 11.9 4 13.3 4 40C4 66.7 4.1 68.1 6 70C7.8 71.8 9.3 72 24 72H40V76V80H36H32V84V88H48H64V84V80H60H56V76V72H72C86.7 72 88.2 71.8 90 70C91.9 68.1 92 66.7 92 40C92 13.3 91.9 11.9 90 10C88.1 8.1 86.7 8 48 8C9.3 8 7.9 8.1 6 10ZM84 40V64H48H12V40V16H48H84V40Z" />{" "}
                  <path d="M44.5 38.9C42.4 47.7 40.8 55.2 41.1 55.5C41.4 55.7 43 56.2 44.6 56.6L47.5 57.2L51.5 41.1C53.6 32.3 55.2 24.7999 54.9 24.5C54.6 24.2999 53 23.7999 51.4 23.4L48.5 22.7999L44.5 38.9Z" />
                  <path d="M26 33.5L19.5 40L26.3 46.7L33 53.5L35.2 51.2L37.4 49L33 44.5L28.6 40L33 35.5C37.3 31.1 37.3 31 35.5 29C34.5 27.9 33.4 27 33.1 27C32.7 27 29.5 29.9 26 33.5Z" />
                  <path d="M60.5 29C58.7 31 58.7 31.1 63 35.5L67.4 40L63 44.5L58.6 49L60.8 51.2L63 53.5L69.7 46.7L76.5 40L70 33.5C66.5 29.9 63.3 27 62.9 27C62.6 27 61.5 27.9 60.5 29Z" />
                </svg>
                <h5>Website Development</h5>
                <p style={{ paddingBottom: "65px", lineHeight: "27px" }}>
                  Enter a digital space that is customized for your brand. We
                  blend creativity and functionality while developing websites
                  to ensure a smooth user experience and a positive impression.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="cards add "  >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 96 96"
                >
                  <path
                    d="M39.5 13.9C35.8 16.1 35.9 16 20.3 42C8.5 61.6 8 62.7 8 68C8 78.1 14 84 24.1 84C32 84 35.3 81.5 42 70.3C45 65.2 47.7 61.1 48 61.1C48.3 61.1 51 65.2 54 70.3C60.7 81.5 64 84 71.9 
                        84C82.1 84 88 78.1 88 67.9C88 62.4 87.6 61.6 74.3 39.4C58.7 13.5 57.3 12 48.1 12C44.4 12 41.5 12.6 39.5 13.9ZM52.2 22.2C55.3 24.6 79 65.4 79 68.3C79 73.6 72 77 67.8 73.8C64.7 71.4 41 30.6 41
                         27.7C41 22.4 48 19 52.2 22.2ZM38.4 44.2C42.2 50.6 42.4 52.6 39.5 56.4C38 58.3 38 58.3 35.8 56.3C32.8 53.6 29.6 52 27.1 52C25.3 52 25.5 51.3 29.3 45C31.6 41.1 33.8 38 34.1 38C34.5 38 36.4 40.8 38.4 44.2ZM29.2 62.7C31.5 64.7 31.6 70.7 29.3 73.2C27.3 75.5 21.3 75.6 18.8 73.3C16.5 71.3 16.4 65.3 18.7 62.8C20.7 60.5 26.7 60.4 29.2 62.7Z"
                  />
                </svg>
                <h5>Performance Marketing</h5>
                <p style={{ paddingBottom: "40px", lineHeight: "27px" }}>
                  Utilize the effectiveness of data-driven tactics. Every
                  campaign is optimized by our performance marketing expertise,
                  which also produces quantifiable outcomes that increase your
                  brand's profitability
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-bg">
          <div className="container-fluid slider">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mb-3 slide" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                      <div className="col-lg-2      ">
                        <img src={GCGCorporation} className="GCG Corporation" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">
                            Regarding Sandeep and his colleagues, including Ms
                            Haritha; they are a pleasure to deal with. Very
                            thorough and professional. We have dealt with many
                            companies over the years, offering services of Lead
                            Generation, List Generation, and more recently
                            digital marketing. I have instructed our company as
                            our go-to provider. I will indeed endorse them and
                            recommend using them for your marketing
                            requirements.
                          </p>
                          <h5 className="card-title">GCG Corporation</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-3 slide" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                      <div className="col-lg-2 ">
                        <img src={goodtobuy} className="goodtobuy" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">
                            Our experience with brand promotion has been nothing
                            short of exceptional. Their strategic approach and
                            creative brilliance helped us achieve a remarkable
                            boost in brand visibility and engagement. Their team
                            understands the pulse of the market and tailors
                            campaigns that truly resonate. We've witnessed a
                            tangible impact on our brand's perception and
                            customer outreach. Partnering with them was a
                            game-changer for our business.
                          </p>
                          <h5 className="card-title">GoodToBuy Properties</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mb-3 slide" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                      <div className="col-lg-2 ">
                        <img src={entersoft} className="entersoft" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">
                            I can't speak highly enough of the lead generation
                            expertise at TriDizi. Their team transformed our
                            approach to customer acquisition, delivering a
                            consistent stream of high-quality leads. Our
                            business has experienced remarkable growth and
                            success, thanks to their strategic insights and
                            dedication. If you're serious about expanding your
                            client base, this is the team you want by your side.
                          </p>
                          <h5 className="card-title">Entersoft Solutions</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeScroll />
        <WhatsAppLogo />
        <Footer />
      </div>
    );
}
