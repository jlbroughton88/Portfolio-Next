import Navbar from "./comps/navbar";
import Footer from "./comps/footer";

const Story = () => (
    <div>
        <Navbar/>
        Story
        <Footer/>


        <style jsx global>{`
            body{
                margin: 0;
            } 
        `}
        </style>
    </div>
)

export default Story;