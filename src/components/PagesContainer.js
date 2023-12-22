import React from "react";
import Homepage from "./pages/Homepage";
import Content from './pages/Content';
import Header from "./pages/Header";
import Footer from "./pages/Footer";

export default function PagesContainer() {
    return (
        <div>
            <Header />
            <Homepage />
            <Content />
            <Footer />
        </div>
    )
}