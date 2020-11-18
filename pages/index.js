import { useEffect, useState } from "react";
import gsap from "gsap";
import "react-bnb-gallery/dist/style.css";
import ReactBnbGallery from "react-bnb-gallery";
import styled from "styled-components";

const Textdiv = styled.div`
  margin: 35rem 0 24rem 14.5rem;
  padding: 2.5rem;
  background: linear-gradient(180deg, #a0aec0 50%, #718096 50%);
  @media (max-width: 640px) {
    margin: 20rem 0 20rem 1rem;
    padding: 1rem;
  }
  @media (max-width: 1024px) {
    margin: 20rem 0 20rem 1rem;
    padding: 1rem;
  }
  @media (max-width: 1280px) {
    margin: 20rem 0 20rem 1rem;
    padding: 1rem;
  }
`;

const PHOTOS = [
  { photo: "assets/1.jpg" },
  { photo: "assets/2.jpg" },
  { photo: "assets/3.jpg" },
  { photo: "assets/4.jpg" },
  { photo: "assets/8.jpg" },
  { photo: "assets/10.jpg" },
  { photo: "assets/13.jpg" },
  { photo: "assets/19.jpg" },
];
const Gallery = [
  { photo: "assets/2.jpg" },
  { photo: "assets/4.jpg" },
  { photo: "assets/10.jpg" },
  { photo: "assets/12.jpg" },
  { photo: "assets/20.jpg" },
  { photo: "assets/21.jpg" },

];
const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".slider", {
      yPercent: -100,
      duration: 3,
    });
    gsap.from("#image", {
      opacity: 0,
      xPercent: -20,
      duration: 2,
      ease: "Power2.easeOut",
      delay: 0.5,
    });
    gsap.from(".Text", {
      opacity: 0,
      xPercent: 100,
      duration: 2,
      ease: "Power2.easeOut",
      delay: 1,
    });
    gsap.from(".logo2", {
      opacity: 1,
      duration: 0.3,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".nav", start: "top top", scrub: true },
    });
    gsap.from(".maingrid", {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
      scrollTrigger: { trigger: ".env", start: "top bottom", scrub: true },
    });
    gsap.from(".env", {
      opacity: 0,
      duration: 0.8,
      ease: "Power2.easeIn",
      scrollTrigger: { trigger: ".nav", start: "top top" },
    });
  }, []);
  return (
    <>
      <div className="slider absolute z-50 h-full w-full flex justify-center items-center" style={{background:"linear-gradient(to top, #2d3748, #1a202c)"}}>
        <img src={"assets/logo.svg"} />
      </div>
      <div className="flex h-screen justify-around bg-gray-500 text-white">
        <img
          id="image"
          src={"assets/5.jpg"}
          className=" object-cover h-full cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <Textdiv className="text flex flex-col absolute bg-white p-4" >
          <span className=" Text text-gray-700 text-2xl md:text-6xl xl:text-6xl lg:text-4xl">
            If success was an easy cake
          </span>
          <span className="Text text-gray-400 text-xxl md:text-5xl xl:text-5xl lg:text-3xl">
            then Hustle would have no meaning
          </span>
        </Textdiv>
        <div
          className=" flex-col justify-start p-2 items-center hidden w-0 md:w-full md:flex"
          style={{
            background: "linear-gradient(90deg, #718096 50%,  #a0aec0 50%)",
          }}
        >
          <img
            src={"assets/logo2.svg"}
            className="logo2 my-64 opacity-0"
          />
        </div>

        <div
          className=" flex-col justify-center p-2 items-center hidden w-0 md:w-full md:flex"
          style={{
            background: "linear-gradient(90deg, #2d3748 50%,  #1a202c 50%)",
          }}
        ></div>

        <ReactBnbGallery
          show={open}
          photos={PHOTOS}
          onClose={() => setOpen(!open)}
        />
      </div>
      <div className="heading flex flex-col items-center bg-gray-600 py-32">
        <span className="env w-2/3 p-8 border-b-2 text-4xl text-white">
          Environment
        </span>
        <div className="maingrid grid grid-cols-1 md:grid-cols-3 my-10 w-4/5 justify-center items-center h-full">
          {Gallery.map((item, index) => (
            <div className="even w-full h-full flex  overflow-hidden  border-2 border-solid border-white" key={index}>
              <img
                src={item.photo}
                key={index}
                className="object-cover w-full h-full hover:scale-110 transform transition-transform duration-500 "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
