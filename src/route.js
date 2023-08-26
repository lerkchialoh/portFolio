import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/noPage";
import Home from "./components/home/home";
import About from "./components/about/about";

export default function DefaultRoute() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

