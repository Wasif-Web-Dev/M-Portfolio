import React from "react";
import Hero from "./Hero";
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TableauEmbed from "./components/TableauEmbed";
import DashboardPage from "./components/DashboardPage";
import BangladeshDataTable from "./BangladeshDataTable";

const App = () => {
    return (
        <div className="overflow-hidden w-full h-full">
            {/* <Nav /> */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tableau/:dashboardId" element={<TableauEmbed />} />
                <Route path="/data-directory" element={<BangladeshDataTable />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
