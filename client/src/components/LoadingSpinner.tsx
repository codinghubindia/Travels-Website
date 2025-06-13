import React from 'react';
import { 
  CircularProgress, 
  Box, 
  Typography, 
  LinearProgress, 
  Container,
  Paper,
  Grid,
  Fade,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Flight, Check } from '@mui/icons-material';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeMap = {
    sm: 20,
    md: 40,
    lg: 60
  };

  return (
    <Box className={className} sx={{ display: 'inline-block' }}>
      <CircularProgress
        size={sizeMap[size]}
        thickness={3.6}
        sx={{ color: 'primary.main' }}
      />
    </Box>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  progress?: number;
  total?: number;
}

const AnimatedParticle = styled(Box)(() => ({
  position: 'absolute',
  borderRadius: '50%',
  animation: 'particle-animation 8s infinite ease-in-out',
  '@keyframes particle-animation': {
    '0%, 100%': {
      transform: 'translate(0, 0)',
    },
    '50%': {
      transform: 'translate(20px, -20px)',
    },
  }
}));

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isLoading, 
  progress = 0, 
  total = 100 
}) => {
  if (!isLoading) return null;

  const percentage = total > 0 ? Math.round((progress / total) * 100) : 0;
  
  const loadingSteps = [
    { label: 'Loading destinations...', threshold: 20 },
    { label: 'Preparing tour packages...', threshold: 50 },
    { label: 'Finalizing experience...', threshold: 80 },
  ];

  return (
    <Fade in={isLoading}>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', position: 'relative' }}>
            {/* Animated particles */}
            <AnimatedParticle 
              sx={{ 
                width: 12, 
                height: 12, 
                bgcolor: 'secondary.main',
                top: -30,
                left: '10%',
                animationDelay: '0s',
                opacity: 0.7,
              }} 
            />
            <AnimatedParticle 
              sx={{ 
                width: 8, 
                height: 8, 
                bgcolor: 'primary.main',
                top: 20,
                right: '15%',
                animationDelay: '1s',
                opacity: 0.5,
              }} 
            />
            <AnimatedParticle 
              sx={{ 
                width: 16, 
                height: 16, 
                bgcolor: 'info.main',
                bottom: -40,
                right: '25%',
                animationDelay: '2s',
                opacity: 0.6,
              }} 
            />
          
            {/* Logo animation */}
            <Box sx={{ mb: 4, position: 'relative' }}>
              <Paper
                elevation={8}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    top: '-50%',
                    left: '-50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    animation: 'rotate 8s linear infinite',
                    '@keyframes rotate': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  }}
                />
                <Avatar
                  sx={{
                    bgcolor: 'transparent',
                    width: 60,
                    height: 60,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.1)' },
                    },
                  }}
                >
                  <Flight
                    sx={{
                      fontSize: 40,
                      color: 'white',
                      animation: 'fly 3s ease-in-out infinite',
                      '@keyframes fly': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px) rotate(10deg)' },
                      },
                    }}
                  />
                </Avatar>
              </Paper>
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #14b8a6 30%, #0ea5e9 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'pulse-text 2s infinite',
                '@keyframes pulse-text': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.8 },
                },
              }}
            >
              Preparing Your Journey
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Loading amazing destinations and experiences...
            </Typography>

            {/* Progress bar */}
            <Box sx={{ mb: 2, position: 'relative' }}>
              <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                  height: 10,
                  borderRadius: 2,
                  mb: 1,
                  background: 'rgba(0,0,0,0.05)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #14b8a6 0%, #0ea5e9 100%)',
                    borderRadius: 2,
                  },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {percentage}% Complete
                </Typography>
                <Typography variant="body2" color="primary.main" fontWeight="medium">
                  {progress}/{total} Assets
                </Typography>
              </Box>
            </Box>

            {/* Loading steps */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {loadingSteps.map((step, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {percentage > step.threshold ? (
                      <Check
                        fontSize="small"
                        sx={{
                          color: 'success.main',
                          mr: 1,
                          animation: 'check-appear 0.5s ease-out',
                          '@keyframes check-appear': {
                            '0%': {
                              opacity: 0,
                              transform: 'scale(0)',
                            },
                            '100%': {
                              opacity: 1,
                              transform: 'scale(1)',
                            },
                          },
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: percentage > step.threshold ? 'primary.main' : 'grey.300',
                          mr: 1,
                        }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        color: percentage > step.threshold ? 'primary.main' : 'text.disabled',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {step.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};