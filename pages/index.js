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
                <div className="surroundingDiv">
                    <div className="introBox">
                        <div className="introContainer">
                            <h1 className="introHead">Jacob Broughton</h1>
                            <p className="introPara">Hi, i'm a Full Stack Web Developer, specializing in the MERN Stack.
                                Take a look around and feel free to get in touch with me.
                            </p>
                            <Link href="/contact"><a className="cta">Get In Touch</a></Link>
                        </div>
                    </div>


                    <div className="imageBox">
                        <ListIcon />
                    </div>


                    <div className="toolboxHeadBox">
                        <div className="toolheadDiv">
                            <div className="toolhead">
                                <h3 className="toolh3">My Toolbox</h3>
                            </div>
                        </div>
                    </div>


                    <div className="comfortableBox">
                        <div className="boxHeadDiv">Most Comfortable</div>
                        <ul className="comfortableList">
                            <li>HTML</li>
                            <li>CSS / SCSS</li>
                            <li>CSS Grid / Flexbox</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>NextJS</li>
                            <li>ES6</li>
                            <li>Heroku</li>
                        </ul>
                    </div>


                    <div className="experienceBox">
                        <div className="boxHeadDiv"> Experience With</div>
                        <ul className="experienceList">
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>Zeit Now</li>
                            <li>Python</li>
                            <li>Arduino C</li>
                            <li>MySQL</li>
                        </ul>
                    </div>


                    <div className="toolsBox">
                        <div className="boxHeadDiv">Tools</div>
                        <ul className="toolList">
                            <li>Git VC</li>
                            <li>Github</li>
                            <li>Macbook Pro i7</li>
                            <li>MacOS</li>
                            <li>Affinity Designer</li>
                        </ul>
                    </div>


                    <div className="storyBox">
                        <div className="boxHeadDiv">A Brief Overview</div>
                    </div>


                    <div className="socialBox">
                        <div className="socialThird">
                            <a href="https://www.linkedin.com/in/jacob-broughton-637189164/" className="iconA">
                                <LinkedIn className="linkedinSVG" />
                            </a>
                        </div>
                        <div className="socialThird">
                            <a href="https://github.com/jlbroughton88" className="iconA">
                                <Github className="githubSVG" />
                            </a>
                        </div>
                        <div className="socialThird">
                            <Link href="/contact">
                                <a className="iconA">
                                    <Email className="emailSVG" />
                                </a>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />


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