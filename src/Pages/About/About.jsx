import React  from 'react'
import { useNavigate } from 'react-router-dom'
import "./About.css"
import ThirdPartyScripts from '../../Components/ThirdPartyScript/ThirdPartyScripts'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/Sidebar/SideBar'
import webDesign from "../../assets/images/about image3.png"
import aboutImage from "../../assets/images/hero image.png"
import slide1 from "../../assets/images/star.png"
import slide2 from "../../assets/images/light-bulb.png"
import slide3 from "../../assets/images/rocket.png"
import slide4 from "../../assets/images/star.png"
import MarqueeScroll from '../../Components/MarqueeScroll/MarqueeScroll'
import Footer from '../../Components/Footer/Footer'
import WhatsAppLogo from '../../Components/WhatsAppLogo/WhatsAppLogo'
import ClientImages from '../../Components/ClientsImages/ClientImages'
export default function About({top}) {
    const navigate = useNavigate()
    return (
        <>
            <ThirdPartyScripts />
            <Navbar bgImage={aboutImage}>
                <div className="hero" >
                    <p>TriDizi . <span style={{ color: '#F5900D' }}>About</span></p>
                    <h1>About</h1>
                </div>
            </Navbar>
            <SideBar />

            <section className="abt">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="img3"><img src={webDesign} className='image_about' alt="web design" /></div>
                        <div className="img1" />
                        <div className="img2" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 getto">
                        <div className="dot" />
                        <p className="txt">ABOUT THE AGENCY</p>
                        <h1><span style={{ color: '#F5900D' }}>We’re Top Notch &amp; Best </span> Branding and Web Design Agency
                        </h1>
                        <p className="txt" style={{ color: '#F5900D' }}>Crafting Brands, Shaping Futures</p>
                        <p className="txt ">We craft compelling brand stories that resonate. Our creative alchemy fuses strategy,
                            design, and innovation, sparking the extraordinary. Elevate your brand with our passion for the art
                            of storytelling.</p>
                        <button className="btn" onClick={()=>top()} type="button">Discover More</button>
                    </div>
                </div>
            </section>


            <div className="context">
                <p>Our firm was founded by a group of visionaries who had a love for developing concepts into outstanding brand
                    experiences.
                </p>
                <p>We were on a journey to reimagine brand narrative from those early days on. We took on projects that pushed
                    the frontiers of imagination and defied conventions because we had the ingenuity, inventiveness, and
                    unshakable commitment to perfection.</p>
            </div>



            <section className="slid">
                <div className="wrapper">
                    <div className="outer">
                        {/* Slide 1 */}
                        <div className="cardslide" style={{ '--delay': '-1' }}>
                            <div className="contents">
                                <img src={slide1} alt="user experience in design" />
                                <div className="details">
                                    <span className="name">Values</span>
                                    <p>
                                        We nurture and celebrate creativity, pushing the boundaries of
                                        innovation to deliver imaginative and cutting-edge solutions for our clients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="cardslide" style={{ '--delay': '0' }}>
                            <div className="contents">
                                <img src={slide2} alt="a design agency" />
                                <div className="details">
                                    <span className="name">Vision</span>
                                    <p>Today's Inspiration for Tomorrow's Narratives.</p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="cardslide" style={{ '--delay': '1' }}>
                            <div className="contents">
                                <img src={slide3} alt="best web development agencies" />
                                <div className="details">
                                    <span className="name">Mission</span>
                                    <p>
                                        TriDizi supports creativity and innovation in brand creation through
                                        compelling tales, inventive design, and smart marketing, enabling
                                        organisations to realise their full potential.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="cardslide" style={{ '--delay': '2' }}>
                            <div className="contents">
                                <img src={slide4} alt="best website to design" />
                                <div className="details">
                                    <span className="name">Values</span>
                                    <p>
                                        We nurture and celebrate creativity, pushing the boundaries of
                                        innovation to deliver imaginative and cutting-edge solutions for our clients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="cardslide" style={{ '--delay': '2' }}>
                            <div className="contents">
                                <img src={slide3} alt="graphic design" />
                                <div className="details">
                                    <span className="name">Mission</span>
                                    <p>
                                        TriDizi supports creativity and innovation in brand creation through
                                        compelling tales, inventive design, and smart marketing, enabling
                                        organisations to realise their full potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contacts">
                <h1>“Let’s create a Measurable impact on your business”</h1>
                <button className="btn" onClick={()=>{top(), navigate('/contact')}} type="button">Contact</button>
            </div>

            <div class="container separator">
                <div class="line"></div>
                <h2>Our Partners</h2>
                <div class="line"></div>
            </div>

<ClientImages/>

            <div>
                {/* <MarqueeScroll /> */}
                <Footer />
                <WhatsAppLogo />
            </div>
        </>
    )
}
