import Link from "next/link";
import "../../public/css/footer.scss"

const Footer = () => (
    <footer className="motherDivFooter">
        <div className="nameDiv">
            <div className="name">
                <Link href="/"><a>Jacob Broughton</a></Link>
            </div>
        </div>
        <div className="storyDiv">
            <div className="story">
                <Link href="/story"><a>My Story</a></Link>
            </div>
        </div>
        <div className="contactDiv">
            <div className="contact">
                <Link href="/contact"><a>Contact</a></Link>
            </div>
        </div>
        <div className="workDiv">
            <div className="work">
                <Link href="/work"><a>Work</a></Link>
            </div>
        </div>
    </footer>
)

export default Footer;