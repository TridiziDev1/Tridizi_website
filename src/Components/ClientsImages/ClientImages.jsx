import React from 'react'
import "./ClientImages.css"

import Cliqbird from "../../assets/company-logos/cliqbird logo.png"
import customerization from "../../assets/company-logos/customerization_logo.png"
import dresma from "../../assets/company-logos/dresma logo.webp"
import entersoftLogo from "../../assets/company-logos/entersoftlogo.png"
import GCG from "../../assets/company-logos/gcg.png"
import info_professor from "../../assets/company-logos/info-professor.png"
import onelenz from "../../assets/company-logos/logo onelenz.png"
import swivel from "../../assets/company-logos/logo swivel group (1).png"
import goodtobuy from "../../assets/company-logos/logo-goodtobuy (1).png"
import ipack from "../../assets/company-logos/logo-ipack.webp"
import yularatech from "../../assets/company-logos/logo-yularatech.png"
import realtor from "../../assets/company-logos/realtor oxygen logo.png"
import relish from "../../assets/company-logos/relish logo.webp"
import SLITS from "../../assets/company-logos/slits logo.jfif.jpg"
import subhasthira from "../../assets/company-logos/subhasthira.png"
import Trosnow from "../../assets/company-logos/tros now logo.png"
import Vtalent from "../../assets/company-logos/vtalent.jpg"
export default function ClientImages() {
  return (
    <div className="logoso">
       <img src={Cliqbird} alt="Cliqbird" />
        <img src={ipack} alt="ipack" />
        <img src={yularatech} alt="yularatech" />
        <img src={entersoftLogo} alt="entersoftLogo" />
        <img src={GCG} alt="GCG" />
        <img src={onelenz} alt="onelenz" />
        <img src={relish} alt="relish" style={{width: 'auto', height: '30px'}} />
        <img src={dresma} alt="dresma" />
        <img src={customerization} alt="customerization" />
        <img src={info_professor} alt="info-professor" />
        <img src={swivel} alt="swivel" />
        <img src={goodtobuy} alt="goodtobuy" />
        <img src={SLITS} alt="SLITS" />
        <img src={Trosnow} alt="Tros now" />
        <img src={subhasthira} alt="subhasthira" />
        <img src={realtor} alt="realtor oxygen" />
        <img src={Vtalent} alt="Vtalent" />
   
</div>
  )
}
