import Link from "next/link";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/work.scss";

const Work = () => (
    <div className="motherDivWork">
        <Navbar />
        <div className="mainDivWork">
            <div className="surroundingDivWork">
                <div className="headerDivWork">
                    <div className="insideHeaderDivWork">
                        <h2 className="headWork">
                            My Work
                        </h2>
                    </div>
                </div>

                <div className="workExampleWindow">
                    <div className="nameDivSec">
                        <div className="nameDiv">
                            <h2 className="nameHead">Name</h2>
                        </div>
                    </div>
                    <div className="descDivSec">
                        <div className="descHead">Project Description</div>
                        <div className="descDiv">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</div>
                    </div>
                    <div className="takeawayDivSec">
                        <div className="takeawayHead">Take away</div>
                        <div className="takeawayDiv">sadfasdfasdf</div>
                    </div>
                    <div className="techDivSec">
                        <div className="techHead">Tech Used</div>
                        <div className="techDiv">asdfasdfasdfadsfasf</div>
                    </div>
                </div>

            </div>
        </div>
        <Footer />

        <style jsx global>{`
            body{
                margin: 0;
            } 
        `}
        </style>
    </div>
)

export default Work;