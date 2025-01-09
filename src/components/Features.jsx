const Features = () => {
  return (
    <section id="features" className="py-40 bg-yellow-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center mb-10 text-brown-700">
          Our Chocolate Bars
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-brown-700 mb-4">
              Dark Chocolate Bliss
            </h4>
            <p className="text-gray-600">
              Rich and intense, perfect for true chocolate lovers. Made with 80%
              cocoa for a deep flavor experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-brown-700 mb-4">
              Milk Chocolate Classic
            </h4>
            <p className="text-gray-600">
              Smooth and creamy, a timeless favorite for all ages.
              Melt-in-your-mouth goodness in every bite.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-bold text-brown-700 mb-4">
              Hazelnut Crunch
            </h4>
            <p className="text-gray-600">
              Delightfully crunchy with a hint of hazelnut. The perfect balance
              of texture and taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
