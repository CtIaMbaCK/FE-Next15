// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        containedPrimary: {
          backgroundColor: 'black',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        },
        outlinedPrimary: {
          borderColor: '#007bff',
          color: '#007bff',
          '&:hover': {
            borderColor: '#0056b3',
            backgroundColor: '#e6f0ff',
          },
        },
      },
    },
  },
});

export default theme;
