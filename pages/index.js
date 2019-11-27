import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import Link from "next/link";
import LinkedIn from "./comps/icons/linkedIn";
import Github from "./comps/icons/github";
import Email from "./comps/icons/email";
import ListIcon from "./comps/icons/listIcon";

const index = () => {

    return (

        <div className="motherDiv">
            <Navbar />
            <div className="mainDiv">
                <header className="introSegment">
                    <p className="introP">Jacob Broughton</p>
                </header>
                <div className="workSegment">
                    <div className="textDiv">
                        <div className="workHeadDiv">
                            <h1 className="workHead">Work</h1>
                        </div>
                        <div className="workParaDiv">
                            <p className="workPara">I'm a <strong>full-stack developer</strong> living in Matthews, NC. I'm <strong>passionate</strong> about creating a great experience for the user, and a smooth process behind the scenes.</p>
                        </div>
                    </div>

                    <div className="workDiv">
                        <div className="workSubDiv">
                            <div className="workExample">
                                <h1>Pokedex</h1>
                            </div>
                            <div className="workExample">
                                <h1>Heavenly Details</h1>
                            </div>
                            <div className="workExample">
                                <h1>New Age Oils</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skillsSegment">
                    <div className="skillsHeaderDiv">
                        <h2 className="skillsHeader">Skills</h2>
                    </div>
                    <div className="skillsDiv">
                        <div className="leftSideSkills">
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
                                        <li>MongoDB</li>
                                        <li>Mongoose</li>
                                        <li>ES6</li>
                                        <li>GIT</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rightSideSkills">
                            <div className="skillsHeadDiv">
                                <h3 className="skillsHead">Experience w/</h3>
                            </div>
                            <div className="skillsBlue">
                                <div className="skillsGrey">
                                    <ul>
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
                        </div>
                    </div>
                </div>

            </div>

            <div className="letsTalkSegment"></div>
            {/* <Footer /> */}


            <style jsx global>{`
            body{
                margin: 0;
                cursor: default;
            } 
        `}

            </style>
        </div>
    )
}

export default index;