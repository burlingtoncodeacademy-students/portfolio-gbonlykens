import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Interests() {
    return(
        <>
        <Navbar />
        <div id="interests">
            <div id="interests-container">
                <h1 id="interests-header">
                    To Contact Me:
                </h1>
                <p id="interests-content">
                    Interests: Sports [ice hockey, soccer, softball, golf, snowboarding, lax], cooking, reading, writing sci-fy/dystopian fiction novels, watching Christmas movies, volcano luging (someday).
                </p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default Interests;