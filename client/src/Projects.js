import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Projects() {
    return(
        <>
        <Navbar />
        <div id="projects">
            <div id="project-container">
                <h1 id="projects-header">
                    Projects:
                </h1>
                <p id="projects-content">
                    Current and past projects can be viewed <Link to = "https://www.github.com/gbonlykens">here</Link>
                </p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default Projects;