import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/navbar";
import Footer from "../pages/shared/footer/footer";


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;