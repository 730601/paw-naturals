import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  imageUrl: string;
  price: number;
  age?: string;
}

interface CartContextType {
  cart: Pet[];
  favorites: Pet[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (petId: string) => void;
  addToFavorites: (pet: Pet) => void;
  removeFromFavorites: (petId: string) => void;
  isInCart: (petId: string) => boolean;
  isInFavorites: (petId: string) => boolean;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load cart and favorites from localStorage on initial render
  const [cart, setCart] = useState<Pet[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [favorites, setFavorites] = useState<Pet[]>(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });

  // Save cart and favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (pet: Pet) => {
    setCart(prevCart => {
      // Check if pet is already in cart
      const isAlreadyInCart = prevCart.some(item => item.id === pet.id);
      if (isAlreadyInCart) {
        return prevCart; // Don't add if already in cart
      }
      return [...prevCart, pet];
    });
  };

  const removeFromCart = (petId: string) => {
    setCart(prevCart => prevCart.filter(pet => pet.id !== petId));
  };

  const addToFavorites = (pet: Pet) => {
    setFavorites(prevFavorites => {
      // Check if pet is already in favorites
      const isAlreadyInFavorites = prevFavorites.some(item => item.id === pet.id);
      if (isAlreadyInFavorites) {
        return prevFavorites; // Don't add if already in favorites
      }
      return [...prevFavorites, pet];
    });
  };

  const removeFromFavorites = (petId: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(pet => pet.id !== petId));
  };

  const isInCart = (petId: string) => {
    return cart.some(pet => pet.id === petId);
  };

  const isInFavorites = (petId: string) => {
    return favorites.some(pet => pet.id === petId);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{
      cart,
      favorites,
      addToCart,
      removeFromCart,
      addToFavorites,
      removeFromFavorites,
      isInCart,
      isInFavorites,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 