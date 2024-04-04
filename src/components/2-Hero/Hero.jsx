import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import deveWalkAnimation from "../../../public/animation/Animation - 1708506116420.json";
import { MotionConfig, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="perant-avatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            src="https://new-portfolio-omega-gray.vercel.app/image.png"
            className="avatar"
            alt=""
          />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title">Hello,I'm Omar Abdalreahman</h1>
        <h2 className="title">Front-end Developer</h2>
        <p className="suptitle">
          With knowledge in web development and design, I offer the best
          projects resulting in quality work.
        </p>
        <div className="icons flex">
          <a
            className="icon icon-twitter twitter"
            href="https://www.facebook.com/omar.abdalrahman.330467/"
          ></a>
          <a
            className="icon  icon-instagram instagram"
            href="https://www.instagram.com/omar_abdalrahman5/"
          ></a>
          <a
            className="icon icon-github github"
            href="https://github.com/omarmode"
          ></a>
          <a
            className="icon icon-linkedin linkedin"
            href="https://www.linkedin.com/in/omar-abdalrahman-892382286/"
          ></a>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          loop={true}
          style={{ height: "400px" }}
          animationData={deveWalkAnimation}
        />{" "}
      </div>
    </section>
  );
}
