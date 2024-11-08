import React, { useEffect } from 'react'

export default function SideBar() {

    useEffect(() => {
        const handleScroll = () => {
            const sidebar = document.querySelector('.sidebar');
            if (window.scrollY > 0) {
                sidebar.style.left = '0px';
            } else {
                sidebar.style.left = '-250px';
            }

            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.style.top = '0px';
            } else {
                header.style.top = '100px';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
      <div className="sidebar">
        <ul>
          <li>
            <span className="icon">
              <i className="ph-user" />
            </span>
            <a href="/about">
              <span className="text">About</span>
            </a>
          </li>
          <li>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                <path
                  d="M73.6 15.8C71.9 19.6 71.8 19.6 53.2 25.8C35.6 31.6 33.9 32 25.2 32C12.3 32 12 32.3 12 48C12 62.9 12.7 64 22 64H28V74V84H32H36V74.5C36 69.3 36.3 65 36.7 
        65C37.1 65 45.2 67.6 54.7 70.7C71.7 76.4 71.9 76.4 73.6 80.2C75.2 83.8 75.6 84 79.7 84H84V70C84 57.3 84.2 55.8 86 54C87.3 52.7 88 50.7 88 48C88 45.3 87.3 43.3 86 42C84.2 40.2 84 38.7 84 
        26V12H79.7C75.6 12 75.2 12.2 73.6 15.8ZM76 48.1C76 63.8 75.7 68.1 74.8 67.7C74.1 67.5 66.9 65.1 58.8 62.4L44 57.6V48V38.5L59.3 33.3C67.6 30.5 74.8 28.1 75.3 28.1C75.7 28 76 37 76 48.1ZM36 48V56H28H20V48V40H28H36V48Z"
                />
              </svg>
            </span>
            <a href="/branding">
              <span className="text">Branding</span>
            </a>
          </li>
          <li>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                <path d="M31 15.5L34.4 19L23.2 30.3C17 36.5 12 42 12 42.6C12 43.9 16.2 48 17.5 48C18.1 48 23.5 43 29.7 36.8L41 25.6L44.5 29L48 32.4V22.2V12H37.8H27.6L31 15.5Z" />
                <path d="M72 48V84H78H84V48V12H78H72V48Z" />
                <path d="M52 64V84H58H64V64V44H58H52V64Z" />
                <path d="M32 72V84H38H44V72V60H38H32V72Z" />
                <path d="M12 76V84H18H24V76V68H18H12V76Z" />
              </svg>
            </span>
            <a href="/designing">
              <span className="text">Designing</span>
            </a>
          </li>
          <li>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                <path d="M6 10C4.1 11.9 4 13.3 4 40C4 66.7 4.1 68.1 6 70C7.8 71.8 9.3 72 24 72H40V76V80H36H32V84V88H48H64V84V80H60H56V76V72H72C86.7 72 88.2 71.8 90 70C91.9 68.1 92 66.7 92 40C92 13.3 91.9 11.9 90 10C88.1 8.1 86.7 8 48 8C9.3 8 7.9 8.1 6 10ZM84 40V64H48H12V40V16H48H84V40Z" />{" "}
                <path d="M44.5 38.9C42.4 47.7 40.8 55.2 41.1 55.5C41.4 55.7 43 56.2 44.6 56.6L47.5 57.2L51.5 41.1C53.6 32.3 55.2 24.7999 54.9 24.5C54.6 24.2999 53 23.7999 51.4 23.4L48.5 22.7999L44.5 38.9Z" />
                <path d="M26 33.5L19.5 40L26.3 46.7L33 53.5L35.2 51.2L37.4 49L33 44.5L28.6 40L33 35.5C37.3 31.1 37.3 31 35.5 29C34.5 27.9 33.4 27 33.1 27C32.7 27 29.5 29.9 26 33.5Z" />
                <path d="M60.5 29C58.7 31 58.7 31.1 63 35.5L67.4 40L63 44.5L58.6 49L60.8 51.2L63 53.5L69.7 46.7L76.5 40L70 33.5C66.5 29.9 63.3 27 62.9 27C62.6 27 61.5 27.9 60.5 29Z" />
              </svg>
            </span>
            <a href="/developing">
              <span className="text">Developing</span>
            </a>
          </li>
          <li>
            <span className="icon">
              <i className="ph-phone" />
            </span>
            <a href="/contact">
              <span className="text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    );
}
