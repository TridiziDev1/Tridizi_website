import React, { useState } from 'react'
import ThirdPartyScripts from '../../Components/ThirdPartyScript/ThirdPartyScripts'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/Sidebar/SideBar'
import Careerimg from '../../assets/images/About Image3.png'
import Carimg1 from '../../assets/images/carimg1.jpeg'
import Carimg2 from '../../assets/images/carimg2.jpeg'
import Carimg3 from '../../assets/images/carimg3.jpeg'
import Carimg4 from '../../assets/images/carimg4.jpeg'
import Carimg5 from '../../assets/images/carimg5.jpeg'
import Carimg6 from '../../assets/images/carimg6.jpeg'
import Carimg7 from '../../assets/images/carimg7.jpeg'
import Carimg8 from '../../assets/images/carimg8.jpeg'
import Carimg9 from '../../assets/images/carimg9.jpeg'
import MarqueeScroll from '../../Components/MarqueeScroll/MarqueeScroll'
import './career.css'
import WhatsAppLogo from '../../Components/WhatsAppLogo/WhatsAppLogo'
import Footer from '../../Components/Footer/Footer'
import bgImage from '../../assets/images/careerhero.jpeg'
import CareerModal from '../../Components/CareerModal/CareerModal'
function Careers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const setJobPosition = () => {
        setIsModalOpen(true); // Open the modal when the button is clicked
      };
    
      const closeModal = () => {
        setIsModalOpen(false); // Close the modal
      };


    return (
        <div>
            <ThirdPartyScripts />
            <Navbar bgImage={bgImage}>
                <div className="hero">
                    <p>TriDizi . <span style={{ color: '#F5900D' }}>Careers</span></p>
                    <h1>Careers</h1>
                </div>
            </Navbar>
            <SideBar />


            <section className="abt">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="img3"><img src={Careerimg} alt="branding" /></div>
                        <div className="careerimg1" />
                        <div className="careerimg2" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 getto">
                        <div className="dot" />
                        <p className="txt">ABOUT CAREERS</p>
                        <h1><span style={{ color: '#F5900D' }}>Want to work</span><br /> with us ?</h1>
                        <p className="txt" style={{ color: '#F5900D' }}>Discover Your Path to Success</p>
                        <p className="txt">Unlock opportunities and advance your career with tailored guidance
                            and resources. Our approach nurtures your potential, empowering you to reach
                            new heights in your professional journey. Let's shape your future together
                        </p>
                    </div>
                </div>
            </section>




            <section className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg1} alt="Social Media Executive" />
                                <h3 className="title">Social Media Executive</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg2} alt="Graphic Designer" />
                                <h3 className="title">Graphic Designer</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg3} alt="Web Developer" />
                                <h3 className="title">Web Developer</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg4} alt="Backend Developer" />
                                <h3 className="title">Backend Developer</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg5} alt="Business Process Analyst" />
                                <h3 className="title">Business Process Analyst</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg6} alt="SEO Executive" />
                                <h3 className="title">SEO Executive</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg7} alt="Content Writer" />
                                <h3 className="title">Content Writer</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg8} alt="Lead Generation Executive" />
                                <h3 className="title">Lead Generation Executive</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="content">
                                <img className="content-image" src={Carimg9} alt="Video Editor" />
                                <h3 className="title">Video Editor</h3>
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text"><button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={setJobPosition} style={{ margin: '-60px' }}>Apply Now</button> </p>
                                </div>
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




            <CareerModal show={isModalOpen} onHide={closeModal} />




        </div>
    )
}

export default Careers
