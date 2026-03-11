import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-orange-600">
              Citrus Burn™
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium">What is Citrus Burn?</a>
            <a href="#ingredients" className="text-gray-700 hover:text-orange-600 font-medium">Ingredients</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-600 font-medium">Benefits</a>
            <a href="#pricing" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-colors">
              Order Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 font-medium">What is Citrus Burn?</a>
            <a href="#ingredients" className="block px-3 py-2 text-gray-700 font-medium">Ingredients</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 font-medium">Benefits</a>
            <a href="#pricing" className="block px-3 py-2 text-orange-600 font-bold">Order Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
