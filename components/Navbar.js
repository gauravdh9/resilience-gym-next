import { useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
const Data = [
  { text: "Register", point: "register", class: "register" },
  { text: "Services", point: "services", class: "services" },
  {text:"About Us",point:"about",class:"contact"},
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  function animation() {
    if (show) {
      gsap.to(".content", {
        maxHeight: "100vh",
        duration: 2,
        ease: "Power2.easeIn",
      });
      gsap.from(
        ".navitem",
        { yPercent: -100, opacity: 0, duration: 2, ease: "Power2.easeIn" },
        "-=1"
      );
    } else {
      gsap.to(".content", {
        maxHeight: 0,
        duration: 2,
        ease: "Power2.easeOut",
      });
    }
  }
  useEffect(() => {
    gsap.from(".nav", {
      background: "transparent",
      duration: 0.3,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".nav", start: "top top", scrub: true },
    });
    gsap.from(".logo",{opacity:0,duration:0.3,ease:"Power2.easeOut",scrollTrigger:{trigger:".nav",start:"top top",scrub:true}})
    if (window.matchMedia("(min-width: 640px)").matches) {
      setShow(true);
    }
  }, []);
  return (
    <div className="nav heading w-full flex flex-col fixed justify-between p-4 md:flex-row text-white bg-gray-700 z-50">
      <div className="w-full md:w-auto flex justify-between items-center p-2">
        <a href="/"><img
          src={"assets/logo.svg"}
          className="logo w-40 fill-current opacity-1"
        /></a>
        <img
          src={"assets/hamburger.svg"}
          onClick={() => {
            setShow(!show);
            animation();
          }}
          className="w-12 md:hidden"
        />
      </div>
      <ul
        className={`flex flex-col content justify-center items-center md:flex-row`}
        style={{ maxHeight: show ? "100vh" : 0, overflow: "hidden" }}
      >
        {Data.map((item, index) => (
          <li className="navitem m-2 p-3 text-xl" key={index}>
            <Link
              key={index}
              href={item.point}
            >
              <a className="hover:bg-gray-400 hover:text-gray-700 rounded px-8 py-4 transition-all duration-300 ease-in"
              >{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
