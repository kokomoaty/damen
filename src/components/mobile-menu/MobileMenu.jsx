import { CircleX, Headset, PackageOpen, PackagePlus, Sparkles } from 'lucide-react';
import React, { Component } from 'react';

class MobileMenu extends Component {
  render() {
    const { isOpen, onClose } = this.props;

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-secondary w-2/3">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-transparent border-none p-0 cursor-pointer"
          >
            <CircleX color="black" />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <a
            href="/products"
            className="flex items-center gap-4 p-4 hover:bg-primary hover:text-white rounded-lg"
            onClick={onClose}
          >
            <PackageOpen />
            <span className="text-lg">Products</span>
          </a>
          <a
            href="/best-seller"
            className="flex items-center gap-4 p-4 hover:bg-primary hover:text-white rounded-lg"
            onClick={onClose}
          >
            <Sparkles />
            <span className="text-lg">Best Seller</span>
          </a>
          <a
            href="/new-arrival"
            className="flex items-center gap-4 p-4 hover:bg-primary hover:text-white rounded-lg"
            onClick={onClose}
          >
            <PackagePlus />
            <span className="text-lg">New Arrival</span>
          </a>
          <a
            href="/contact-us"
            className="flex items-center gap-4 p-4 hover:bg-primary hover:text-white rounded-lg"
            onClick={onClose}
          >
            <Headset />
            <span className="text-lg">Contact Us</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default MobileMenu;
