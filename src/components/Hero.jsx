import { useState, useEffect } from "react";
import slides from "../../public/data/slides";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white text-center py-80"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 bg-black bg-opacity-50 py-16 rounded-lg">
        <h2 className="text-5xl font-extrabold mb-6">
          {slides[currentSlide].title}
        </h2>
        <p className="mb-8 text-xl">{slides[currentSlide].description}</p>
        <a
          href="#features"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-200 transition"
        >
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
