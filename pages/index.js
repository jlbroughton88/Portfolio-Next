import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import styled from "styled-components";

const index = () => (
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
                            <button className="cta">Get In Touch</button>
                        </div>
                    </div>


                    <div className="imageBox">Image</div>


                    <div className="toolboxHeadBox">
                        <div className="toolheadDiv">
                            <div className="toolhead">My Toolbox</div>
                        </div>
                    </div>


                    <div className="comfortableBox">
                        <div className="boxHeadDiv">Most Comfortable</div>
                    </div>


                    <div className="experienceBox">
                        <div className="boxHeadDiv"> Experience With</div>
                    </div>


                    <div className="toolsBox">
                        <div className="boxHeadDiv">Tools</div>
                    </div>


                    <div className="storyBox">
                        <div className="boxHeadDiv">A Brief Overview</div>
                    </div>


                    <div className="socialBox">social</div>


            </div> 
        </div>
       <Footer/>





        <style jsx global>{`
            body{
                margin: 0;
            } 
        `}
        </style>
    </div>
)

export default index;