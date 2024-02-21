import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">uses</a>
        </li>
      </ul>
      <p>.All rights reserved.</p>
    </footer>
  );
}
