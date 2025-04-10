import React from 'react';
import { Heart, Leaf, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Paw Naturals</h1>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Paw Naturals was founded in 2010 with a simple mission: to provide healthy, happy pets to loving families. 
                What started as a small pet shop has grown into a trusted name in pet adoption and sales, known for our 
                commitment to animal welfare and customer satisfaction.
              </p>
              <p className="text-gray-600">
                We work closely with responsible breeders and animal shelters to ensure that every pet in our care receives 
                the best possible start in life. Our team of experienced professionals is dedicated to matching each pet 
                with the perfect family.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Animal Welfare</h3>
              <p className="text-gray-600">
                We prioritize the health and happiness of every pet in our care.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Breeding</h3>
              <p className="text-gray-600">
                We work only with responsible breeders who meet our high standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every pet comes with a health guarantee and proper documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                We provide lifetime support and guidance for pet owners.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in animal care and breeding, Sarah leads our team with passion and expertise.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
              <p className="text-gray-600 mb-2">Veterinarian</p>
              <p className="text-gray-600 text-sm">
                Our in-house veterinarian ensures all pets receive proper medical care and health checks.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-gray-600 mb-2">Pet Care Specialist</p>
              <p className="text-gray-600 text-sm">
                Emily's expertise in animal behavior helps match pets with their perfect families.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Perfect Pet?</h2>
          <p className="text-gray-600 mb-8">
            Visit our store or browse our available pets online to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pets"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View Available Pets
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 