import Link from "next/link";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/work.scss";

const Work = () => (
    <div className="motherDivWork">
        <Navbar/>
        <div className="mainDivWork">
            <div className="surroundingDivWork">
                <div className="headerDivWork">
                    <div className="insideHeaderDivWork">
                        <div className="headWork">
                            My Work
                        </div>
                    </div>
                </div>
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

export default Work;