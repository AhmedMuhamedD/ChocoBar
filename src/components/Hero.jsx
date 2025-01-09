const Hero = () => {
  return (
    <section className="bg-brown text-brown text-center py-80">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          Indulge in the Sweetest Delight
        </h2>
        <p className="mb-8 text-xl">
          Discover the rich and creamy flavors of our handcrafted chocolate
          bars, made with love and premium ingredients.
        </p>
        <a
          href="#features"
          className="bg-yellow-400 text-brown-800 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition"
        >
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
