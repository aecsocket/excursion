import React, { FC } from "react";
import Navbar from "./navbar";  
import Footer from "./footer";

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
