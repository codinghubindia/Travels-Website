import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { TourPackageCard } from './Card';
import { Modal } from './Modal';
import { BookingModal } from './BookingModal';
import { TourPackage } from '../data/tourPackages';
import { useImagePreloader } from '../hooks/useImagePreloader';
import { fetchTopSellingTourPackages } from '../services/api';
import { Box, CircularProgress, Typography } from '@mui/material';

export const TourPackages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; type: 'book' | 'quote' | 'customize' }>({
    isOpen: false,
    type: 'book'
  });
  
  // Fetch tour packages using React Query
  const { data: tourPackages, isLoading, error } = useQuery({
    queryKey: ['top-selling-packages'],
    queryFn: fetchTopSellingTourPackages
  });
  
  const itemsPerPage = 6;
  const totalPages = tourPackages ? Math.ceil(tourPackages.length / itemsPerPage) : 0;
  
  const currentPackages = tourPackages ? tourPackages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  ) : [];

  const allImages = tourPackages ? tourPackages.map(pkg => pkg.image) : [];
  const { imagesLoaded } = useImagePreloader(allImages);

  const handleViewDetails = (tourPackage: TourPackage) => {
    setSelectedPackage(tourPackage);
  };

  const handleBooking = (type: 'book' | 'quote' | 'customize') => {
    setBookingModal({ isOpen: true, type });
    setSelectedPackage(null);
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
      <Box className="py-20 bg-white" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="400px">
        <CircularProgress size={60} />
        <Typography variant="h6" mt={3}>Loading tour packages...</Typography>
      </Box>
    );
  }

  // Show error state
  if (error || !tourPackages) {
    return (
      <Box className="py-20 bg-white" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="400px">
        <Typography variant="h5" color="error">Failed to load tour packages</Typography>
        <Typography variant="body1" mt={2}>Please try again later or contact support.</Typography>
      </Box>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Top Selling <span className="text-teal-600">Tour Packages</span> of India
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news and happenings through Infinite.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentPackages.map((tour) => (
            <TourPackageCard
              key={tour.id}
              title={tour.title}
              image={tour.image}
              onViewDetails={() => handleViewDetails(tour)}
              isLoading={!imagesLoaded}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevPage}
            disabled={totalPages <= 1}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
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
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <FaChevronRight size={20} className="text-teal-600 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, tourPackages.length)} of {tourPackages.length} packages
          </p>
        </div>
      </div>

      {/* Package Details Modal */}
      <Modal
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        title={selectedPackage?.title}
      >
        {selectedPackage && (
          <div className="space-y-6">
            <img
              src={selectedPackage.image}
              alt={selectedPackage.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Package Information</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Duration:</span> {selectedPackage.duration}</p>
                  <p><span className="font-medium">Price:</span> <span className="text-teal-600 font-bold">{selectedPackage.price}</span></p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Highlights</h4>
                <ul className="space-y-1 text-sm">
                  {selectedPackage.highlights.map((highlight, index) => (
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
              <p className="text-gray-700 leading-relaxed">{selectedPackage.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Itinerary</h4>
              <ul className="space-y-2">
                {selectedPackage.itinerary.map((day, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700">{day}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => handleBooking('book')}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Book Package
              </button>
              <button 
                onClick={() => handleBooking('customize')}
                className="flex-1 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Customize Package
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
        packageTitle={selectedPackage?.title}
        packagePrice={selectedPackage?.price}
      />
    </section>
  );
};