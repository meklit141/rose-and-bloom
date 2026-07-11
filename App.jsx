import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white">

          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;