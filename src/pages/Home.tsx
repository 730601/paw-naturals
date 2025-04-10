import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { carouselImages, productImages } from '../data/sampleImages';
import { Heart, Star, BookOpen, Dog, Cat, Shield, Leaf, Award, PawPrint } from 'lucide-react';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const slides = [
    {
      image: carouselImages.dogPlaying,
      title: 'Find Your Perfect Pet Companion',
      description: 'Discover loving cats and dogs waiting for their forever homes'
    },
    {
      image: carouselImages.catPlaying,
      title: 'Expert Care & Support',
      description: 'Our team of professionals ensures every pet receives the best care and attention'
    },
    {
      image: carouselImages.petCare,
      title: 'Health Guaranteed',
      description: 'All our pets come with complete health records and veterinary checks'
    }
  ];

  const availablePets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '8 weeks',
      price: '£1,200',
      image: carouselImages.dogTraining
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Cat',
      breed: 'Siamese',
      age: '10 weeks',
      price: '£800',
      image: carouselImages.catPlaying
    },
    {
      id: 3,
      name: 'Buddy',
      type: 'Dog',
      breed: 'Labrador',
      age: '12 weeks',
      price: '£1,000',
      image: carouselImages.petCare
    }
  ];

  const petCareTips = [
    {
      title: 'Pet Selection Guide',
      description: 'Learn how to choose the right pet for your lifestyle',
      icon: <Heart className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Breed Information',
      description: 'Detailed information about different dog and cat breeds',
      icon: <Star className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Care Instructions',
      description: 'Essential care tips for your new pet',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />
    }
  ];

  const popularBreeds = [
    {
      name: 'Golden Retriever',
      type: 'Dog',
      characteristics: 'Friendly, Intelligent, Great with Families',
      price: 'Starting at £1,200',
      image: carouselImages.dogPlaying
    },
    {
      name: 'Siamese',
      type: 'Cat',
      characteristics: 'Social, Intelligent, Low Maintenance',
      price: 'Starting at £800',
      image: carouselImages.catRelaxing
    }
  ];

  const testimonials = [
    {
      text: 'I found the perfect pet through this website. The process was smooth and the support was excellent.',
      name: 'John Doe',
      location: 'London'
    },
    {
      text: 'The website made it easy to find the right pet for our family. We are so happy with our new addition!',
      name: 'Jane Smith',
      location: 'Manchester'
    },
    {
      text: 'I was hesitant at first, but the team helped me find the perfect pet for my lifestyle. Thank you!',
      name: 'Mike Johnson',
      location: 'Bristol'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <Carousel slides={slides} />

      {/* Available Pets Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <PawPrint className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-center">Available Pets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availablePets.map((pet) => (
              <div key={pet.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{pet.name}</h3>
                  <p className="text-white/90">
                    {pet.type} • {pet.breed} • {pet.age}
                  </p>
                  <p className="text-white font-bold mt-2">{pet.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Care Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Heart className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-center">Pet Selection Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petCareTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Breeds Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Star className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-center">Popular Breeds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularBreeds.map((breed, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    {breed.type === 'Dog' ? (
                      <Dog className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Cat className="w-6 h-6 text-blue-600" />
                    )}
                    <h3 className="text-2xl font-semibold">{breed.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{breed.characteristics}</p>
                  <p className="text-blue-600 font-semibold">{breed.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Shield className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Guarantee</h3>
              <p className="text-gray-600">
                All our pets come with a comprehensive health guarantee
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Breeding</h3>
              <p className="text-gray-600">
                We work with responsible breeders who prioritize animal welfare
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Lifetime support and guidance for your pet's well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest pet care tips and updates</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-blue-800 text-white px-6 py-2 rounded-r-md hover:bg-blue-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;