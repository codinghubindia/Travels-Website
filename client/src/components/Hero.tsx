import React, { useState } from 'react';
import { Button } from './Button';
import { BookingModal } from './BookingModal';
import { Play, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Tropical Adventure"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30 animate-float">
          <div className="relative w-full h-full">
            <div className="absolute inset-4 bg-yellow-400 rounded-full shadow-lg"></div>
            <div className="absolute top-0 left-1/2 w-1 h-8 bg-yellow-400 transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-yellow-400 transform -translate-x-1/2"></div>
            <div className="absolute left-0 top-1/2 w-8 h-1 bg-yellow-400 transform -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-8 h-1 bg-yellow-400 transform -translate-y-1/2"></div>
            <div className="absolute top-2 right-2 w-6 h-1 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute top-2 left-2 w-6 h-1 bg-yellow-400 transform -rotate-45"></div>
            <div className="absolute bottom-2 right-2 w-6 h-1 bg-yellow-400 transform -rotate-45"></div>
            <div className="absolute bottom-2 left-2 w-6 h-1 bg-yellow-400 transform rotate-45"></div>
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-teal-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-yellow-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Award size={16} className="mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Award Winning Travel Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block animate-fade-in-up">Discover Your Next</span>
            <span className="block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">
            Choose from our curated experiences, customized for every kind of traveler. 
            Create memories that last a lifetime with our expert-guided tours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-900">
            <Button 
              size="lg" 
              className="group relative overflow-hidden"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>
            
            <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Video
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up animation-delay-1200">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50K+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">200+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9★</div>
              <div className="text-sm text-white/80">Customer Rating</div>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium animate-fade-in-up animation-delay-1500">
            <div className="flex items-center group">
              <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-400 mr-3 group-hover:scale-y-125 transition-transform"></span>
              <span className="group-hover:text-yellow-400 transition-colors">Easy Booking</span>
            </div>
            <div className="flex items-center group">
              <span className="w-1 h-8 bg-gradient-to-b from-teal-400 to-blue-400 mr-3 group-hover:scale-y-125 transition-transform"></span>
              <span className="group-hover:text-teal-400 transition-colors">Curated Destinations</span>
            </div>
            <div className="flex items-center group">
              <span className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-400 mr-3 group-hover:scale-y-125 transition-transform"></span>
              <span className="group-hover:text-green-400 transition-colors">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        type="book"
      />
    </>
  );
};