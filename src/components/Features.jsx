import products from "../../public/data/products";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gray-100 flex flex-wrap justify-center space-x-4 space-y-8"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center"
        >
          <img
            src={product.image}
            className="h-80 object-cover w-full  rounded-lg"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
