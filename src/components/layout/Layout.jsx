
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;