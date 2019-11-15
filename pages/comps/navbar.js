import styled from "styled-components";
import "../../public/css/navbar.scss"

const navbar = () => (
    <div className="motherDiv">
        <nav className="nav">
            <div className="leftSide">
                <div className="navLogo">Logo</div>
            </div>

            <div className="rightSide">
                <div className="navMenuDiv">
                    <a className="myStory">My Story</a>
                    <a className="work">Work</a>
                    <a className="contact">Contact</a>
                </div>
            </div>

        </nav>
    </div>
)

export default navbar;