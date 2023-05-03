import React, { useState } from "react";
import "./Header.css";
//import TopNav from "./TopNav";

// ui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";


// icons
import { FiMenu } from "react-icons/fi";

const categoriesMenu = [
  "Units Conversion",
  "Math Calculators",
  "Analytic Geometry",
  "Physics",
  "Electric",
  "Solved Examples",
];

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOpenCloseNav = () => {
    setToggleMenu(!toggleMenu);
    console.log('toggleMenu', toggleMenu);
  }


  const NavBar = (props) => {
    return (
      <>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenCloseNav}
            color="inherit"
          >
            <FiMenu />
          </IconButton>
          {toggleMenu ? (
              <ul className="toggle-open">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
              </ul>
          ) : (
              <></>
          )}
          
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <ul className="top-menu">
            {categoriesMenu.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </Box>
      </>
    );
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <div style={{ width: 220 }}>
          <h2>AmbrBit</h2>
        </div>

        <div>
          <NavBar />
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default Header;

{
  /* <div>
          <ul className="top-menu">
            <li>math</li>
            <li>circle</li>
            <li>calc</li>
          </ul>
        </div> */
}

{
  /* <TopNav/> */
}
{
  /* <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Clipped drawer
        </Typography>
      </Toolbar> */
}
