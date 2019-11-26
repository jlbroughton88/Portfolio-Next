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
                            <div className="workExample">Work Example</div>
                            <div className="workExample">Work Example</div>
                            <div className="workExample">Work Example</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsSegment"></div>
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