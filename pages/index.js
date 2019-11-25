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
                <div className="introSegment">
                    <p className="introP">Jacob Broughton</p>
                </div>
                <div className="workSegment"></div>
                <div className="skillsSegment"></div>
                <div className="letsTalkSegment"></div>
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