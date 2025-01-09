const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold mb-8">Get in Touch</h3>
        <p className="mb-6">
          We would love to hear from you! Whether you have feedback or want to
          place bulk orders, reach out to us anytime.
        </p>
        <a
          href="mailto:contact@chocobardelight.com"
          className="bg-yellow-400 text-brown-800 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
