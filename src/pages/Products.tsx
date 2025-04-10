import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dog, Cat, Search, ShoppingCart, Heart, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  subBreed?: string;
  size?: string;
  imageUrl: string;
  description?: string;
  price: number;
  age?: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const { 
    addToCart, 
    addToFavorites, 
    removeFromFavorites, 
    isInCart, 
    isInFavorites,
    cartCount
  } = useCart();
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [filters, setFilters] = useState({
    breed: '',
    priceRange: 'all',
    page: 1,
    limit: 20,
  });
  const [breeds, setBreeds] = useState<{ id: string; name: string }[]>([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  // Price ranges for filtering
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under £500' },
    { value: '500-1000', label: '£500 - £1000' },
    { value: '1000-2000', label: '£1000 - £2000' },
    { value: '2000+', label: 'Over £2000' },
  ];

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(
          petType === 'dog'
            ? 'https://api.thedogapi.com/v1/breeds'
            : 'https://api.thecatapi.com/v1/breeds'
        );
        const data = await response.json();
        setBreeds(data.map((breed: any) => ({
          id: breed.id,
          name: breed.name
        })));
      } catch (err) {
        setError('Failed to fetch breeds');
      }
    };

    fetchBreeds();
  }, [petType]);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        // First, get all breeds
        const breedsResponse = await fetch(
          petType === 'dog'
            ? 'https://api.thedogapi.com/v1/breeds'
            : 'https://api.thecatapi.com/v1/breeds'
        );
        const breedsData = await breedsResponse.json();

        // Then, get images for each breed
        const petsWithDetails = await Promise.all(
          breedsData.slice(0, filters.limit).map(async (breed: any) => {
            try {
              // Get an image for this breed
              const imageResponse = await fetch(
                petType === 'dog'
                  ? `https://api.thedogapi.com/v1/images/search?breed_id=${breed.id}&limit=1`
                  : `https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}&limit=1`
              );
              const imageData = await imageResponse.json();
              
              if (imageData.length > 0) {
                // Generate a realistic price based on breed characteristics
                const basePrice = petType === 'dog' ? 800 : 500;
                const priceMultiplier = breed.rare ? 2 : 1;
                const sizeMultiplier = breed.size === 'large' ? 1.5 : 1;
                const price = Math.floor(basePrice * priceMultiplier * sizeMultiplier * (0.8 + Math.random() * 0.4));

                return {
                  id: breed.id,
                  name: breed.name,
                  type: petType === 'dog' ? 'Dog' : 'Cat',
                  breed: breed.name,
                  subBreed: breed.subBreed,
                  size: breed.size,
                  imageUrl: imageData[0].url,
                  description: breed.description || breed.temperament,
                  price: price,
                  age: `${Math.floor(Math.random() * 4) + 8} weeks`
                };
              }
              return null;
            } catch (err) {
              console.error(`Failed to fetch image for breed ${breed.name}:`, err);
              return null;
            }
          })
        );

        // Filter out null values and set pets
        setPets(petsWithDetails.filter((pet): pet is Pet => pet !== null));
      } catch (err) {
        console.error('Failed to fetch pets:', err);
        setError('Failed to fetch pets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [petType, filters.limit]);

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = !filters.breed || pet.breed === filters.breed;
    
    // Price range filtering
    let matchesPrice = true;
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (filters.priceRange === '2000+') {
        matchesPrice = pet.price >= 2000;
      } else {
        matchesPrice = pet.price >= min && pet.price <= max;
      }
    }

    return matchesSearch && matchesBreed && matchesPrice;
  });

  const handleBuyNow = (pet: Pet) => {
    addToCart(pet);
    navigate('/checkout');
  };

  const handleAddToCart = (pet: Pet) => {
    addToCart(pet);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const handleToggleFavorite = (pet: Pet) => {
    if (isInFavorites(pet.id)) {
      removeFromFavorites(pet.id);
    } else {
      addToFavorites(pet);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Available Pets</h1>

        {/* Cart Notification */}
        {showCartNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Item added to cart! ({cartCount} items)
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
            </select>
            <select
              value={filters.breed}
              onChange={(e) => setFilters({ ...filters, breed: e.target.value })}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Breeds</option>
              {breeds.map(breed => (
                <option key={breed.id} value={breed.name}>{breed.name}</option>
              ))}
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-600">{error}</div>
          ) : (
            filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => handleToggleFavorite(pet)}
                      className={`p-2 rounded-full ${
                        isInFavorites(pet.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-600'
                      } hover:bg-red-100 transition-colors`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    {pet.type === 'Dog' ? (
                      <Dog className="w-8 h-8 text-white bg-blue-600 rounded-full p-1" />
                    ) : (
                      <Cat className="w-8 h-8 text-white bg-blue-600 rounded-full p-1" />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{pet.name}</h2>
                    <span className="text-blue-600 font-bold">£{pet.price}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{pet.breed}</p>
                  <p className="text-gray-500 text-sm mb-4">Age: {pet.age}</p>
                  {pet.description && (
                    <p className="text-gray-700 mb-4">{pet.description}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBuyNow(pet)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <CreditCard className="w-5 h-5" />
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleAddToCart(pet)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {!loading && !error && filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No pets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;