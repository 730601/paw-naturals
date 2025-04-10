# Paw Naturals - Pet Care E-commerce Platform

Paw Naturals is a modern e-commerce platform dedicated to providing high-quality, natural breeds for owners. The platform features a responsive design, intuitive user interface, and seamless integration with pet-related APIs.

## Features

- **Modern UI/UX**: Clean, responsive design built with React and TailwindCSS
- **Authentication**: Secure user authentication and authorization
- **Product Management**: Browse, search, and filter pet products
- **Shopping Cart**: Add, remove, and manage items in cart
- **Favorites**: Save favorite products for quick access
- **API Integration**: Integration with The Dog API and The Cat API
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **GDPR Compliance**: Cookie consent and privacy policy

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **State Management**: React Context API
- **Routing**: React Router
- **API Integration**: Fetch API
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paw-naturals.git
cd paw-naturals
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_DOG_API_KEY=your_dog_api_key
VITE_CAT_API_KEY=your_cat_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React Context providers
├── pages/          # Page components
├── services/       # API services
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Key Components

- **Header**: Navigation and user authentication
- **ProductCard**: Display product information
- **SearchBar**: Search functionality
- **FilterSidebar**: Product filtering
- **LoadingSpinner**: Loading state indicator
- **CookieConsent**: GDPR compliance

## API Integration

The application integrates with:
- The Dog API for dog breed information
- The Cat API for cat breed information

## Performance Optimization

- Lazy loading of routes
- Code splitting
- Optimized images
- Efficient state management
- Memoized components

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Screen reader support

## GDPR Compliance

- Cookie consent banner
- Privacy policy
- Data protection measures

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Dog API
- The Cat API
- React Community
- TailwindCSS Team 
