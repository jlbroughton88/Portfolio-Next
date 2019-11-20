import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import "../public/css/story.scss"

const Story = () => (
    <div>
        <Navbar />
        <div className="mainDiv">
            <div className="headerDiv">
                <div className="insideHeaderDiv">
                    <h2 className="name"> Jacob Broughton</h2>
                </div>
            </div>
            <div className="storyDiv">
                <div className="insideStoryDiv">
                    <p className="storyP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum
                        id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis. Suspendisse et sapien fermentum lorem cursus finibus.
                        Proin ut tempor odio, non tempus orci. Cras rhoncus imperdiet est, elementum posuere sapien viverra et. Proin sed sapien tortor. Morbi eget sapien vitae tellus tincidunt porta id id nunc. Nulla ligula sapien, ornare vitae lacinia id, gravida vel libero. Aenean non purus viverra, rutrum turpis sit amet, ultricies diam. Donec viverra tempus enim in scelerisque.
                        Nulla dapibus eget ligula et blandit. Vestibulum sagittis eros sit amet orci tempus maximus. Integer ut viverra purus. Nulla facilisi. Maecenas scelerisque libero tellus, at lobortis nibh elementum vel. Suspendisse dignissim, mauris et varius luctus, magna quam laoreet nulla, eget sollicitudin orci libero a eros. Praesent risus tellus, vulputate et malesuada
                        quis, porttitor ac ligula. Aliquam eu maximus quam. Suspendisse eget euismod purus, at euismod ante. Curabitur elementum eros purus, gravida posuere tellus interdum nec. Vivamus posuere placerat libero. Duis magna purus, porttitor dictum luctus sit amet, blandit mattis libero. Sed rhoncus sagittis leo ut sollicitudin. Nulla a ex pharetra, vehicula diam ut,
                        rhoncus sapien. Nam eu gravida orci. Cras lobortis a eros vel tincidunt.
                    </p>
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