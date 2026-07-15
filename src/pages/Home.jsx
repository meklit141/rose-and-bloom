import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;