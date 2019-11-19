import Link from "next/link";
import "../../public/css/footer.scss"

const Footer = () => (
    <footer className="motherDivFooter">

        <div className="name">
            <Link href="/">
                <a className="nameDiv">Jacob Broughton</a>
            </Link>
        </div>

        <div className="storyDiv">
            <Link href="/story">
                <a className="story">My Story</a>
            </Link>

        </div>
        <div className="contactDiv">
            <Link href="/contact">
                <a className="contact">Contact</a>
            </Link>
        </div>
        <div className="workDiv">

            <Link href="/work">
                <a className="work">Work</a
                ></Link>

        </div>
    </footer>
)

export default Footer;