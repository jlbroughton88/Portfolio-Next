import Link from "next/link";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import LinkedIn from "./comps/icons/linkedIn";
import Github from "./comps/icons/github";
import Email from "./comps/icons/email";
import "../public/css/contact.scss";

const Contact = () => (
    <div className="contactMotherDiv">
        <Navbar />
        <div className="mainDivContact">
            <div className="headContainer">
                <div className="insideHeadDiv">
                    <h2>Contact Me</h2>
                </div>
            </div>

            <div className="surroundingDivContact">
                <div className="infoContainer">
                    <div className="infoHeadDiv">
                        <div className="infoHead">
                            <h3>Jacob Broughton</h3>
                        </div>
                    </div>
                    <div className="infoDiv">
                        <div className="contactInfoSide">
                            <div className="contactInfoDiv">
                                <p>(704)770-8371</p>
                                <p>Jlbroughtondev@gmail.com</p>
                                <p>Matthews, NC 28105</p>
                            </div>
                        </div>
                        <div className="socialInfoSide">
                            <div className="socialBox">
                                <div className="socialThird">
                                    <a href="https://www.linkedin.com/in/jacob-broughton-637189164/" className="iconA">
                                        <LinkedIn className="linkedinSVG" />
                                    </a>
                                </div>
                                <div className="socialThird">
                                    <a href="https://github.com/jlbroughton88" className="iconA">
                                        <Github className="githubSVG" />
                                    </a>
                                </div>
                                <div className="socialThird">
                                    <Link href="/contact">
                                        <a className="iconA">
                                            <Email className="emailSVG" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <form className="contactForm">
                        <input placeholder="Name" id="name"></input>
                        <input placeholder="Company" id="company"></input>
                        <input placeholder="Email" id="email"></input>
                        <input placeholder="Phone Number" id="phoneNum"></input>
                        <textarea placeholder="Message" id="message"></textarea>
                        <button id="sendBtn" type="submit">Send</button>
                    </form>
                </div>
            </div>

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

export default Contact;