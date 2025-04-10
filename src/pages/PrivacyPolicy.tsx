import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600">
            At Paw Naturals, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Personal information (name, email, address) when you make a purchase or contact us</li>
            <li>Payment information (processed securely through our payment provider)</li>
            <li>Usage data and cookies for website analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To process your orders and provide customer service</li>
            <li>To improve our website and services</li>
            <li>To send you marketing communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="text-gray-600">
            Under GDPR, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of your data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@paw-naturals.com
            <br />
            Address: 123 Pet Street, Animal City, AC 12345
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 