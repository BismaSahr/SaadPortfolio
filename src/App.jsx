import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home/Home";
import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {
          AOS.init({
              duration: 1000,
              easing: 'ease-out',
              once: false,
              mirror: true,
          });
      }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;