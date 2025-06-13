import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  Avatar, 
  IconButton, 
  Rating,
  Fade,
  Grow,
  useTheme,
  useMediaQuery,
  Badge
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPause, 
  FaPlay, 
  FaArrowLeft, 
  FaArrowRight 
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define styled components
const TestimonialPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  }
}));

const KeyboardHintBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    right: -3,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  }
}));

// Testimonial data
const testimonials = [
  {
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'Sarah Johnson',
    company: 'Travel Enthusiast',
    testimonial: 'Amazing experience! The Kashmir tour was absolutely breathtaking. Every detail was perfectly planned and the service was exceptional. I would definitely recommend this to anyone looking for a memorable vacation.',
    rating: 5
  },
  {
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'Michael Chen',
    company: 'Adventure Seeker',
    testimonial: 'The Himachal Pradesh adventure tour exceeded all my expectations. From river rafting to mountain trekking, every activity was thrilling. The guides were knowledgeable and safety was their top priority.',
    rating: 5
  },
  {
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'Emily Rodriguez',
    company: 'Family Traveler',
    testimonial: 'Perfect family vacation in Kerala! The backwater cruise was magical and the kids loved every moment. The accommodation was comfortable and the local cuisine was delicious. Highly recommended!',
    rating: 4
  },
  {
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'David Wilson',
    company: 'Solo Traveler',
    testimonial: "I' had the time of my life during the Goa trip. As a solo traveler, I felt safe and welcomed everywhere. The beaches were pristine and the nightlife was vibrant. Can't wait to book my next adventure!",
    rating: 5
  },
  {
    avatar: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'Jessica Brown',
    company: 'Photography Enthusiast',
    testimonial: "Rajasthan's colorful culture and majestic architecture were a photographer's dream. Every corner offered a new perspective to capture. The local guides were excellent.",
    rating: 4
  },
  {
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    name: 'Robert Garcia',
    company: 'Luxury Traveler',
    testimonial: 'The accommodations and service throughout our Andaman Islands tour were top-notch. Every detail was meticulously planned, and the staff went above and beyond to make our stay memorable.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  // Settings for the slider
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: () => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          bgcolor: 'primary.light',
          opacity: 0.4,
          mx: 0.5,
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 0.7,
            transform: 'scale(1.2)'
          }
        }}
      />
    )
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard events when focused on the slider container
      if (document.activeElement !== sliderContainerRef.current) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case ' ':
          event.preventDefault(); // Prevent page scrolling
          toggleAutoPlay();
          break;
        default:
          break;
      }
    };

    // Add event listeners
    const sliderElement = sliderContainerRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('keydown', handleKeyDown);
    }

    // Focus handling to show keyboard hints
    const handleFocus = () => setShowKeyboardHints(true);
    const handleBlur = () => setShowKeyboardHints(false);

    if (sliderElement) {
      sliderElement.addEventListener('focus', handleFocus);
      sliderElement.addEventListener('blur', handleBlur);
    }

    // Cleanup
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('keydown', handleKeyDown);
        sliderElement.removeEventListener('focus', handleFocus);
        sliderElement.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(90deg, #00897B 0%, #26A69A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Traveler Stories
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Discover what our customers have to say about their experiences
          </Typography>
        </Box>
        
        <Box 
          sx={{ position: 'relative', mx: 2 }}
          ref={sliderContainerRef}
          tabIndex={0}
          aria-label="Testimonial slider. Use arrow keys to navigate"
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ 
              textAlign: 'center', 
              mb: 2, 
              color: 'text.secondary',
              opacity: showKeyboardHints ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <Box component="span" sx={{ mx: 1, display: 'inline-flex', alignItems: 'center' }}>
              <FaArrowLeft style={{ fontSize: '0.8rem', marginRight: '4px' }} /> Previous
            </Box>
            <Box component="span" sx={{ mx: 1, display: 'inline-flex', alignItems: 'center' }}>
              <FaArrowRight style={{ fontSize: '0.8rem', marginRight: '4px' }} /> Next
            </Box>
            <Box component="span" sx={{ mx: 1 }}>Space: Toggle Autoplay</Box>
          </Typography>
          
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ p: 2 }}>
                <Grow in={true} timeout={500 + index * 200}>
                  <TestimonialPaper elevation={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        sx={{ 
                          width: 64, 
                          height: 64,
                          border: 4,
                          borderColor: 'primary.light',
                          mr: 2
                        }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="primary.main" fontWeight="medium">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontStyle: 'italic',
                          mb: 2,
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        "{testimonial.testimonial}"
                      </Typography>
                    </Box>
                    <Rating 
                      value={testimonial.rating} 
                      readOnly 
                      precision={0.5}
                      sx={{ color: 'secondary.main' }}
                    />
                  </TestimonialPaper>
                </Grow>
              </Box>
            ))}
          </Slider>

          {/* Navigation Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, gap: 2 }}>
            <KeyboardHintBadge
              badgeContent={<FaArrowLeft style={{ fontSize: '0.8rem' }} />}
              invisible={!showKeyboardHints}
            >
              <NavigationButton 
                onClick={handlePrevious}
                aria-label="Previous testimonial"
                size="large"
              >
                <FaChevronLeft />
              </NavigationButton>
            </KeyboardHintBadge>
            
            <IconButton
              onClick={toggleAutoPlay}
              color="primary"
              aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
              sx={{ 
                bgcolor: 'primary.light',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.main',
                }
              }}
            >
              {isAutoPlaying ? <FaPause /> : <FaPlay />}
            </IconButton>
            
            <KeyboardHintBadge
              badgeContent={<FaArrowRight style={{ fontSize: '0.8rem' }} />}
              invisible={!showKeyboardHints}
            >
              <NavigationButton 
                onClick={handleNext}
                aria-label="Next testimonial" 
                size="large"
              >
                <FaChevronRight />
              </NavigationButton>
            </KeyboardHintBadge>
          </Box>

          {/* Current slide indicator */}
          <Typography 
            variant="caption" 
            color="text.secondary" 
            sx={{ display: 'block', textAlign: 'center', mt: 2 }}
          >
            Showing testimonial {currentSlide + 1} of {testimonials.length}
          </Typography>
        </Box>

        {/* Statistics */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 6, gap: 4 }}>
            <Box sx={{ width: { xs: '45%', md: '22%' }, textAlign: 'center' }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  py: 3, 
                  px: 2,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
                }}
              >
                <Typography 
                  variant="h3" 
                  color="primary.main" 
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  98%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Satisfaction Rate
                </Typography>
              </Paper>
            </Box>
            
            <Box sx={{ width: { xs: '45%', md: '22%' }, textAlign: 'center' }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  py: 3, 
                  px: 2,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
                }}
              >
                <Typography 
                  variant="h3" 
                  color="primary.main" 
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  50K+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Happy Travelers
                </Typography>
              </Paper>
            </Box>
            
            <Box sx={{ width: { xs: '45%', md: '22%' }, textAlign: 'center' }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  py: 3, 
                  px: 2,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
                }}
              >
                <Typography 
                  variant="h3" 
                  color="primary.main" 
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  4.9
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Rating
                </Typography>
              </Paper>
            </Box>
            
            <Box sx={{ width: { xs: '45%', md: '22%' }, textAlign: 'center' }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  py: 3, 
                  px: 2,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)'
                }}
              >
                <Typography 
                  variant="h3" 
                  color="primary.main" 
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  100+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Destinations
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};