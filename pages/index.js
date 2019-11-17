import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import styled from "styled-components";

const index = () => (
    <div className="motherDiv">
        <Navbar />
        <div className="mainDiv">
            <div className="surroundingDiv">
                    <div className="introBox"> Intro Box </div>
                    <div className="imageBox">Image </div>
                    <div className="toolboxHeadBox">Toolbox Head</div>
                    <div className="comfortableBox">comfortable</div>
                    <div className="experienceBox">experience</div>
                    <div className="toolsBox">tools</div>
                    <div className="storyBox">Story</div>
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