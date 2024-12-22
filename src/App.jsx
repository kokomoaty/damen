import React, { Component } from 'react';
import ProductCard from './components/product-card/ProductCard';
import NavBar from './components/nav-bar/NavBar';
import data from './utils/services/data.json';
import { Heart, Share } from 'lucide-react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      isWishlisted: false,
      products:data
    };
  }

  handleQuantityChange = (amount) => {
    this.setState((prevState) => ({
      quantity: Math.max(1, prevState.quantity + amount),
    }));
  };

  toggleWishlist = () => {
    this.setState((prevState) => ({
      isWishlisted: !prevState.isWishlisted,
    }));
  };

  render() {
    const { quantity, isWishlisted,products } = this.state;
    const product = {
      name: 'Sample Product',
      price: 3000,
      originalPrice: 3500,
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      rating: 5,
      image: '/public/images/image1.png',
    };
    return (
      <>
      <NavBar/>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-2 py-1 text-sm rounded">
              10% Off
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center gap-1">
              {Array.from({ length: product.rating }).map((_, i) => (
                <span key={i} className="text-gold text-2xl">★</span>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold">{product.price} EP</div>
              <div className="text-gray line-through">{product.originalPrice} EGP</div>
            </div>

            <p className="text-gray">{product.description}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="bg-transparent border-none p-2"
                  onClick={() => this.handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="bg-transparent border-none p-2"
                  onClick={() => this.handleQuantityChange(1)}
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-primary rounded-lg text-white hover:outline hover:outline-2 hover:outline-gray p-2 max-w-[250px]">
                BUY NOW
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  isWishlisted ? 'text-red-500' : ''
                }`}
                onClick={this.toggleWishlist}
              >
                <span className='flex items-center justify-center p-2 rounded-full bg-secondary'>
                <Heart color="black" strokeWidth={1} fill={isWishlisted ? 'red' : 'none'}/>
                </span> Add to wishlist
              </button>

              <button className="flex items-center gap-2 p-2">
                <span className='flex items-center justify-center p-2 rounded-full bg-secondary'>
                  <Share color="black" />
                </span>
                 Share
              </button>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
      </>
    );
  }
}

export default App;
