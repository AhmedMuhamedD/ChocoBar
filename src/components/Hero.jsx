import { useState, useEffect } from "react";
const slides = [
  {
    title: "Indulge in the Sweetest Delight",
    description:
      "Discover the rich and creamy flavors of our handcrafted chocolate bars, made with love and premium ingredients.",
    image:
      "https://images.pexels.com/photos/4791265/pexels-photo-4791265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Handcrafted Perfection",
    description:
      "Every bar is a masterpiece, crafted with precision and care to ensure the highest quality.",
    image:
      "https://images.pexels.com/photos/4791299/pexels-photo-4791299.jpeg?auto=compress&cs=tinysrgb&dpr=1e",
  },
  {
    title: "Sustainably Sourced Ingredients",
    description:
      "We believe in ethical practices, sourcing our cocoa from trusted farmers.",
    image:
      "https://images.pexels.com/photos/30222497/pexels-photo-30222497/free-photo-of-delicious-chocolate-art-with-mug-and-knife.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "A Treat for Every Occasion",
    description: "Perfect for gifting, sharing, or indulging on your own.",
    image:
      "https://images.pexels.com/photos/30222431/pexels-photo-30222431/free-photo-of-barista-preparing-chocolate-at-a-cafe-counter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
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
