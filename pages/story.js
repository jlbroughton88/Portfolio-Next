import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/story.scss";

const Story = () => (
    <div className="motherDivStory">
        <Navbar />
        <main className="mainStoryDiv">
            <section className="storySection">
                <h1>Hi! Thanks for coming to check out more about me.</h1>
                <span>
                    Lorem ispansum dolor sit amet, consectetur adipiscing elit. Sed et mattis eros, eget ornare velit. Aenean gravida purus dui, ac dictum sapien dapibus ac. Phasellus at justo id orci ultrices euismod sed id velit. Quisque consectetur eros in risus ultrices, ac cursus ipsum facilisis. Nulla commodo nunc lectus, a convallis diam viverra vel. Maecenas rutrum leo at ante finibus, nec facilisis libero euismod. Aenean tempor orci et ultrices efficitur. Etiam luctus, leo a ullamcorper rhoncus, magna risus tincidunt leo, elementum mollis felis diam a massa. Etiam dui ipsum, congue quis tellus quis, lobortis ullamcorper augue. Ut sit amet ligula in erat malesuada scelerisque vitae et massa. Morbi sed rutrum ipsum. Ut tortor tellus, dictum eget ultricies sit amet, convallis sed risus. Nunc venenatis mattis lectus sit amet viverra. Cras sed sollicitudin libero. Integer semper dapibus nisi, ultricies pellentesque quam blandit mattis.
                    Integer eget metus ac ex laoreet fermentum pulvinar eu risus. Nunc viverra leo id dui ullamcorper luctus. Nunc at eleifend sapien. Integer dictum mauris nibh, vitae vestibulum ipsum consectetur vitae. Mauris ullamcorper ante vita
                </span>
            </section>
        </main>
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