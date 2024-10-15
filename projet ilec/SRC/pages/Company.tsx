import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Company</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Company Office"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">TechInnovate Solutions</h2>
          <p className="text-gray-600 mb-4">
            TechInnovate Solutions is a cutting-edge software development company specializing in AI-driven applications and cloud solutions. Founded in 2020, we've quickly grown to become a leader in innovative tech solutions for businesses of all sizes.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Custom Software Development</li>
              <li>AI and Machine Learning Solutions</li>
              <li>Cloud Migration and Management</li>
              <li>Mobile App Development</li>
              <li>IT Consulting</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <div className="flex flex-col space-y-2">
              <ContactInfo icon={<MapPin />} text="123 Tech Street, Innovation City, 12345" />
              <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
              <ContactInfo icon={<Mail />} text="info@techinnovate.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center text-gray-600">
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

export default Company;