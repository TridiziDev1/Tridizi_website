import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Branding from './Pages/Branding/Branding'
import Designing from './Pages/Designing/Designing'
import Developing from './Pages/Developing/Developing'
import Careers from './Pages/Careers/Careers'
import Contact from './Pages/contact/contact'
import Privacy from './Pages/privacy policy/privacypolicy'
import Terms from './Pages/Termsconditions/termsconditions'
import BrandPromting from './Pages/BrandPromoting/BrandPromting'
import AppMarketing from './Pages/AppMarketing/AppMarketing'
import PerformanceMarketing from './Pages/Performancemarketing/PerformanceMarketing'
import LinkedInProspecting from './Pages/LinkedInProspecting/LinkedInProspecting'
import WebUIUX from './Pages/WebUI/WebUIUX'
import Webdesign from './Pages/WebDesign/Webdesign'
import GraphicDesign from './Pages/GraphicDesign/GraphicDesign'
function App() {
  function scrollToTop(){
    window.scrollTo(0,0)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home top={scrollToTop} />} />
          <Route path="/about" element={<About top={scrollToTop} />} />
          <Route path="/branding" element={<Branding top={scrollToTop} />} />
          <Route path="/designing" element={<Designing top={scrollToTop} />} />
          <Route
            path="/developing"
            element={<Developing top={scrollToTop} />}
          />
          <Route path="/careers" element={<Careers top={scrollToTop} />} />
          <Route path="/contact" element={<Contact top={scrollToTop} />} />
          <Route path="/privacy" element={<Privacy top={scrollToTop} />} />
          <Route path="/terms" element={<Terms top={scrollToTop} />} />
          <Route
            path="/brandpromotion"
            element={<BrandPromting top={scrollToTop} />}
          />
          <Route
            path="/appmarketing"
            element={<AppMarketing top={scrollToTop} />}
          />
          <Route
            path="/performancemarketing"
            element={<PerformanceMarketing top={scrollToTop} />}
          />
          <Route
            path="/linkedinprospecting"
            element={<LinkedInProspecting top={scrollToTop} />}
          />
          <Route path="/webuiux" element={<WebUIUX top={scrollToTop} />} />
          <Route path="/webdesign" element={<Webdesign top={scrollToTop} />} />
          <Route
            path="/graphicdesign"
            element={<GraphicDesign top={scrollToTop} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App