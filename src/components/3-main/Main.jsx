import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myproject = [
  {
    projectTitle: "AGENCY",
    category: "css",
    imgpath: "./1.jpg",
    http1: "https://omarabdalrahman.github.io/template-1/template1.html",
    des: "The first project I created and designed using...Html && css",
  },
  {
    projectTitle: "Shopping Cart",
    category: "js",
    imgpath: "./4.jpeg",
    http1: "https://omarmode.github.io/shoppingCart--omar/index1.html",
    des: "This site was designed using JavaScript and is a shopping site that displays products",
  },
  {
    projectTitle: "Arabic site",
    category: "bootstrap",
    imgpath: "./5.jpeg",
    http1: "https://omarmode.github.io/arabic-bootstrap/",
    des: "It is an architectural building site in the Arabic language designed using the Html && css && BootStrab ",
  },
  {
    projectTitle: "old portofolio",
    category: "bootstrap",
    imgpath: "./portofoilo.png",
    http1: "https://omarmode.github.io/portfolio-website/",
    des: "This website was designed using HTML && CSS && BootStrap, and it displays my CV",
  },
  {
    projectTitle: "Movies app",
    category: "react",
    imgpath: "./movie.jpg",
    http1: "https://movies-project-roan.vercel.app/",
    des: "The website was designed using Html && css &&Bootstrap &&React,This site displays the API for movies, their details, and ratings",
  },
  {
    projectTitle: "simple-game",
    category: "js",
    imgpath: "./3.jpg",
    http1: "https://omarmode.github.io/simple-game/",
    des: "A simple game designed using JavaScript, which involves Naruto beating Sasaki and vice versa",
  },
  {
    projectTitle: "simple-Dates-Reminder",
    category: "react",
    imgpath: "./data.jpg",
    http1: "https://omarmode.github.io/Dates-Reminder/",
    des: "An appointments program that displays someone's appointments. It is a simple design using React",
  },
  {
    projectTitle: "Menu Restaurant",
    category: "react",
    imgpath: "./menu.jpg",
    http1: "https://omarmode.github.io/MenuProjectByReact/",
    des: "It is a menu in a new restaurant that was designed using React",
  },
  {
    projectTitle: " simple-E-commerce",
    category: "react",
    imgpath: "./e-commerce.jpg",
    http1: "https://e-commerce-app-virid.vercel.app/",
    des: "It is a simple e-commerce website that exposes the API for different products and is built using React",
  },
];

export default function Main() {
  const [buttn, setbuttn] = useState("all");
  const [arr, setarr] = useState(myproject);
  return (
    <main className="flex" id="#project">
      <section className="section-left  flex">
        <button
          onClick={() => {
            setarr(myproject);
            setbuttn("all");
          }}
          className={buttn === "all" ? "active" : null}
        >
          all Projects
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "css";
            });
            setarr(newarr);
            setbuttn("css");
          }}
          className={buttn === "css" ? "active" : null}
        >
          html&&css
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "js";
            });
            setarr(newarr);
            setbuttn("js");
          }}
          className={buttn === "js" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "bootstrap";
            });
            setarr(newarr);
            setbuttn("bootstrap");
          }}
          className={buttn === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "react";
            });
            setarr(newarr);
            setbuttn("react");
          }}
          className={buttn === "react" ? "active" : null}
        >
          react
        </button>
      </section>
      <section className="section-right  flex ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 150 }}
                key={item.imgpath}
                className="card"
              >
                <img
                  src={item.imgpath}
                  width={240}
                  style={{ borderRadius: "10px", height: "170px" }}
                  alt=""
                />
                <div className="box" style={{ width: "240px" }}>
                  <h2 className="title">{item.projectTitle}</h2>
                  <p className="suptitle">{item.des}</p>
                  <div className="flex">
                    <a className="icon-link" href={item.http1}></a>
                    <a className="link-a " href={item.http1}>
                      more
                      <span
                        className="icon-arrow-right"
                        style={{ alignSelf: "end" }}
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
