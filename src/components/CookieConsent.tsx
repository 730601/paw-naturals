import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div 
      role="dialog"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2">
            Cookie Consent
          </h2>
          <p className="text-sm">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Accept All
          </button>
          <a
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 