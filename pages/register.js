import { useFormik } from "formik";
import gsap from "gsap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Data } from "./services";
import emailjs from "emailjs-com"
import{ init } from 'emailjs-com';

export const Button = styled.button`
  display: inline-block;
  padding: 0.6em 2em;
  border: 0.15em solid #4a5568;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: #4a5568;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #718096;
    border: 0.15em solid white;
  }
  @media all and (max-width: 30em) {
      display: block;
      margin: 0.4em auto;
  }
`;
const Span = styled.div`
  font-size: 90px;
  letter-spacing: 20px;
  margin: 4rem 25rem;
  z-index: 20;
  color: white;
  @media (max-width: 900px) {
    color: gray;
    font-size: 40px;
    letter-spacing: 8px;
    margin: 0rem 3rem;
  }
  @media (min-width: 901px) and (max-width: 1280px) {
    color: white;
    font-size: 40px;
    letter-spacing: 8px;
    margin: 2rem 15rem;
  }
`;

init("user_b59jMMPfVy1nb9nUBzVa1");

const Register = () => {
  const [tick, setTick] = useState(false);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: { name: "", email: "", plan: "", gender: "" },
    onSubmit: (values, actions) => {
      emailjs.send("service_880ym18","template_htb765f",values,"user_b59jMMPfVy1nb9nUBzVa1")
      .then((result) => {
        console.log(result.text);
        setTick(true)
    }, (error) => {
        console.log(error.text);
    });

    },
    validationSchema: yup.object({
      name: yup.string().required("Please provide your name"),
      gender: yup.string().required("Specify your gender"),
      email: yup.string().email().required("Please provide an email"),
      plan: yup.string().required("Please Choose a plan"),
    }),
  });
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".slider", {
      xPercent: -100,
      duration: 2,
    });
    gsap.from(".register", {
      opacity: 0,
      duration: 1.2,
      ease: "Power2.easeIn",
      delay: 1,
      scrollTrigger: { trigger: ".register" },
    });
    gsap.from(".text", {
      opacity: 0,
      duration: 1.2,
      yPercent: 120,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".main", start: "middle bottom", scrub: 1 },
    });
    gsap.from(".image", {
      xPercent: -20,
      opacity: 0,
      duration: 1.2,
      ease: "Power2.easeOut",
      scrollTrigger: { trigger: ".main", start: "bottom bottom", scrub: 1 },
    });
  }, []);
  return (
    <>
      <div className="slider absolute z-50 h-full w-full flex justify-center items-center " style={{background:"linear-gradient(to left, #2d3748, #1a202c)"}}>
        <img src={"assets/logo.svg"} />
      </div>
      <div className=" text-white">
        <div className="w-full relative heading">
          <span className="absolute flex justify-center items-center text-center text-2xl md:text-4xl inset-0 text-white bg-gray-700 bg-opacity-50 h-full w-full">
            Register
          </span>

          <img
            src={"assets/23.jpg"}
            style={{ height: "70vh", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className=" bg-gray-600 w-full py-8  md:py-20 pl-10 md:pl-32 ">
          <div className="register heading h-full text-gray-800 text-4xl md:text-6xl border-gray-800 border-b-2 ">
            G
            <span className="md:text-4xl text-2xl">et ready for Toughness</span>
          </div>
        </div>
        <div className="main bg-gray-400 w-full " style={{ height: "200px" }} />
        <div className="  w-full p-4 flex flex-col lg:flex-row justify-between relative md:p-20 ">
          <div className="h-full w-full flex flex-col md:flex-row bg-gray-300">
            <div className=" w-full h-1/2 md:w-1/2">
              <img
                src={"assets/11.jpg"}
                className="image w-full object-fill h-full"
              />
            </div>
            <Span className="relative heading md:absolute">RESILIENCE</Span>
            <div className="text w-full flex flex-col items-center justify-evenly text-justify p-10 md:w-1/2">
              <div className="w-full flex flex-col justify-center items-center">
                <span className="heading text-4xl text-gray-600">
                  <span className="text-6xl">W</span>hat's
                  <span className="text-gray-500">Different?</span>
                </span>
              </div>
              <span className="text text-gray-800 text-xl font-light ">
                <span className=" text-gray-900 text-4xl">R</span>
                esilience isn't just a gym its an environment to bring out best
                in you. Our mission is to empower our users and provide them
                with best trainee out there with new equipments.We are the group
                of best trainee with many years of experience and able to change
                an average human to totally a new being.We do this by helping
                you find the most suitable equipment for your home gym, studio
                or commercial gym, keeping your budget, lifestyle and fitness
                goals in mind. We stock a wide range of gym equipment, with
                strength equipment, cardio, cross training and so much more. Get
                yourself Registered for a harder environment.
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full "
          style={{ height: "60vh" }}
        >
          <div className="bg-gray-500 h-full w-full md:w-1/4"></div>
          <div
            className="h-full w-full md:w-2/4 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #718096 50%,  #a0aec0 50%)",
            }}
          >
            <div className="bg-gray-700 bg-opacity-25 p-8 md:p-32">
              {tick ? (
                <div className="text flex flex-col justify-center items-center">
                  <img
                    src={"assets/tick.svg"}
                    style={{ height: "80px" }}
                  />
                  <span className="text-5xl text-gray-900">Thank you </span>
                  <span className="text-xl text-gray-700">
                    Your response has been recorded.
                  </span>
                </div>
              ) : (
                <form
                  className="flex text flex-col justify-center items-center"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col justify-center items-center">
                    <input
                      className={` rounded border border-gray-400 focus:outline-none focus:border-gray-500 text-gray-700  px-4 py-2 ${
                        errors.name ? "mb-0" : "mb-6"
                      }`}
                      value={values.name}
                      onChange={handleChange("name")}
                      onBlur={handleBlur("name")}
                      placeholder="Name"
                      name="name"
                      type="text"
                    />
                    {touched && errors && <div>{errors.name}</div>}
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <select
                      value={values.gender}
                      onChange={handleChange("gender")}
                      onBlur={handleBlur("gender")}
                      placeholder="Select"
                      name="gender"
                      className={`bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-500 text-gray-700  w-full px-4 py-2 ${
                        errors.gender ? "mb-0" : "mb-6"
                      }`}
                    >
                      <option className="" value="Select">
                        Select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {touched && errors && <div>{errors.gender}</div>}
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <input
                      className={` rounded border border-gray-400 focus:outline-none focus:border-gray-500  text-gray-700  px-4 py-2 ${
                        errors.email ? "mb-0" : "mb-6"
                      }`}
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Email"
                      type="email"
                      name="email"
                    />
                    {touched && errors && <div>{errors.email}</div>}
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <select
                      value={values.plan}
                      onChange={handleChange("plan")}
                      onBlur={handleBlur("plan")}
                      placeholder="Select"
                      name="plan"
                      className={`bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-500 text-gray-700  w-full px-4 py-2 ${
                        errors.plan ? "mb-0" : "mb-6"
                      }`}
                    >
                      <option className="" value="Select">
                        Select
                      </option>
                      {Data.map((item, index) => (
                        <option
                          className="px-4 py-2 "
                          value={item.text}
                          key={index}
                        >
                          {item.text}
                        </option>
                      ))}
                    </select>
                    {touched && errors && <div>{errors.plan}</div>}
                  </div>
                  <Button type="submit" >Register</Button>
                </form>
              )}
            </div>
          </div>
          <div className="bg-gray-800 h-full w-full md:w-1/4"></div>
        </div>
        <div
          className="bg-gray-400 w-full mymain"
          style={{ height: "200px" }}
        />
      </div>
    </>
  );
};

export default Register;
