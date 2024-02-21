import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import "./contact.css";
import React from "react";
import doneWalkAnimation from "../../../public/animation/Animation - 1708504469023.json";
import emailWalkAnimation from "../../../public/animation/Animation - 1708505630209.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("meqygbao");
  if (state.succeeded) {
    return (
      <p className="flex" style={{ color: "var(--blue)" }}>
        Your Message has been sent Successfully!
        <Lottie
          loop={false}
          style={{ height: "55px" }}
          animationData={doneWalkAnimation}
        />
      </p>
    );
  }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Us
      </h1>
      <p className="suptitle">
        contact us for more information and notified when i piblish somthing new{" "}
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="Message">Your Message:</label>
            <textarea required name="message" id="Message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="supmit">
            submit
          </button>
        </form>
        <div className="  animation">
          <Lottie
            loop={true}
            style={{ height: "300px" }}
            animationData={emailWalkAnimation}
          />
        </div>
      </div>
    </section>
  );
}
