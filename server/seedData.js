const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Destination = require('./models/destination');
const TourPackage = require('./models/tourPackage');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/traveller';

// Sample data from client/src/data/destinations.ts
const destinations = [
  {
    id: 'jammu-kashmir',
    title: 'JAMMU & KASHMIR',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Experience the breathtaking beauty of the Kashmir Valley, often called "Paradise on Earth". From snow-capped mountains to pristine lakes, this destination offers unforgettable memories.',
    highlights: ['Dal Lake Shikara Ride', 'Gulmarg Gondola', 'Pahalgam Valley', 'Sonamarg Glacier', 'Mughal Gardens'],
    duration: '6 Days / 5 Nights',
    bestTime: 'April to October'
  },
  {
    id: 'himachal-pradesh',
    title: 'HIMACHAL PRADESH',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Discover the charm of hill stations, ancient temples, and adventure activities in the lap of the Himalayas. Perfect for nature lovers and adventure enthusiasts.',
    highlights: ['Shimla Mall Road', 'Manali Adventure Sports', 'Dharamshala Monasteries', 'Kullu Valley', 'Rohtang Pass'],
    duration: '7 Days / 6 Nights',
    bestTime: 'March to June, September to November'
  },
  {
    id: 'goa',
    title: 'GOA',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Relax on pristine beaches, explore Portuguese heritage, and enjoy vibrant nightlife in India\'s favorite beach destination.',
    highlights: ['Baga Beach', 'Old Goa Churches', 'Spice Plantations', 'Dudhsagar Falls', 'Beach Shacks'],
    duration: '5 Days / 4 Nights',
    bestTime: 'November to March'
  },
  {
    id: 'assam',
    title: 'ASSAM',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Explore the wild beauty of Assam with its tea gardens, wildlife sanctuaries, and rich cultural heritage in Northeast India.',
    highlights: ['Kaziranga National Park', 'Tea Garden Tours', 'Majuli Island', 'Kamakhya Temple', 'River Cruises'],
    duration: '6 Days / 5 Nights',
    bestTime: 'October to April'
  },
  {
    id: 'maharashtra',
    title: 'MAHARASHTRA',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'From bustling Mumbai to serene hill stations, Maharashtra offers diverse experiences including historical forts and beautiful landscapes.',
    highlights: ['Mumbai City Tour', 'Lonavala Hill Station', 'Ajanta Ellora Caves', 'Mahabaleshwar', 'Pune Heritage'],
    duration: '8 Days / 7 Nights',
    bestTime: 'October to March'
  },
  {
    id: 'kerala',
    title: 'KERALA',
    price: '₹4999/-',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Experience God\'s Own Country with its backwaters, spice plantations, and Ayurvedic treatments in this tropical paradise.',
    highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Kochi Fort', 'Thekkady Wildlife', 'Ayurvedic Spa'],
    duration: '7 Days / 6 Nights',
    bestTime: 'September to March'
  },
  {
    id: 'rajasthan',
    title: 'RAJASTHAN',
    price: '₹5999/-',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Step into the royal heritage of Rajasthan with magnificent palaces, desert safaris, and vibrant culture.',
    highlights: ['Jaipur City Palace', 'Udaipur Lake Palace', 'Jaisalmer Desert Safari', 'Jodhpur Blue City', 'Pushkar Camel Fair'],
    duration: '9 Days / 8 Nights',
    bestTime: 'October to March'
  },
  {
    id: 'uttarakhand',
    title: 'UTTARAKHAND',
    price: '₹5499/-',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Discover the spiritual and natural beauty of Uttarakhand with its holy cities, hill stations, and adventure activities.',
    highlights: ['Rishikesh Adventure', 'Haridwar Ganga Aarti', 'Nainital Lake', 'Mussoorie Queen of Hills', 'Valley of Flowers'],
    duration: '6 Days / 5 Nights',
    bestTime: 'March to June, September to November'
  }
];

// Sample data from client/src/data/tourPackages.ts
const tourPackages = [
  {
    id: 'golden-temple',
    title: 'GOLDEN TEMPLE TOUR',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Experience the spiritual magnificence of the Golden Temple in Amritsar, one of the most sacred places in Sikhism.',
    price: '₹3999/-',
    duration: '3 Days / 2 Nights',
    highlights: ['Golden Temple Visit', 'Jallianwala Bagh', 'Wagah Border Ceremony', 'Local Cuisine Tasting'],
    itinerary: ['Day 1: Arrival and Golden Temple', 'Day 2: City Tour and Wagah Border', 'Day 3: Departure']
  },
  {
    id: 'kerala-tour',
    title: 'AMAZING KERALA TOUR',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Explore the backwaters, hill stations, and beaches of Kerala in this comprehensive tour package.',
    price: '₹7999/-',
    duration: '7 Days / 6 Nights',
    highlights: ['Alleppey Houseboat', 'Munnar Tea Gardens', 'Kochi Heritage Walk', 'Thekkady Wildlife Safari'],
    itinerary: ['Day 1-2: Kochi Exploration', 'Day 3-4: Munnar Hills', 'Day 5-6: Alleppey Backwaters', 'Day 7: Departure']
  },
  {
    id: 'kashmir-holiday',
    title: 'KASHMIR HOLIDAY TOUR',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Discover the paradise on earth with this comprehensive Kashmir tour covering all major attractions.',
    price: '₹8999/-',
    duration: '6 Days / 5 Nights',
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
    itinerary: ['Day 1-2: Srinagar and Dal Lake', 'Day 3-4: Gulmarg Adventure', 'Day 5-6: Pahalgam and Return']
  },
  {
    id: 'rajasthan-tour',
    title: 'RAJASTHAN TOUR',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Experience the royal heritage of Rajasthan with visits to magnificent palaces and desert landscapes.',
    price: '₹9999/-',
    duration: '8 Days / 7 Nights',
    highlights: ['Jaipur Pink City', 'Udaipur City of Lakes', 'Jaisalmer Desert Safari', 'Jodhpur Blue City'],
    itinerary: ['Day 1-2: Jaipur', 'Day 3-4: Udaipur', 'Day 5-6: Jaisalmer', 'Day 7-8: Jodhpur and Return']
  },
  {
    id: 'goa-trip',
    title: 'TRIP TO GOA',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Relax and unwind in Goa with beautiful beaches, water sports, and vibrant nightlife.',
    price: '₹5999/-',
    duration: '5 Days / 4 Nights',
    highlights: ['Beach Hopping', 'Water Sports', 'Old Goa Churches', 'Spice Plantation Tour'],
    itinerary: ['Day 1-2: North Goa Beaches', 'Day 3-4: South Goa and Heritage', 'Day 5: Departure']
  },
  {
    id: 'nainital-escape',
    title: 'NAINITAL ESCAPE',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Escape to the beautiful hill station of Nainital with its pristine lakes and mountain views.',
    price: '₹4999/-',
    duration: '4 Days / 3 Nights',
    highlights: ['Naini Lake Boating', 'Snow View Point', 'Naina Devi Temple', 'Mall Road Shopping'],
    itinerary: ['Day 1: Arrival and Lake Tour', 'Day 2: Sightseeing', 'Day 3: Adventure Activities', 'Day 4: Departure']
  },
  {
    id: 'himachal-adventure',
    title: 'HIMACHAL ADVENTURE',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Adventure-packed tour of Himachal Pradesh with trekking, river rafting, and mountain biking.',
    price: '₹6999/-',
    duration: '6 Days / 5 Nights',
    highlights: ['Manali Adventure Sports', 'Solang Valley Activities', 'Rohtang Pass', 'River Rafting'],
    itinerary: ['Day 1-2: Manali Arrival', 'Day 3-4: Adventure Activities', 'Day 5-6: Rohtang and Return']
  },
  {
    id: 'andaman-islands',
    title: 'ANDAMAN ISLANDS',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Explore the pristine beaches and coral reefs of the Andaman Islands with water sports and island hopping.',
    price: '₹12999/-',
    duration: '6 Days / 5 Nights',
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Island Hopping'],
    itinerary: ['Day 1-2: Port Blair', 'Day 3-4: Havelock Island', 'Day 5-6: Neil Island and Return']
  }
];

// MongoDB Connection
const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true
    });
    console.log('MongoDB connected successfully');
    
    // Clear existing data
    await Destination.deleteMany({});
    await TourPackage.deleteMany({});
    
    // Seed destinations
    await Destination.insertMany(destinations);
    console.log('Destinations data seeded successfully');
    
    // Seed tour packages
    await TourPackage.insertMany(tourPackages);
    console.log('Tour packages data seeded successfully');
    
    console.log('All data has been seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase(); 