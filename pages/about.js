import gsap from "gsap";
import { useEffect } from "react";
import { init } from "ityped";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import Title from "../components/Title"
const Div = styled.div`
  &:hover > span {
    opacity: 1;
  }
  &:hover > img {
    transform: scale(1.1);
  }
`;
const Span = styled.span`
  transition: opacity 500ms;
`;
const Img = styled.img`
  transition: transform 500ms;
`;

const Data = [
  {
    image: "assets/trainer.jpg",
    name: "Frank Medrano",
    role: "Director/Head Coach",
    insta: "https://www.instagram.com/frank_medrano/",
    github: "https://www.linkedin.com/in/frank-medrano-05b098185/",
    linkedin: "https://www.linkedin.com/in/frank-medrano-05b098185/",
  },
  {
    image: "assets/gaurav.jpg",
    name: "Gaurav",
    role: "MD/Junior Coach",
    insta: "https://www.instagram.com/gaurav_dh/",
    github: "https://github.com/gauravdh9",
    linkedin: "https://www.linkedin.com/in/gaurav-dhiman9/",
  },
  {
    image: "assets/trainer2.jpg",
    name: "Adam Frater",
    role: "CO-Founder/Senior Coach",
    insta: "https://www.instagram.com/adam_frater/",
    github: "https://www.linkedin.com/in/adamfrater/",
    linkedin: "https://www.linkedin.com/in/adamfrater/",
  },
];
const Cert = [
  { image: "assets/C2.jpg" },
  { image: "assets/C1.jpg" },
  { image: "assets/C3.jpg" },
];
const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "Power1.out" } });
    tl.to(".slider", {
      xPercent: -100,
      duration: 2,
      delay: 0.2,
    });
    var typed1 = document.getElementById("AboutPhrase");
    init(typed1, {
      showCursor: false,
      startDelay: 500,
      typeSpeed: 50,
      strings: [
        "We are Team of choosen professionals at Resilience",
        "Who puts everything to bring best out of you.",
      ],
    });
  }, []);
  return (
    <>
      <div className="slider absolute z-50 h-full w-full flex justify-center items-center "style={{background:"linear-gradient(to left, #2d3748, #1a202c)"}} >
        <img src={"assets/logo.svg"} />
      </div>
      <div className="flex flex-col">
        <div className="w-full relative">
          <div className="absolute flex flex-col md:flex-row items-center py-32 md:py-48 px-16 md:px-32 inset-0 text-white bg-gray-700 bg-opacity-50 h-full w-full">
            <span className="flex flex-row md:flex-col p-8 heading">
              <span className="text-3xl md:text-6xl leading-none w-full px-2">
                What
              </span>
              <span className="text-3xl md:text-6xl leading-none w-full text-gray-900 px-2">
                we
              </span>
              <span className="text-3xl md:text-5xl leading-none w-full px-2">
                are?
              </span>
            </span>
            <div
              className="text-2xl text m-8 md:text-4xl leading-none flex justify-center items-center"
              id="AboutPhrase"
            ></div>
          </div>
          <img
            src={"assets/22.jpg"}
            style={{ height: "90vh", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="px-2 md:px-32">
          <div className="flex flex-col justify-center items-center bg-gray-200 py-6 md:py-10">
            <Title className="mt-10 mb-20 text-4xl md:text-6xl text-gray-800" text={"Our Team"} color="#2d3748"/>
            <div className="flex flex-col md:flex-row w-full justify-center items-center">
              {Data.map((item, index) => (
                <div className="mx-10 my-6" key={index}>
                  <Div className="relative overflow-hidden">
                    <Img
                      src={item.image}
                      className="object-cover"
                      style={{ height: "300px",width:"255.7px" }}
                    />
                    <Span className="absolute flex items-end inset-0 h-full w-full  bg-gradient-to-t from-gray-800 to-transparent opacity-0">
                      <div className="flex justify-evenly w-full py-8">
                        <span>
                          <a href={item.insta}>
                            <FaInstagram size={30} color="white" />
                          </a>
                        </span>
                        <span>
                          <a href={item.github}>
                            <FaGithub size={30} color="white" />
                          </a>
                        </span>
                        <span>
                          <a href={item.linkedin}>
                            <FaLinkedinIn size={30} color="white" />
                          </a>
                        </span>
                      </div>
                    </Span>
                  </Div>
                  <div className="flex flex-col justify-center items-center text-center text-gray-700">
                    <span className="text-xl my-2 heading ">{item.name}</span>
                    <span className="text-sm text">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative bg-gray-600 flex flex-col justify-center items-center px-8">
        <Title className="mt-8 mb-12 text-4xl md:text-6xl text-gray-100" text={"Accredations"} color="#f7fafc"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12 z-50">
          {Cert.map((item,index)=>(
            <div key={index} className="w-full">
              <img src={item.image} className="object-cover"/>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
