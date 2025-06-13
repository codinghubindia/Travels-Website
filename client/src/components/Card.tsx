import React from 'react';
import { ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100
        ${hoverable ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface DestinationCardProps {
  title: string;
  price: string;
  image: string;
  className?: string;
  onViewDetails?: () => void;
  isLoading?: boolean;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ 
  title, 
  price, 
  image, 
  className = '',
  onViewDetails,
  isLoading = false
}) => {
  return (
    <Card hoverable className={`group ${className}`}>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="text-gray-500 text-sm mt-2">Loading...</p>
            </div>
          </div>
        ) : (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-teal-600 font-bold text-sm">{price}</span>
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">Starting From <span className="text-teal-600 font-bold text-lg">{price}</span></p>
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            VIEW DETAILS
          </button>
        )}
      </div>
    </Card>
  );
};

interface TourPackageCardProps {
  title: string;
  image: string;
  className?: string;
  onViewDetails?: () => void;
  isLoading?: boolean;
}

export const TourPackageCard: React.FC<TourPackageCardProps> = ({ 
  title, 
  image, 
  className = '',
  onViewDetails,
  isLoading = false
}) => {
  return (
    <Card hoverable className={`group ${className}`}>
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="text-gray-500 text-sm mt-2">Loading...</p>
            </div>
          </div>
        ) : (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-bold text-xl text-white mb-2 drop-shadow-lg">{title}</h3>
            </div>
          </>
        )}
      </div>
      <div className="p-6 text-center">
        <button 
          onClick={onViewDetails}
          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          VIEW DETAILS
        </button>
      </div>
    </Card>
  );
};

interface TestimonialCardProps {
  avatar: string;
  name: string;
  company: string;
  testimonial: string;
  className?: string;
  isActive?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  avatar, 
  name, 
  company, 
  testimonial, 
  className = '',
  isActive = false
}) => {
  return (
    <Card className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100 shadow-2xl' : 'opacity-70 scale-95'} ${className}`}>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <img 
            src={avatar} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-teal-100"
            loading="lazy"
          />
          <div>
            <h4 className="font-bold text-lg text-gray-800">{name}</h4>
            <p className="text-teal-600 font-medium">{company}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg italic">"{testimonial}"</p>
        <div className="flex text-yellow-400 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </Card>
  );
};