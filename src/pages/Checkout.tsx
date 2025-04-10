import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Package, Truck } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const total = cart.reduce((sum, pet) => sum + pet.price, 0);

  const handleCheckout = () => {
    // Here you would typically integrate with a payment processor
    alert('Payment successful! Thank you for your purchase.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((pet) => (
                <div key={pet.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{pet.name}</h3>
                      <p className="text-gray-600">{pet.breed}</p>
                    </div>
                  </div>
                  <span className="font-semibold">£{pet.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-2xl font-bold text-blue-600">£{total}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Package className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Standard Delivery</h3>
                  <p className="text-gray-600">3-5 business days</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-gray-600">On all orders over £1000</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 