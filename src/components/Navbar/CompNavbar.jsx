import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CompInput from "../Inputs/CompInput";
import logo from "../../assets/Logo Principal.png";
import { Button } from "@mui/material";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import Corazon from "../../assets/Corazon.svg";
import IconBag from "../../assets/IconBag.svg";
import UserIcon from "../../assets/UserIcon.svg";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { Fragment } from "react";
import { ShoppingBag } from "@mui/icons-material";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const lista = [
    "Marcas de vehículos",
    "Piezas de Repuesto",
    "Neumaticos",
    "Aceite de Motos",
    "Filtros",
    "Moda Motosport",
    "Ofertas",
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "76px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
            }}
          >
            <img src={logo} alt="" />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CompInput width={"375px"} placeholder={"Buscar"} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button>
                <img src={UserIcon} alt="user" />
                <Typography variant="label" fontSize={16}>
                  Mi cuenta
                </Typography>
              </Button>
              <Button>
                <Badge color="badgeColor" badgeContent="4">
                  <img src={Corazon} alt="bagde" />
                </Badge>
                <Typography variant="label" fontSize={16}>
                  Mi cesta
                </Typography>
              </Button>
              <Button>
                <Badge color="badgeColor" badgeContent="4">
                  <img src={Corazon} alt="corazon" />
                </Badge>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar
        color="terciary"
        position="static"
        sx={{
          height: "60px",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {lista.map((item, index) => (
            <Fragment key={index}>
              <Typography
                key={index}
                variant="label"
                fontSize={16}
                sx={{ cursor: "pointer", textTransform: "uppercase" }}
              >
                {item}
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Fragment>
          ))}
        </Container>
      </AppBar>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          height: "55px",
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="text" color="terciary">
            <MenuIcon />
          </Button>
          <Button variant="text" color="terciary">
            <MenuIcon />
          </Button>
          <Button variant="text" color="terciary">
            <ShoppingBag />
          </Button>
          <Button variant="text" color="terciary">
            <IconBag />
          </Button>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
