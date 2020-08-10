import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BookSearch from "../../components/BookSearch/BookSearch"
import Results from "../../components/Results/Results"
import Footer from "../../components/Footer/Footer"

const Search = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <BookSearch />
            <Results />
            <Footer />
        </div>
    );
};

export default Search;