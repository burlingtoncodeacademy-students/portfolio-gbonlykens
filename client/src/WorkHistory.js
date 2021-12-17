import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function WorkHistory() {
    return(
        <>
        <Navbar />
        <div id="work">
            <div id="work-container">
                <h1 id="work-header">
                    To Contact Me:
                </h1>
                <p id="work-content-1">
                   University of Rochester Medical Center Research Assistant (01/2021-08/2021)
                </p>
                <p id="work-content-2">
                    Elliot Health Systems, Emergency Room EKG Technologist (4/2019-12/2020)
                </p>
                <p id="work-content-3">
                    Fitness and Nutritional Coach, CPT (04/2017-02/2019)
                </p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default WorkHistory;