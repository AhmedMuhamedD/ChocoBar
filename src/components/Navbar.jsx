const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-brown-700">
          ChocoBar Delight
        </h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <a href="#features" className="hover:text-gray-900">
                Our Bars
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-gray-900">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
