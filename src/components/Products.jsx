import midnightRoseImg from "../assets/midnight-rose.jpg";
import velvetBlossomImg from "../assets/velvet-blossom.jpg";
import goldenBloomImg from "../assets/golden-bloom.jpg";

function Products() {
  const perfumes = [
    {
      id: 1,
      image: midnightRoseImg,
      name: "Midnight Rose",
      price: "$45",
    },
    {
      id: 2,
      image: velvetBlossomImg,
      name: "Velvet Blossom",
      price: "$29",
    },
    {
      id: 3,
      image: goldenBloomImg,
      name: "Golden Bloom",
      price: "$100",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-pink-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="text-center mb-12">
        <span className="inline-block bg-pink-200 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Rose & Bloom Collection
        </span>

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Our Signature Collection
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-xl mx-auto">
          Discover fragrances crafted to leave a lasting impression.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            {perfume.id === 1 && (
              <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                Best Seller
              </div>
            )}

            <div className="overflow-hidden">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {perfume.name}
              </h3>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Luxury fragrance for unforgettable moments.
              </p>

              <p className="text-pink-600 text-2xl font-bold mt-4">
                {perfume.price}
              </p>

              <button
                className="mt-5 flex items-center justify-center gap-2 w-full bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 hover:scale-105 transition-all duration-300"
              >
                🛍️ Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;