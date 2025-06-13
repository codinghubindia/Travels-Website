export interface Destination {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  bestTime: string;
}

export const destinations: Destination[] = [
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