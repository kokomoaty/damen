import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import React, { Component } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import CartDropdown from '../cart-menu/CartDropdown';
import { useCartStore } from '../../store/cartStore';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      isMobileMenuOpen: false,
      items:useCartStore.getState().items
    };
  }

  toggleCart = () => {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };
  componentDidMount() {
    // Subscribe to the store to update local state whenever the store state changes
    this.unsubscribe = useCartStore.subscribe(
      (state) => this.setState({ items:state.items})
    )
  }
  componentWillUnmount() {
    // Unsubscribe from the store to avoid memory leaks
    this.unsubscribe()
  }
  render() {
    const { isCartOpen, isMobileMenuOpen } = this.state;
    const {items}=this.state;
    return (
      <header className="sticky top-0 z-50 bg-white border-b">
        <MobileMenu isOpen={isMobileMenuOpen} onClose={this.closeMobileMenu}/>
        {isCartOpen && <CartDropdown onClose={this.toggleCart}/>}
        <div className='container mx-auto flex items-center justify-between'>
          <div className="flex items-center justify-start gap-4 p-4">
            <button
              onClick={this.toggleMobileMenu}
              className="md:hidden bg-transparent border-none p-0 cursor-pointer"
            >
              <Menu/>
            </button>

            <a href="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Damen"
                className="w-[100px] "
              />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/products" className="hover:text-gray">
                Products
              </a>
              <a href="/best-seller" className="hover:text-gray">
                Best Seller
              </a>
              <a href="/new-arrival" className="hover:text-gray">
                New Arrival
              </a>
              <a href="/contact-us" className="hover:text-gray">
                Contact Us
              </a>
            </nav>
            
          </div>
          <div className="flex items-center gap-8 pe-4">
            <button className="bg-secondary border-none rounded-full p-2 cursor-pointer">
                <Search />
            </button>
              <div className="relative">
                <button
                  onClick={this.toggleCart}
                  className="bg-secondary border-none rounded-full p-2 cursor-pointer"
                >
                  <ShoppingCart />
                  {
                    <span className="absolute -top-1 -right-1 bg-secondary text-red text-lg rounded-full h-5 w-5 flex items-center justify-center">
                      {items?.length}
                    </span>
                  }
                </button>
              </div>
              <button className="bg-secondary border-none rounded-full p-2 cursor-pointer">
                <User />
              </button>
            </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
