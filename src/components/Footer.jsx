function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-pink-400">
          🌹 Rose & Bloom
        </h2>

        <p className="mt-3 text-gray-300">
          Luxury fragrances crafted to inspire confidence and elegance.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-gray-300">
          <a href="#home" className="hover:text-pink-400">Home</a>
          <a href="#products" className="hover:text-pink-400">Products</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-sm text-gray-400">
          © 2026 Rose & Bloom. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;