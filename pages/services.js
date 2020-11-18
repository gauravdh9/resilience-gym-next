import { useEffect } from "react";
import { Button } from "./register";
import gsap from "gsap";
export const Data = [
  {
    text: "Basic Plan",
    price: "35$/month",
    image: "assets/3.jpg",
    content: [
      "No Personal Trainee",
      "2hr/day",
      "All Equipments",
      "No diet Plan",
    ],
    type: "Gym",
  },
  {
    text: "Online Training",
    price: "50$/month",
    image: "assets/18.jpg",
    content: ["No Personal Trainee", "2hr/day", "All Equipments", "Diet Plan"],
    type: "Gym",
  },
  {
    text: "Personal Trainee",
    price: "100$/month",
    image: "assets/19.jpg",
    content: ["Personal Trainee", "4hr/day", "All Equipments", "Diet Plan"],
    type: "Gym",
  },
  {
    text: "Optional",
    price: "150$/month",
    image: "assets/16.jpg",
    content: ["Pre Workout", "Post Workout", "Protein Chart", "Diet Chart"],
    type: "Supli",
  },
  {
    text: "Calisthenics",
    price: "150$/month",
    image: "assets/17.jpg",
    content: ["Weight Training", "Instructor", "Movements", "Diet Chart"],
    type: "Supli",
  },
];

const Services = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".slider", {
      xPercent: -100,
      duration: 2,
    });
    gsap.from(".mygrid", {
      opacity: 0,
      yPercent: 20,
      duration: 1,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".main-grid", start: "middle bottom" },
    });
    gsap.from(".supli", {
      opacity: 0,
      yPercent: 20,
      duration: 1,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".main", start: "middle bottom" },
    });
    gsap.from(".servicetext", {
      opacity: 0,
      duration: 1.5,
      ease: "Power2.easeOut",
      delay: 0.8,
    });
  }, []);
  return (
    <>
      <div className="slider absolute z-50 h-full w-full flex justify-center items-center " style={{background:"linear-gradient(to left, #2d3748, #1a202c)"}}>
        <img src={"assets/logo.svg"} />
      </div>
      <div className="w-full relative flex flex-col">
        <div className="w-full relative">
          <span className="servicetext absolute heading flex justify-center items-center text-center text-2xl md:text-4xl inset-0 text-white bg-gray-700 bg-opacity-50 h-full w-full">
            Services
          </span>

          <img
            src={"assets/15.jpg"}
            style={{ height: "70vh", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className=" bg-gray-800 w-full py-8  md:pt-12  pl-32 h-full ">
          <div className="h-full heading text-white text-4xl md:text-6xl border-white border-b-2 ">
            P<span className="text-4xl">rograms</span>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #2d3748 50%, #4a5568 50%)",
          }}
          className="flex flex-col items-center"
        >
          <div className="main-grid my-32  grid grid-cols-1 md:grid-cols-3 w-5/6 gap-20">
            {Data.map((item, index) =>
              item.type == "Gym" ? (
                <div className="mygrid bg-white flex flex-col border-white border-8 rounded">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      className="object-cover w-full transition-transform duration-500 transform hover:scale-110"
                      style={{ height: "300px" }}
                    />
                    <span className="absolute heading bg-gradient-to-t from-black to-transparent inset-x-0 bottom-0 px-4 text-gray-200 text-2xl md:text-3xl border-white border-b-2 justify-self-center">
                      {item.text}
                    </span>
                  </div>

                  <div className="w-full flex flex-col justify-center ">
                    <Button className="pointer-events-none">{item.price}</Button>
                    <div className="flex flex-col text-gray-700 font-light  justify-center w-full text-center">
                      <ul>
                        {item.content.map((it, ind) => (
                          <li
                            className={`p-4 text ${
                              ind % 2 == 0 ? "bg-gray-200" : "bg-gray-300"
                            }`}
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div
          className="main flex flex-col justify-between items-center md:flex-row md:justify-evenly md:items-center py-20 "
          style={{
            background: "linear-gradient(180deg,#a0aec0 50%,#f7fafc 50%)",
          }}
        >
          {Data.map((it, ind) =>
            it.type == "Supli" ? (
              <div className="supli bg-white flex flex-col border-white border-8 rounded">
                <div className="overflow-hidden relative">
                  <img
                    src={it.image}
                    className="object-fill transition-transform duration-500 transform hover:scale-110 "
                    style={{ height: "300px" }}
                  />
                  <span className="absolute heading bg-gradient-to-t px-4 from-black to-transparent inset-x-0 bottom-0 text-gray-200 text-2xl md:text-3xl border-white border-b-2 justify-self-center">
                    {it.text}
                  </span>
                </div>
                <div className="w-full flex flex-col justify-center ">
                  <Button className="pointer-events-none heading">{it.price}</Button>
                  <div className="flex flex-col text-gray-700 font-light  justify-center w-full text-center">
                    <ul>
                      {it.content.map((ite, inde) => (
                        <li
                          className={`p-4 text ${
                            inde % 2 == 0 ? "bg-gray-200" : "bg-gray-300"
                          }`}
                        >
                          {ite}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
