import React from "react";
import "./Skills.css";
import Lottie from "lottie-react";
import Pc from "../../../public/Animation - 1712208514474.json";
function Skills() {
  return (
    <div>
      <h2 className="h-skills">
        My <span style={{ color: "#417AA1" }}>Skills</span>
      </h2>
      <div className="flex All-flex">
        <div className="Rightskills flex">
          <div className="flex">
            <img
              src="https://miro.medium.com/v2/resize:fit:435/1*fnNd53zHlT6ECXtaFYXxYg.png"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">Html</h4>
          </div>
          <div className="flex">
            <img
              src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">Css3</h4>
          </div>
          <div className="flex">
            <img
              src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-javascript-programming-language-code-coding-png-image_5288940.png"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">javascript</h4>
          </div>
          <div className="flex">
            <img
              src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-social-logo.png"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">bootstrap</h4>
          </div>
          <div className="flex">
            <img
              src="https://p7.hiclipart.com/preview/662/163/583/web-development-jquery-ui-javascript-computer-icons-jqlogo.jpg"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">JQuery</h4>
          </div>
          <div className="flex">
            <img
              src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
              className="img-skills"
              alt=""
            />
            <h4 className="h4-skills">React Js</h4>
          </div>
          <div className="flex">
            <img
              src="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"
              className="img-skills Redux"
              alt=""
            />
            <h4 className="h4-skills">Redux</h4>
          </div>
        </div>
        <div className="leftskills">
          <Lottie style={{ height: "400px" }} animationData={Pc} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
