import React from 'react';
import { ReactNode } from 'react';
import { Button as MuiButton, styled } from '@mui/material';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

// Custom styled MUI Button
const StyledButton = styled(MuiButton)(({ theme }) => ({
  fontWeight: 600,
  borderRadius: 50,
  transition: 'all 0.3s',
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`,
  },
}));

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = ''
}) => {
  // Map custom variants to MUI variants and colors
  const getMuiProps = () => {
    const props: any = {
      variant: 'contained',
      color: 'primary',
    };
    
    switch (variant) {
      case 'primary':
        props.sx = {
          bgcolor: '#eab308', // yellow-500
          color: 'black',
          '&:hover': {
            bgcolor: '#ca8a04', // yellow-600
          }
        };
        break;
      case 'secondary':
        props.sx = {
          bgcolor: '#14b8a6', // teal-500
          '&:hover': {
            bgcolor: '#0d9488', // teal-600
          }
        };
        break;
      case 'outline':
        props.variant = 'outlined';
        props.sx = {
          borderWidth: 2,
          borderColor: '#14b8a6', // teal-500
          color: '#14b8a6',
          '&:hover': {
            bgcolor: '#14b8a6',
            color: 'white',
            borderWidth: 2,
            borderColor: '#14b8a6',
          }
        };
        break;
    }
    
    // Add size props
    const sizePx = {
      sm: { px: 2, py: 1, fontSize: '0.875rem' },
      md: { px: 3, py: 1.5, fontSize: '1rem' },
      lg: { px: 4, py: 2, fontSize: '1.125rem' },
    };
    
    props.sx = { ...props.sx, ...sizePx[size] };
    return props;
  };

  return (
    <StyledButton
      onClick={onClick}
      className={className}
      {...getMuiProps()}
    >
      {children}
    </StyledButton>
  );
};