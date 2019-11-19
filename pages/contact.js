import Link from "next/link";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";

const Contact = () => (
    <div>
        <Navbar/>
        Contact
        <Footer/>

        <style jsx global>{`
            body{
                margin: 0;
            } 
        `}
        </style>
    </div>
)

export default Contact;