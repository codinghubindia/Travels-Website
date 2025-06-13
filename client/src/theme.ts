import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14b8a6', // teal-500
      light: '#5eead4', // teal-300
      dark: '#0d9488', // teal-600
    },
    secondary: {
      main: '#eab308', // yellow-500
      light: '#fde047', // yellow-300
      dark: '#ca8a04', // yellow-600
    },
    background: {
      default: '#f9fafb', // gray-50
      paper: '#ffffff',
    },
    error: {
      main: '#ef4444', // red-500
    },
    success: {
      main: '#22c55e', // green-500
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme; 