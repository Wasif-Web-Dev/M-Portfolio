import React from "react";
import Hero from "./Hero";
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav";

const App = () => {
    return (
        <>
            <Nav />

            <Routes>
                {/* <Route path="/" element={<Nav />} /> */}
                {/* <Route path="/" element={<Hero />} /> */}
            </Routes>
        </>
    );
};

export default App;
