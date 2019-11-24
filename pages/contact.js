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
                    <h2 className="contactHead">Contact Me</h2>
                </div>
            </div>

            <div className="surroundingDivContact">
                <div className="infoContainer">
                    <div className="infoDiv">
                        <div className="contactInfoSide">
                            <div className="contactInfoDiv">
                                <p id="nameP"><strong>Jacob Broughton</strong></p>
                                <p id="emailP">Jlbroughtondev@gmail.com</p>
                                <p id="numberP">(704)770-8371</p>
                                <p id="addressP">Matthews, NC</p>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <form className="contactForm">
                        <input placeholder="Name" type="text" id="name"></input>
                        <input placeholder="Company" type="text" id="company"></input>
                        <input placeholder="Email" type="email" id="email"></input>
                        <input placeholder="Phone Number" type="text" id="phoneNum"></input>
                        <textarea placeholder="Message" type="text" id="message"></textarea>
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