import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Tracking your job search and keeping it organized, all in
            one place shouldn't be ... a job. Spreadsheets are messy
            and let's be honest, pretty ineffective and laughably lame.
            {" "}
              Modernize your job search with <span>JobQue</span>.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunting" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
