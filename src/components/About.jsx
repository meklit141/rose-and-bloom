function About() {
  return (
    <section
      id="about"
      className="bg-pink-50 dark:bg-gray-800 py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Rose & Bloom
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
          At <span className="font-semibold">Rose & Bloom</span>, we believe
          every fragrance tells a unique story. Our carefully crafted perfumes
          combine timeless elegance with modern sophistication, using the
          finest ingredients to create unforgettable scents. Whether you're
          celebrating a special occasion or expressing your everyday style,
          Rose & Bloom is designed to leave a lasting impression.
        </p>
      </div>
    </section>
  );
}

export default About;