import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BookSearch from "../../components/BookSearch/BookSearch"
import SearchResults from "../../components/SearchResults/SearchResults"
import Footer from "../../components/Footer/Footer"

const Search = () => {


    return (
        <div>
            <Navbar />
            <Jumbotron />
            <BookSearch />
            <SearchResults />
            <Footer />
        </div>
    );
};

export default Search;