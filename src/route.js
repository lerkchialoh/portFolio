import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/noPage";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

export default function DefaultRoute() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

