import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import Link from "next/link";
import LinkedIn from "./comps/icons/linkedIn";
import Github from "./comps/icons/github";
import Email from "./comps/icons/email";
import ListIcon from "./comps/icons/listIcon";
import DownArrow from "./comps/icons/downArrow"

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
                            <p className="workPara para">I'm a <strong>full-stack developer</strong> living in Matthews, NC. I'm <strong>passionate</strong> about creating a fluid experience for the user, and a smooth process behind the scenes.</p>
                        </div>
                    </div>

                    <div className="workDiv">
                        <div className="workSubDiv">
                            <div className="workExample">
                                <h1>Pokedex</h1>
                            </div>
                            <div className="workExample">
                                <h1>Heavenly</h1>
                            </div>
                            <div className="workExample">
                                <h1>New Age</h1>
                            </div>
                            <div className="workExample">
                                <h1>Example 4</h1>
                            </div>
                            <div className="workExample">
                                <h1>Example 5</h1>
                            </div>
                            <div className="workExample">
                                <h1>Example 6</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="skillsSegment">
                    <section className="skillsHeaderDiv textDiv">
                        <div className="headerDiv">
                            <h1 className="skillsHeader header">Skills</h1>
                        </div>
                        <div className="paraDiv">
                            <p className="skillsPara para">Each day brings new challenges, and every day that passes brings new lessons. I <strong>love learning</strong>, it keeps me going. Things get tough quite often, but theres <strong>always</strong> a way.</p>
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
                <section className="letsTalkSegment">
                    <div className="mainTalkDiv">
                        <div className="letsTalkLeft">
                            <h2 className="talkHead">Looking for a developer?</h2>
                        </div>
                        <div className="letsTalkRight">
                            <a href="mailto:jlbroughton@gmail.com?subject=Developer Portfolio Inquiry" className="talkCTA">Lets Talk.</a>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>




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