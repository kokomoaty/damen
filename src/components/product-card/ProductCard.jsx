import { Heart } from 'lucide-react';
import React, { Component } from 'react';
import { useCartStore } from '../../store/cartStore';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWishlisted: false,
    };
  }

  toggleWishlist = () => {
    this.setState((prevState) => ({
      isWishlisted: !prevState.isWishlisted,
    }));
  };

  render() {
    const { id, title, price, image, rating, onAddToCart } = this.props;
    const { isWishlisted } = this.state;

    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <a href={`/products/${id}`}>
          <div className="relative aspect-square mb-4">
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </a>

        <div className="space-y-2">
          <h3 className="font-medium text-lg">{title}</h3>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < rating ? 'text-gold' : 'text-gray'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{price} EGP</span>
          </div>
          <div className='flex items-center justify-between gap-8'>
          <button
            className="w-full text-white bg-primary  py-2 rounded hover:outline hover:outline-2 hover:outline-gray"
            onClick={()=>useCartStore.getState().addItem(this.props)}
          >
            Add to Cart
          </button>
          <Heart color="#000000" strokeWidth={1.5} className='w-10 h-auto'/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
