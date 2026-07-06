import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;