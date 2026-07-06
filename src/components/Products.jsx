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
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-center mb-3 text-black dark:text-white">
        Our Signature Collection
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
        Discover fragrances crafted to leave a lasting impression.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-pink-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {perfume.name}
              </h3>

              <p className="text-pink-600 text-xl font-bold mt-2">
                {perfume.price}
              </p>

              <button className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;