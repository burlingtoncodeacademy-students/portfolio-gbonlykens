import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Contact() {
    return(
        <>
        <Navbar />
        <div id="contact">
            <div id="contact-container">
                <h1 id="contact-header">
                    To Contact Me:
                </h1>
                <p id="contact-content">
                    Hello there! If you would like to contact me, please feel free to reach out. I may be found on LinkedIn, GitHub; and am also available to be reached via phone or email. Thank you. 
                </p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default Contact;