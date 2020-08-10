import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SavedResults from "../../components/SavedResults/SavedResults"
import Footer from "../../components/Footer/Footer"

const Saved = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <SavedResults />
            <Footer />
        </div>
    );
};

export default Saved;