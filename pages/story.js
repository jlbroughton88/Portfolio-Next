import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/story.scss"

const Story = () => (
    <div className="motherDivStory">
        <Navbar />
        <div className="mainStoryDiv">

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

export default Story;