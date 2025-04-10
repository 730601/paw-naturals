import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites, addToCart } = useCart();
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  // Get unique breeds from favorites
  const uniqueBreeds = Array.from(new Set(favorites.map(pet => pet.breed)));

  // Filter favorites by selected breed
  const filteredFavorites = selectedBreed
    ? favorites.filter(pet => pet.breed === selectedBreed)
    : favorites;

  const handleRemoveFromFavorites = (petId: string) => {
    removeFromFavorites(petId);
  };

  const handleAddToCart = (pet: any) => {
    addToCart(pet);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Your Favorites</h1>
        
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">You haven't added any pets to your favorites yet</p>
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
              {/* Breed Filter */}
              <div className="mb-6">
                <label htmlFor="breed-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Breed
                </label>
                <select
                  id="breed-filter"
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Breeds</option>
                  {uniqueBreeds.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Favorite Pets ({filteredFavorites.length})</h2>
                <div className="space-y-6">
                  {filteredFavorites.map((pet) => (
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
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleAddToCart(pet)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleRemoveFromFavorites(pet.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => navigate('/products')}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Browse More Pets
                  </button>
                  <button
                    onClick={() => navigate('/cart')}
                    className="w-full bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    View Cart
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

export default Favorites;