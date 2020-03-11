import Link from "next/link";
import "../../public/css/footer.scss";
import LinkedinFooter from "./icons/linkedinFooter";
import InstagramFooter from "./icons/instagramFooter";
import GithubFooter from "./icons/githubFooter"

const Footer = () => (
    <footer className="motherDivFooter">
        <section className="topDiv">
            <div className="subTopDiv">
                <section className="socialsDivFooter">
                    <a href="https://www.linkedin.com/in/jacob-broughton-637189164/" className="linkedInDivFooter">
                        <LinkedinFooter/>
                    </a>
                    <a href="https://github.com/jlbroughton88" className="githubDivFooter">
                        <GithubFooter/>
                    </a>
                    <a href="https://www.instagram.com/jakelbroughton.dev/" className="instagramDivFooter">
                        <InstagramFooter/>
                    </a>
                </section>
            </div>
        </section>
        <section className="bottomDiv">
            <div className="subBottomDiv">
                <div className="contactDivContainer">
                    <section className="contactDivFooter">
                        <p id="nameFooter"><strong>Jacob Broughton</strong></p>
                        <p id="emailFooter">Jbroughtondev@gmail.com</p>
                        <p id="numberFooter">(704)770-8371</p>
                        <p id="cityFooter">Matthews, NC</p>
                    </section>

                </div>
            </div>
        </section>
    </footer>
)

export default Footer;