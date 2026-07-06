export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">

      {/* Left: Logo */}
      <h1 className="font-bold text-xl">Rose & Bloom</h1>

      {/* Middle: Links */}
      <div className="flex gap-6">
        <a href="#home" className="hover:text-pink-500">Home</a>
        <a href="#products" className="hover:text-pink-500">Products</a>
        <a href="#about" className="hover:text-pink-500">About</a>
        <a href="#contact" className="hover:text-pink-500">Contact</a>
      </div>

      {/* Right: Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}