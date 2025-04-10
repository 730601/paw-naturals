import React, { createContext, useContext, useState, useEffect } from 'react';

interface Pet {
  id: number;
  name: string;
  type: string;
  breeds: {
    primary: string;
  };
  age: string;
  gender: string;
  size: string;
  photos: Array<{
    medium: string;
  }>;
  contact: {
    address: {
      city: string;
      state: string;
    };
  };
}

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(favId => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;