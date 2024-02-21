import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [modal, setmodal] = useState(false);
  const [them, setthem] = useState(
    localStorage.getItem("currentmode" ?? "dark")
  );
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);
  return (
    <header className=" flex ">
      <button
        onClick={() => {
          setmodal(true);
        }}
        className="menu icon-th-menu-outline flex"
      ></button>

      <div> </div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="/main.jsx">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //send value to localstorg
          localStorage.setItem(
            "currentmode",
            them === "dark" ? "light" : "dark"
          );
          //get value from localstorg
          setthem(localStorage.getItem("currentmode"));
        }}
        className="mode flex"
      >
        {them === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {modal && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setmodal(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking </a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
