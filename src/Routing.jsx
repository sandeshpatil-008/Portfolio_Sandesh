import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Services from './component/Services';
import Experience from './component/Experience';
import Work from './component/Work';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import App from './App';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
    return (
        <>
            <Routes>

                <Route exact path="/" element={<App />} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/navbar" element={<Navbar />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/experience" element={<Experience />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/footer" element={<Footer />} />
            </Routes>
        </>
    );
};

export default Routing;