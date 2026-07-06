function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;