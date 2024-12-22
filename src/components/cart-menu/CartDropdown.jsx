import React, { Component } from 'react';
import { useCartStore } from '../../store/cartStore';
import { CircleX, Trash2 } from 'lucide-react';

class CartDropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items:useCartStore.getState().items
      };
    }
  calculateSubtotal(items) {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
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
    const { items} = this.state;
    const {onClose}=this.props;
    const subtotal = this.calculateSubtotal(items);

    return (
      <div className='absolute top-full bg-gray w-full h-screen'>
      <div className="absolute top-0 md:right-20 mt-2 md:w-80 bg-white rounded-lg shadow-lg p-4 w-full z-40">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">MY CART ({items?.length})</h3>
          <button className="bg-transparent border-none p-0 cursor-pointer"
          onClick={onClose}>
            <CircleX color="black" />
          </button>
        </div>

        {items?.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-80 overflow-auto">
              {items?.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item?.title}</h4>
                    <p className="text-sm text-red">
                      {item.quantity} x {item.price} EGP
                    </p>
                  </div>
                  <button className="bg-transparent border-none p-0 cursor-pointer"
                  onClick={()=>useCartStore.getState().removeItem(item.id)}>
                    <Trash2 className='text-red' />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Sub Total</span>
                <span className="font-bold text-red">{subtotal} EGP</span>
              </div>

              <a href="/cart" className="block">
                <button className="w-full bg-primary text-white hover:bg-primary p-2 rounded-lg">
                  GO TO CART
                </button>
              </a>
            </div>
          </>
        )}
      </div>
      </div>
    );
  }
}

export default CartDropdown;
