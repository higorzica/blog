import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const Rotas = () => (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />

            </Routes>
        </Router>
    </>
)



export default Rotas;