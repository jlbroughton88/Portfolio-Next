import Link from "next/link";
import ListIcon from "./icons/listIcon"
import "../../public/css/navbar.scss"

const navbar = () => (
        <nav className="nav">
            <div className="leftSide">
                <Link href="/">
                    <a className="iconA">
                        <h3 className="navName">Jacob Broughton</h3>
                        <h3 className="navPara">Portfolio</h3>
                        </a>
                </Link>
            </div>

            <div className="rightSide">
                <div className="navMenuDiv">
                    <Link href="/story">
                        <a className="myStory">
                            <h3>My Story</h3>
                        </a>
                        </Link>
                </div>
            </div>

        </nav>
)

export default navbar;