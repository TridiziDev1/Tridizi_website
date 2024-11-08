import React from "react";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Sidebar/SideBar";
import "../privacy policy/privacy.css"
import NavBarHome from "../../Components/Navbar/NavBarHome";
function Terms(){
    return (
        <div>
            <ThirdPartyScripts/>
            <NavBarHome/>
            <SideBar/>
        <div className="container privacy">
        <h1>Terms and Conditions</h1>
        <p>Your acceptance of compliance to these Terms will determine your ability to access and use the Service. All
          users, visitors, and others who access or use the website are subject to these terms.</p>
        <p>You acknowledge that you are responsible for adhering to any applicable local laws and that you will be bound
          by these terms of service and all applicable laws and regulations by using this website. It is forbidden for
          you to use or access this site if you disagree with any of these terms. The content on this website is
          shielded by relevant trademark and copyright laws.</p>
        <p>Except as otherwise noted, the content on this website is given to you without charge, with no promises or
          assurances, and is only meant to be used for general informational purposes. TriDizi has taken every
          precaution to guarantee that the data on this website is accurate as of the publication date.
        </p>
        <p>TriDizi is been the one of all copyrights, trademarks, and other intellectual property rights used on this
          website. Apart from the restricted ability to use the website in compliance with these terms, you have no
          additional rights to it. Information and content on this website may be printed off or downloaded for
          personal use. Any portion of this website or its contents may not be sold or distributed in any way. Without
          obtaining prior consent from TriDizi, you are not permitted to use any portion of this website on another
          website.</p>
        <p>With the exception of what is specifically stated on this website, TriDizi is not liable for the messages you
          send or receive, the content of any webpages, or how you use them.
        </p>
        <h5>Links to external web pages</h5>
        <p>The content, privacy practices, and policies of any third-party websites or services are outside TriDizi's
          control and responsibility. Additionally, you understand and agree that TriDizi will not be held directly or
          indirectly accountable for any loss or damage resulting from using or depending on any of the products,
          services, or content made available on or through any of these websites or services, or from claims made in
          connection with such use or reliance.
        </p>
        <p>It is highly recommended that you carefully review the terms and conditions as well as privacy policies of
          any third-party websites or services you use.
        </p>
        <h5>Closure</h5>
        <p>Without warning or responsibility, we reserve the right to instantly discontinue or suspend your use of our
          service for any reason, including but not limited to when you violate the terms.
        </p>
        <p>Any clause in the Terms that should, by definition, last until the end of time will do so. Examples of such
          clauses are ownership provisions, warranty disclaimers, indemnity, and liability limitations.
        </p>
        <h5>Modifications</h5>
        <p>We reserve the right to amend or update these Terms at any moment, in our sole discretion. We will make an
          effort to give at least 30 days' notice before any new terms take effect if a revision is significant. Our
          sole discretion will be used to determine what changes are considered material.</p>
        <p>You accept to be bound by the updated terms if you use our website or log in after those changes take effect.
          Please discontinue using the Service if you do not agree to the updated terms.</p>
        <h5>Contact Us</h5>
        <p>If you would like to update, remove, or modify any Personal Information that we may have about you, or if you
          have any concerns regarding how we have handled any privacy-related issue, please write us an email or
          letter at: (Have to mention our email here)</p>
        <p>6th phase, KPHB, <br /> Hyderabad-500072 <br />
          info@TriDizi.com
        </p>
        <p>Thanks for taking the time to learn about TriDizi’s Terms and conditions, and thanks for trusting us to
          manage your brand.
        </p>
      </div>
      <div>
        <Footer/>
      </div>
        </div>
    )
}
export default Terms;