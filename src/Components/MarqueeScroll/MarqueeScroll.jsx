import React, { useEffect, useRef } from 'react'
import marquee1 from "../../assets/company-logos/Cliqbird logo.png"
import marquee2 from "../../assets/company-logos/customerization_logo.png"
import marquee3 from "../../assets/company-logos/dresma logo.webp"
import marquee4 from "../../assets/company-logos/entersoftLogo.png"
import marquee5 from "../../assets/company-logos/GCG.png"
import marquee6 from "../../assets/company-logos/info-professor.png"
import marquee7 from "../../assets/company-logos/logo onelenz.png"
import marquee8 from "../../assets/company-logos/Logo swivel group (1).png"
import marquee9 from "../../assets/company-logos/logo-goodtobuy (1).png"
import marquee10 from "../../assets/company-logos/logo-ipack.webp"
import marquee11 from "../../assets/company-logos/logo-yularatech.png"
import marquee12 from "../../assets/company-logos/realtor oxygen logo.png"
import marquee13 from "../../assets/company-logos/relish logo.webp"
import marquee14 from "../../assets/company-logos/SLITS Logo.jfif.jpg"
import marquee15 from "../../assets/company-logos/subhasthira.png"
import marquee16 from "../../assets/company-logos/Tros now logo.png"
import marquee17 from "../../assets/company-logos/Vtalent.jpg"
import "./MarqueeScroll.css"

export default function MarqueeScroll() {
    // // Ref for marquee content
    const marqueeContentRef = useRef(null);
    // UseEffect to handle marquee elements clone and scroll behavior
    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
            '--marquee-elements-displayed'
        );

        const marqueeContent = marqueeContentRef.current;
        root.style.setProperty('--marquee-elements', marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }

        // const handleScroll = () => {
        //     const sidebar = document.querySelector('.sidebar');
        //     if (window.scrollY > 0) {
        //         sidebar.style.left = '0px';
        //     } else {
        //         sidebar.style.left = '-250px';
        //     }

        //     const header = document.querySelector('.header');
        //     if (window.scrollY > 0) {
        //         header.style.top = '0px';
        //     } else {
        //         header.style.top = '100px';
        //     }
        // };

        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className="logos">
                <div className="marquee">
                    <ul className="marquee-content" ref={marqueeContentRef}>
                        <li><img src={marquee1} /></li>
                        <li><img src={marquee2} /></li>
                        <li><img src={marquee3} /></li>
                        <li><img src={marquee4} /></li>
                        <li><img src={marquee5} /></li>
                        <li><img src={marquee6} /></li>
                        <li><img src={marquee7} /></li>
                        <li><img src={marquee8} /></li>
                        <li><img src={marquee9} /></li>
                        <li><img src={marquee10} /></li>
                        <li><img src={marquee11} /></li>
                        <li><img src={marquee12} /></li>
                        <li><img src={marquee13} /></li>
                        <li><img src={marquee14} /></li>
                        <li><img src={marquee15} /></li>
                        <li><img src={marquee16} /></li>
                        <li><img src={marquee17} /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
