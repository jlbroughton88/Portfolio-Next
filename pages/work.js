import Link from "next/link";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/work.scss";

const Work = () => (
    <div className="motherDiv">
        <Navbar/>
        <div className="mainDiv">
            Work
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

export default Work;