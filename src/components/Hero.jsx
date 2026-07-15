import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center justify-between bg-transparent">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-5xl font-bold">
          Discover Your Signature Fragrance
        </h1>

        <p className="mt-6 text-lg opacity-80">
          Explore our exclusive collection of luxury perfumes crafted with
          elegance and timeless beauty.
        </p>

        <button className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Rose and Bloom"
          className="rounded-xl shadow-xl w-96"
        />
      </div>

    </section>
  );
}