import { createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E2233",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFE200",
      contrastText: "#0E2233",
    },
    terciary: {
      main: "#2F2F2F",
      contrastText: "#fff",
    },
    cuaternary: {
      main: "#5D5D5D",
      contrastText: "#fff",
    },
    badgeColor: {
      main: "#FF0000",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 600,
        fontFamily: "Kanit",
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          "-webkit-transform": "scale(1)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-root": {
            fontWeight: 600,
            color: "#5c5c5c",
            "&.Mui-disabled": {
              backgroundColor: "#fff",
            },
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#5c5c5c",
          fontWeight: 600,
          minWidth: 223,
        },
        filled: {
          fontWeight: 600,
          color: "#5c5c5c",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: 223,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 4,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
