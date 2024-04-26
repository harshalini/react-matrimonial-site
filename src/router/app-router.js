import { Routes, Route, Link } from 'react-router-dom';
import { About } from "../pages/about";
import { Home } from "../pages/home";

export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
    )
}
