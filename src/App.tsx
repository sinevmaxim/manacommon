import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<div/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}

export default App;
