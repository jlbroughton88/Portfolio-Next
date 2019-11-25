import Link from "next/link";
import ListIcon from "./icons/listIcon"
import "../../public/css/navbar.scss"

const navbar = () => (
        <nav className="nav">
            <div className="leftSide">
                <Link href="/">
                    <a className="iconA"></a>
                </Link>
            </div>

            <div className="rightSide">
                <div className="navMenuDiv">
                    <Link href="/story"><a className="myStory">My Story</a></Link>
                </div>
            </div>

        </nav>
)

export default navbar;