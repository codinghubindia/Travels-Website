export interface TourPackage {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
  itinerary: string[];
}

export const tourPackages: TourPackage[] = [
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