import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import Home from "../pages/home/home";

export default function AppRouter() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="logement/:id" element={<>Logement</>} />
                <Route path="a-propos" element={<>À-propos</>} />
                <Route path="*" element={<>Error</>} />
            </Routes>
        </BrowserRouter>
    )
}