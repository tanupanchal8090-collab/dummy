import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform ease-in-out duration-500 bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-100 sm:px-6">
            <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center">
              <ShoppingBag className="w-6 h-6 mr-2 text-rose-500" />
              Shopping Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-2">{item.name}</h3>
                          <p className="ml-4 whitespace-nowrap text-rose-600 font-bold">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-l-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-r-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-rose-500 hover:text-rose-600 p-2 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-gray-100 px-4 py-6 sm:px-6 bg-gray-50/50">
            <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>₹{cartTotal}</p>
            </div>
            <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
            <button
              className="w-full flex items-center justify-center rounded-xl border border-transparent bg-gray-900 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-rose-600 transition-colors"
              onClick={() => {
                alert('Checkout functionality coming soon!');
              }}
            >
              Checkout
            </button>
            <div className="mt-4 flex justify-center text-sm text-gray-500">
              <p>
                or{' '}
                <button
                  type="button"
                  className="font-medium text-rose-600 hover:text-rose-500 ml-1"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
