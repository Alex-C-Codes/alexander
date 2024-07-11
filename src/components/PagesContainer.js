import React, { useState } from "react";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Coding from "./pages/Coding";
import Marketing from "./pages/Marketing";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PagesContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Coding') {
            return <Coding />;
        }
        if (currentPage === 'Music') {
            return <Music />;
        }
        if (currentPage === 'Marketing') {
            return <Marketing />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

            <div className="content-wrap">
                {renderPage()}
            </div>
            
            <Footer />
        </div>
    )
}