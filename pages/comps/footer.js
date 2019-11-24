import Link from "next/link";
import "../../public/css/footer.scss";
import LinkedinFooter from "./icons/linkedinFooter";
import InstagramFooter from "./icons/instagramFooter";
import GithubFooter from "./icons/githubFooter"

const Footer = () => (
    <footer className="motherDivFooter">
        <div className="topDiv">
            <div className="subTopDiv">
                <div className="socialsDivFooter">
                    <div className="linkedInDivFooter">
                        <LinkedinFooter/>
                    </div>
                    <div className="githubDivFooter">
                        <GithubFooter/>
                    </div>
                    <div className="instagramDivFooter">
                        <InstagramFooter/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="bottomDiv">
            <div className="subBottomDiv">
                <div className="contactDivContainer">
                    <div className="contactDivFooter">
                        <p id="nameFooter"><strong>Jacob Broughton</strong></p>
                        <p id="emailFooter">Jbroughtondev@gmail.com</p>
                        <p id="numberFooter">(704)770-8371</p>
                        <p id="cityFooter">Matthews, NC</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
)

export default Footer;