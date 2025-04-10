import React from 'react';
import { Heart, ShoppingCart, Star, Package, Clock, Truck } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  weight: string;
  dimensions: string;
  features: string[];
  petType: string;
  ageRange: string;
  shippingInfo: {
    freeShipping: boolean;
    estimatedDelivery: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  rating,
  reviewCount,
  image,
  description,
  brand,
  inStock,
  stockQuantity,
  weight,
  dimensions,
  features,
  petType,
  ageRange,
  shippingInfo
}) => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <button
            onClick={() => toggleFavorite(id)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label={favorites.includes(id) ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`w-5 h-5 ${
                favorites.includes(id) ? 'text-red-500 fill-current' : 'text-gray-400'
              }`}
            />
          </button>
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating} ({reviewCount})</span>
          </div>
        </div>
        <p className="text-gray-600 mb-2">{brand}</p>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-lg font-bold text-primary">£{price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Package className="w-4 h-4" />
          <span>{weight}</span>
          <Clock className="w-4 h-4" />
          <span>{shippingInfo.estimatedDelivery}</span>
          {shippingInfo.freeShipping && (
            <>
              <Truck className="w-4 h-4" />
              <span>Free Shipping</span>
            </>
          )}
        </div>
        <button 
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 