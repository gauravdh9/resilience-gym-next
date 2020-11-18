import { useEffect } from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
const Span = styled.span`
  font-size: 150px;
  color: gray;
  opacity: 0.1;
  position: absolute;
  right: 0;
  line-height: 200px;
`;

const Data = [
  { icon: FaInstagram, link: "https://www.instagram.com/gaurav_dh/" },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100008053327253",
  },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/gaurav-dhiman9/" },
  { icon: FaGithub, link: "https://github.com/gauravdh9" },
];

const Footer = () => {
  useEffect(() => {
    gsap.from(".foot", {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeIn",
      scrollTrigger: {
        trigger: ".mainfooter",
        start: "top bottom",
      },
    });
  }, []);
  return (
    <>
      <div className="bottom-0  w-full flex flex-col md:flex-row ">
        <div className="relative w-full md:w-2/6">
          <Span className="heading">What</Span>
          <div className="flex flex-col h-full justify-between items-start p-12 w-full bg-gray-400 ">
            <div>
              <span className="heading text-3xl md:text-5xl text-gray-800">
                What <span className="text-gray-500">we</span> do?
              </span>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #718096 50%,  #a0aec0 50%)",
                  width: "200px",
                  height: "10px",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="foot text text-m font-light text-justify">
              <span className="text-2xl md:text-4xl leading-snug">W</span>e at
              resilience bring the best out in you. Our mission is to empower
              our users and provide them with best trainee out there with new
              equipments.We are the group of best trainee with many years of
              experience and able to change an average human to totally a new
              being.We do this by helping you find the most suitable equipment
              for your home gym, studio or commercial gym, keeping your budget,
              lifestyle and fitness goals in mind.
            </div>
          </div>
        </div>
        <div className="bg-gray-300 w-full md:w-4/6 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-around py-20">
          <div className="flex flex-col items-center">
            <span className="heading text-gray-700 text-4xl">Quick Links</span>
            <div className="flex text flex-col py-2 text-gray-600">
              <Link href="/" className="py-1 ">
                <a className="py-1">Home</a>
              </Link>
              <Link href="/register" className="py-1">
              <a className="py-1">Register</a>
              </Link>
              <Link href="/services" className="py-1">
              <a className="py-1">Services</a>
              </Link>
              <Link href="/about" className="py-1">
              <a className="py-1">About</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl heading text-gray-700">Follow Us</span>
            <div className="flex flex-col items-center">
              <div className="flex">
                {Data.map((Item, index) => (
                  <a className="p-4" href={Item.link} key={index}>
                    <Item.icon size={30} color={"#718096"} />
                  </a>
                ))}
              </div>
              <img src={"assets/logo2.svg"} className="w-48 my-6" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl heading text-gray-700">Contact Us</span>
            <div className="text flex flex-col py-2">
              <a
                href="mailto:dhgaurav009@gmail.com"
                className="my-2 text-gray-600 text-xl"
              >
                Email:dhgaurav009@gmail.com
              </a>
              <a
                className="my-2 text-gray-600 text-xl"
                href="https://www.google.co.in/maps/place/221B+Baker+St,+Marylebone,+London+NW1+6XE,+UK/@51.5237703,-0.1607444,17z/data=!3m1!4b1!4m5!3m4!1s0x48761acf33628211:0x445d7677a88322e1!8m2!3d51.523767!4d-0.1585557"
              >
                Loaction:221B Baker's Street
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mainfooter text bg-gray-700 flex justify-start items-center  pl-8 md:pl-56 text-gray-400">
        ©
        <span className="px-4">
          <img
            src={"assets/logo.svg"}
            style={{ maxWidth: "100px" }}
          />
        </span>
        RESILIENCE 2020
      </div>
    </>
  );
};

export default Footer;
