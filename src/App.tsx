import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import CookieConsent from './components/CookieConsent';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Favorites = lazy(() => import('./pages/Favorites'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Cart = lazy(() => import('./pages/Cart'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkout = lazy(() => import('./pages/Checkout'));

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <CookieConsent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;