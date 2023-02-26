import React from "react";
import Navbar from "../layout/Navbar";

import Kontakt from "../components/Kontakt";
import Feature from "../components/Feature";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import AllInOne from "../components/AllInOne";
import Trusted from "../components/Trusted";

export default function Home() {

    return (
        <div className="relative bg-neutral-100">
            <Navbar />
            <Hero />
            <About />
            <Feature />
            <AllInOne />
            <Trusted />
            <Kontakt />
            <Footer />
        </div>
    );
}