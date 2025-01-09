/* eslint-disable react/no-unescaped-entities */
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-40 bg-brown-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-brown-700 mb-10">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic">
              "The Dark Chocolate Bliss is the best I've ever tasted. It's rich,
              smooth, and absolutely delightful!"
            </p>
            <h4 className="text-brown-700 font-bold mt-4">- Sarah M.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic">
              "I can't get enough of the Hazelnut Crunch. The texture and flavor
              are unmatched!"
            </p>
            <h4 className="text-brown-700 font-bold mt-4">- John D.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
