import React from 'react';
import { ReactNode } from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <Box className={className} sx={{ textAlign: 'center' }}>
      <Paper 
        elevation={6}
        sx={{
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          mx: 'auto',
          mb: 2,
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ color: 'teal' }}>
          {icon}
        </Box>
      </Paper>
      <Typography variant="h6" fontWeight="bold" color="white" mb={1}>
        {title}
      </Typography>
      <Typography color="white" sx={{ opacity: 0.9 }}>
        {description}
      </Typography>
    </Box>
  );
};