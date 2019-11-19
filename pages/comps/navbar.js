import styled from "styled-components";
import Link from "next/link";
import Logo from "./logo"
import Logo1 from "../../public/images/logo1.png"
import "../../public/css/navbar.scss"

const navbar = () => (
    <div className="motherDiv">
        <nav className="nav">
            <div className="leftSide">
                <Link href="/">
                <a><img src={Logo1}/></a>
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
    </div>
)

export default navbar;