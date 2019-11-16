import "../public/css/index.scss";
import Navbar from "./comps/navbar";
import styled from "styled-components";

const index = () => (
    <div className="motherDiv">
        <Navbar />
        <div className="mainDiv">
            <div className="surroundingDiv">
                <div className="introBox">
                    Intro Box
                    {/* <div className="introBoxSmall">
                        intro box
                    </div>

                    <div className="imageBoxSmall">
                        included
                    </div> */}
                </div>
                <div className="imageBox">
                    Image
            </div>
            </div>

        </div>





        <style jsx global>{`
            body{
                margin: 0;
            } 
        `}
        </style>
    </div>
)

export default index;