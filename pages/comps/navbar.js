import Link from "next/link";
import ListIcon from "./icons/listIcon"
import "../../public/css/navbar.scss"

const navbar = () => (
        <nav className="nav">
            <div className="leftSide">
                <Link href="/">
                    <a className="iconA"><ListIcon className="navLogo"/></a>
                </Link>
            </div>

            <div className="rightSide">
                <div className="navMenuDiv">
                    <Link href="/story"><a className="myStory">My Story</a></Link>
                    <Link href="/work"><a className="work">Work</a></Link>
                    <Link href="/contact"><a className="contact">Contact</a></Link>
                </div>
            </div>

        </nav>
)

export default navbar;