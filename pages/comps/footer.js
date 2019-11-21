import Link from "next/link";
import "../../public/css/footer.scss"

const Footer = () => (
    <footer className="motherDivFooter">

        <div className="name">
            <Link href="/">
                <a className="nameDiv">
                    <p className="nameP">Jacob Broughton</p>
                    </a>
            </Link>
        </div>

        <div className="storyDiv">
            <Link href="/story">
                <a className="story">
                    <p className="storyP">My Story</p>
                    </a>
            </Link>

        </div>
        <div className="contactDiv">
            <Link href="/contact">
                <a className="contact">
                    <p className="contactP">Contact</p>
                    </a>
            </Link>
        </div>
        <div className="workDiv">

            <Link href="/work">
                <a className="work">
                    <p className="workP">Work</p>
                    </a>
                </Link>

        </div>
    </footer>
)

export default Footer;