import Link from "next/link";
import "../../public/css/footer.scss"

const Footer = () => (
    <footer className="motherDivFooter">
        <div className="nameDiv">
            <div className="name">
                <Link href="/">Jacob Broughton</Link>
            </div>
        </div>
        <div className="storyDiv">
            <div className="story">
                <Link href="/story">My Story</Link>
            </div>
        </div>
        <div className="contactDiv">
            <div className="contact">
                <Link href="/contact">Contact</Link>
            </div>
        </div>
        <div className="workDiv">
            <div className="work">
                <Link href="/work">Work</Link>
            </div>
        </div>
    </footer>
)

export default Footer;