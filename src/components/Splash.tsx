import React from "react"
import "./splash.css"
import { Link } from "react-router-dom";

const Splash: React.FC = () => (
  <div>
    <Link to="/home" title="Beat the Monkey">
      <img src={require("../assets/monkey-pose.png")} className="className" alt="Beat the Monkey?"/>
    </Link>
  </div>
);

export default Splash