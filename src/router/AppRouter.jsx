import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home/home";
import Footer from "../components/footer";
import Logement from "../pages/logement/logement";
import Error from "../pages/error/error";
import About from "../pages/about/about";

export default function AppRouter() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="logement/:id" element={<Logement />} />
                <Route path="a-propos" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}