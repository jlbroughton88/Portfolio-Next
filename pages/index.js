import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import Link from "next/link";
import LinkedIn from "./comps/icons/linkedIn";
import Github from "./comps/icons/github";
import Email from "./comps/icons/email";
import ListIcon from "./comps/icons/listIcon";
import MeWithGen from "../public/images/genesis4.jpg";
import DownArrow from "./comps/icons/downArrow";
import LetsTalk from "./comps/letsTalk";

const index = () => {
  return (
    <div className="motherDiv">
      <Navbar />
      <main className="mainDiv">
        <header className="introSegment">
          <p className="introP">Jacob Broughton</p>
          <DownArrow className="downArrowSVG" />
        </header>
        <section className="workSegment">
          <div className="workHeaderDiv textDiv">
            <div className="headerDiv">
              <h1 className="workHeader header">Work</h1>
            </div>
            <div className="paraDiv">
              <p className="workPara para">
                I'm a <strong>full-stack developer</strong> living in Matthews,
                NC. I'm <strong>passionate</strong> about creating a fluid
                experience for the user, and a smooth process behind the scenes.
              </p>
            </div>
          </div>

          <p className="workNotice">
            &nbsp;&nbsp;Some of these apps / sites are hosted via Heroku's basic
            plan, so you may experience a slow initial load time due to their
            "sleeping dyno" functionality on down-times.
          </p>
          <div className="workDiv">
            <div className="workSubDiv">
            <a
                href="https://h3-staffing.now.sh/"
                className="workExample"
              >
                <h1>H3 Staffing</h1>
              </a>
              <a
                href="https://www.broughtondetailing.com/"
                className="workExample"
              >
                <h1>Broughton Detailing</h1>
              </a>

              <a
                href="https://bug-tracker-jb.herokuapp.com/"
                className="workExample"
              >
                <h1>Bug Tracker</h1>
              </a>

              <a href="https://pokedex-beta.now.sh/" className="workExample">
                <h1>Pokedex</h1>
              </a>

              <a
                href="https://heavenly-details.herokuapp.com/"
                className="workExample"
              >
                <h1>Heavenly Details</h1>
              </a>

              <a
                href="https://new-age-oils.herokuapp.com/"
                className="workExample"
              >
                <h1>New Age Oils</h1>
              </a>

              <a
                href="https://crud-car-list.herokuapp.com/"
                className="workExample"
              >
                <h1>CRUD Car List</h1>
              </a>

              <a href="https://www.jlbroughton.com" className="workExample">
                <h1>Portfolio (V2)</h1>
              </a>

              <a
                href="https://jbroughton-portfolio.herokuapp.com/"
                className="workExample"
              >
                <h1>Portfolio (V1)</h1>
              </a>
            </div>
          </div>
        </section>
        <section className="skillsSegment">
          <section className="skillsHeaderDiv textDiv">
            <div className="headerDiv">
              <h1 className="skillsHeader header">Skills</h1>
            </div>
            <div className="paraDiv">
              <p className="aboutPara para">
                Each day brings new challenges, and every day that passes brings
                new lessons. I <strong>love learning</strong>, it keeps me
                going. Things get tough quite often, but theres{" "}
                <strong>always</strong> a way.
              </p>
            </div>
          </section>
          <div className="skillsDiv">
            <section className="leftSideSkills">
              <div className="skillsHeadDiv">
                <h3 className="skillsHead">Proficient w/</h3>
              </div>
              <div className="skillsBlue">
                <div className="skillsGrey">
                  <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>Grid/Flexbox</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>ExpressJS</li>
                    <li>Node.js</li>
                    <li>MySql</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>ES6</li>
                    <li>Handlebars</li>
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="rightSideSkills">
              <div className="skillsHeadDiv">
                <h3 className="skillsHead">Experience w/</h3>
              </div>
              <div className="skillsBlue">
                <div className="skillsGrey">
                  <ul>
                    <li>C#</li>
                    <li>JQuery</li>
                    <li>Python</li>
                    <li>MySql</li>
                    <li>Zeit Now</li>
                    <li>Arduino C</li>
                    <li>Next JS</li>
                    <li>Materialize</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="aboutSegment">
          {/* <div className="aboutHeaderDiv textDiv">
            <div className="headerDiv">
              <h1 className="aboutHead header">About</h1>
            </div>
            <div className="paraDiv">
              <p className="aboutPara para">
                As cliche as it sounds, coding has really become a big part of my life. I wake up each day at 6 and get straight to whichever project i'm working on. I ge
              </p>
            </div> */}
          {/* </div> */}
          <div className="surroundDiv">
            <img className="imageDiv" src={MeWithGen} alt="Me" />
          </div>
        </section>
        <LetsTalk />
        <Footer />
      </main>

      <style jsx global>
        {`
          body {
            margin: 0;
            cursor: default;
          }
        `}
      </style>
    </div>
  );
};

export default index;
