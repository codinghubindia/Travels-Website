import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { DestinationCard } from './Card';
import { Modal } from './Modal';
import { BookingModal } from './BookingModal';
import { Destination } from '../data/destinations';
import { useImagePreloader } from '../hooks/useImagePreloader';
import { fetchDestinations } from '../services/api';
import { Box, CircularProgress, Typography } from '@mui/material';

export const PopularDestinations: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; type: 'book' | 'quote' | 'customize' }>({
    isOpen: false,
    type: 'book'
  });
  
  // Fetch destinations using React Query
  const { data: destinations, isLoading, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations
  });
  
  const itemsPerPage = 6;
  const totalPages = destinations ? Math.ceil(destinations.length / itemsPerPage) : 0;
  
  const currentDestinations = destinations ? destinations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  ) : [];

  const allImages = destinations ? destinations.map(dest => dest.image) : [];
  const { imagesLoaded } = useImagePreloader(allImages);

  const handleViewDetails = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleBooking = (type: 'book' | 'quote' | 'customize') => {
    setBookingModal({ isOpen: true, type });
    setSelectedDestination(null);
  };

  const nextPage = () => {
    if (totalPages > 0) {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  const prevPage = () => {
    if (totalPages > 0) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <Box className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="400px">
        <CircularProgress size={60} />
        <Typography variant="h6" mt={3}>Loading destinations...</Typography>
      </Box>
    );
  }

  // Show error state
  if (error || !destinations) {
    return (
      <Box className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="400px">
        <Typography variant="h5" color="error">Failed to load destinations</Typography>
        <Typography variant="body1" mt={2}>Please try again later or contact support.</Typography>
      </Box>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Most <span className="text-teal-600">Popular Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your perfect trip with our most loved and best-selling tour packages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              price={destination.price}
              image={destination.image}
              onViewDetails={() => handleViewDetails(destination)}
              isLoading={!imagesLoaded}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevPage}
            disabled={totalPages <= 1}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <FaChevronLeft size={20} className="text-teal-600 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'bg-teal-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            disabled={totalPages <= 1}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <FaChevronRight size={20} className="text-teal-600 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, destinations.length)} of {destinations.length} destinations
          </p>
        </div>
      </div>

      {/* Destination Details Modal */}
      <Modal
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
        title={selectedDestination?.title}
      >
        {selectedDestination && (
          <div className="space-y-6">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Package Details</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Duration:</span> {selectedDestination.duration}</p>
                  <p><span className="font-medium">Best Time:</span> {selectedDestination.bestTime}</p>
                  <p><span className="font-medium">Starting Price:</span> <span className="text-teal-600 font-bold">{selectedDestination.price}</span></p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Highlights</h4>
                <ul className="space-y-1 text-sm">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Description</h4>
              <p className="text-gray-700 leading-relaxed">{selectedDestination.description}</p>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => handleBooking('book')}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Book Now
              </button>
              <button 
                onClick={() => handleBooking('quote')}
                className="flex-1 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, type: 'book' })}
        type={bookingModal.type}
        packageTitle={selectedDestination?.title}
        packagePrice={selectedDestination?.price}
      />
    </section>
  );
};