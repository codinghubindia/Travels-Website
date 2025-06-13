import React from 'react';
import { FaClock, FaCreditCard, FaShieldAlt, FaBookOpen } from 'react-icons/fa';
import { IconCard } from './IconCard';

const advantages = [
  {
    icon: <FaClock size={32} />,
    title: 'Save Time',
    description: 'No More Switching For Packages Or Plans.'
  },
  {
    icon: <FaCreditCard size={32} />,
    title: 'Save Money',
    description: 'Compare, Negotiate, And Choose The Best.'
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: 'Trusted Network',
    description: 'A Trusted Network Of 7000+ Travel Agents'
  },
  {
    icon: <FaBookOpen size={32} />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips From Trusted Agents'
  }
];

export const Advantages: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Advantages
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            You can rely on our amazing features list and also our customer services will be a great experience for you without doubt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((advantage, index) => (
            <IconCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};