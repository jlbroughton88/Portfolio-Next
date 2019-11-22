import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/story.scss"

const Story = () => (
    <div className="motherDivStory">
        <Navbar />
        <div className="mainStoryDiv">

            <div className="headContainerWork">
                <div className="headerDiv">
                    <div className="insideHeaderDiv">
                        <h2 className="name">My Story</h2>
                    </div>
                </div>
            </div>

            <div className="surroundingStoryDiv">
                {/* 1 */}
                <div className="storyDiv">
                    <div className="insideStoryDiv">
                        <p className="storyP">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum
                            id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis.
                        </p>
                    </div>
                </div>
                <div className="imageDiv">
                    <div className="imageInside">Image 2</div>
                </div>


                {/* 2 */}
                <div className="storyDiv2">
                    <div className="insideStoryDiv2">
                        <p className="storyP2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum
                            id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis.
                        </p>
                    </div>
                </div>
                <div className="imageDiv2">
                    <div className="imageInside2">Image 2</div>
                </div>

                {/* 3 */}
                <div className="storyDiv3">
                    <div className="insideStoryDiv3">
                        <p className="storyP3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum
                            id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis.
                        </p>
                    </div>
                </div>
                <div className="imageDiv3">
                    <div className="imageInside3">Image 2</div>
                </div>
                <div className="imageDiv4">
                    <div className="imageInside4">Image 4</div>
                </div>
            </div>
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