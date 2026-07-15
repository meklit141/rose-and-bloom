import { useState } from "react";
import amberNight from "../assets/Amber-night.jpg";
import classicCharm from "../assets/classic-charm.jpg";
import cristalFlower from "../assets/cristal-flower.jpg";
import diamondRose from "../assets/diamond-rose.jpg";
import freshLily from "../assets/Fresh-lily.jpg";
import goldenBloom from "../assets/golden-bloom.jpg";
import goldenSunset from "../assets/golden-sunset.jpg";
import RoseSignature from "../assets/Rose-signature.jpg";
import lavenderMist from "../assets/Lavender-mist.jpg";
import midnightRose from "../assets/midnight-rose.jpg";
import oceanBeeze from "../assets/ocean-beeze.jpg";
import pinkPoeny from "../assets/pink-poeny.jpg";
import royalOud from "../assets/Royal-oud.jpg";
import summerBloom from "../assets/summer-bloom.jpg";
import sweetGasmine from "../assets/sweet gasmine.jpg";
import vanillaDream from "../assets/Vanilla-dream.jpg";
import velvetBlossom from "../assets/velvet-blossom.jpg";
import velvetNight from "../assets/velvet-night.jpg";
import whiteMusk from "../assets/White-musk.jpg";
import roseElegance from "../assets/Rose-elegance.jpg";
const perfumes = [
  {
    id: 1,
    name: "Amber Night",
    category: "Oriental",
    price: 95,
    color: "Amber",
    image: amberNight,
  },
  {
    id: 2,
    name: "Classic Charm",
    category: "Classic",
    price: 70,
    color: "Gold",
    image: classicCharm,
  },
  {
    id: 3,
    name: "Cristal Flower",
    category: "Floral",
    price: 60,
    color: "White",
    image: cristalFlower,
  },
  {
    id: 4,
    name: "Diamond Rose",
    category: "Luxury",
    price: 120,
    color: "Pink",
    image: diamondRose,
  },
  {
    id: 5,
    name: "Fresh Lily",
    category: "Fresh",
    price: 55,
    color: "White",
    image: freshLily,
  },
  {
    id: 6,
    name: "Golden Bloom",
    category: "Luxury",
    price: 110,
    color: "Gold",
    image: goldenBloom,
  },
  {
    id: 7,
    name: "Golden Sunset",
    category: "Woody",
    price: 85,
    color: "pink",
    image: goldenSunset,
  },
  {
    id: 8,
    name: "Lavender Mist",
    category: "Fresh",
    price: 65,
    color: "Purple",
    image: lavenderMist,
  },
  {
    id: 9,
    name: "Midnight Rose",
    category: "Floral",
    price: 90,
    color: "Red",
    image: midnightRose,
  },
  {
    id: 10,
    name: "Ocean Beeze",
    category: "Fresh",
    price: 75,
    color: "Blue",
    image: oceanBeeze,
  },
  {
    id: 11,
    name: "Pink Poeny",
    category: "Floral",
    price: 68,
    color: "Pink",
    image: pinkPoeny,
  },
  {
    id: 12,
    name: "Rose Elegance",
    category: "Luxury",
    price: 130,
    color: "blue",
    image: roseElegance,
  },
  {
    id: 13,
    name: "Royal Oud",
    category: "Woody",
    price: 140,
    color: "Brown",
    image: royalOud,
  },
  {
    id: 14,
    name: "Summer Bloom",
    category: "Floral",
    price: 72,
    color: "pink",
    image: summerBloom,
  },
  {
    id: 15,
    name: "Sweet Gasmine",
    category: "Floral",
    price: 66,
    color: "White",
    image: sweetGasmine,
  },
  {
    id: 16,
    name: "Vanilla Dream",
    category: "Sweet",
    price: 78,
    color: "Cream",
    image: vanillaDream,
  },
  {
    id: 17,
    name: "Velvet Blossom",
    category: "Floral",
    price: 88,
    color: "Purple",
    image: velvetBlossom,
  },
  {
    id: 18,
    name: "Velvet Night",
    category: "Oriental",
    price: 105,
    color: "Black",
    image: velvetNight,
  },
  {
    id: 19,
    name: "White Musk",
    category: "Fresh",
    price: 82,
    color: "White",
    image: whiteMusk,
  },
  {
    id: 20,
    name: "Rose Signature",
    category: "Luxury",
    price: 150,
    color: "Pink",
    image: RoseSignature,
  },
];

  function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");


  const filteredPerfumes = perfumes.filter((perfume) => {
  const matchesSearch = perfume.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    perfume.category === selectedCategory;

  const matchesColor =
    selectedColor === "All" ||
    perfume.color === selectedColor;

  const matchesPrice =
    selectedPrice === "All" ||
    (selectedPrice === "Under 80" && perfume.price < 80) ||
    (selectedPrice === "80-120" &&
      perfume.price >= 80 &&
      perfume.price <= 120) ||
    (selectedPrice === "Above 120" && perfume.price > 120);

  return (
    matchesSearch &&
    matchesCategory &&
    matchesColor &&
    matchesPrice
  );
});
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-8">

    <div className="text-center mb-10">
      <span className="inline-block bg-pink-200 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
        Rose & Bloom Collection
      </span>

      <h1 className="text-5xl font-bold text-black dark:text-white">
        Discover Your Signature Fragrance
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Explore our carefully selected collection of luxury perfumes. Use the
        filters below to find the perfect scent for every occasion.
      </p>
    </div>

    <div className="flex justify-center mb-8">
  <input
    type="text"
    placeholder="Search perfumes..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full max-w-lg rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"  />
</div>

<div className="flex justify-center gap-4 mb-8 flex-wrap">
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 px-5 py-3 shadow-sm hover:shadow-md transition"
  >
    <option value="All">All Categories</option>
    <option value="Classic">Classic</option>
    <option value="Floral">Floral</option>
    <option value="Fresh">Fresh</option>
    <option value="Luxury">Luxury</option>
    <option value="Oriental">Oriental</option>
    <option value="Sweet">Sweet</option>
    <option value="Woody">Woody</option>
  </select>

  <select
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
    className="rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 px-5 py-3 shadow-sm hover:shadow-md transition"
  >
    <option value="All">All Colors</option>
    <option value="Amber">Amber</option>
    <option value="Black">Black</option>
    <option value="Blue">Blue</option>
    <option value="Brown">Brown</option>
    <option value="Cream">Cream</option>
    <option value="Gold">Gold</option>
    <option value="Pink">Pink</option>
    <option value="Purple">Purple</option>
    <option value="Red">Red</option>
    <option value="White">White</option>
    <option value="Yellow">Yellow</option>
  </select>
  <select
  value={selectedPrice}
  onChange={(e) => setSelectedPrice(e.target.value)}className="rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 px-5 py-3 shadow-sm hover:shadow-md transition"
>
  <option value="All">All Prices</option>
  <option value="Under 80">Under $80</option>
  <option value="80-120">$80 - $120</option>
  <option value="Above 120">Above $120</option>
</select>
</div>

      
     {filteredPerfumes.length === 0 ? (
  <div className="text-center py-20">
    <h2 className="text-3xl font-bold text-pink-600">
      No perfumes found
    </h2>

    <p className="mt-3 text-gray-600 dark:text-gray-300">
      Try changing your search or filter options.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filteredPerfumes.map((perfume) => (
      <div
        key={perfume.id}
        className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-6">
  <h2 className="text-xl font-bold text-black dark:text-white">
    {perfume.name}
  </h2>

  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
    Category: {perfume.category}
  </p>

  <p className="text-sm text-gray-500 dark:text-gray-300">
    Color: {perfume.color}
  </p>

  <p className="mt-4 text-2xl font-bold text-pink-600">
    ${perfume.price}
  </p>

          <button className="mt-5 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            🛍️ Buy Now
          </button>
        </div>
      </div>
    ))}
  </div>
)}
</div>
);
  }
export default ProductsPage;