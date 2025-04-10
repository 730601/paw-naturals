import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, cartCount } = useCart();

  const totalPrice = cart.reduce((sum, pet) => sum + pet.price, 0);

  const handleRemoveFromCart = (petId: string) => {
    removeFromCart(petId);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>
        
        {cartCount === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Pets
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Cart Items ({cartCount})</h2>
                <div className="space-y-6">
                  {cart.map((pet) => (
                    <div key={pet.id} className="flex items-center gap-6 p-4 border rounded-lg">
                      <img
                        src={pet.imageUrl}
                        alt={pet.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold">{pet.name}</h3>
                        <p className="text-gray-600">{pet.breed}</p>
                        <p className="text-gray-500">Age: {pet.age}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-blue-600">£{pet.price}</p>
                        <button
                          onClick={() => handleRemoveFromCart(pet.id)}
                          className="text-red-500 hover:text-red-700 mt-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">£{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-xl font-bold text-blue-600">£{totalPrice}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mt-6"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 