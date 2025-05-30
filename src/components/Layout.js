import React, {useEffect} from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import Sidebar from "./Sidebar";

function Layout({ children }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                        {children}
                    <Footer />
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default Layout;
