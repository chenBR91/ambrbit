import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import About from "./pages/About/About.js";
//import TopNav from "./components/Header/TopNav.js";
import MenuLeft from "./components/MenuLeft/MenuLeft.js";
import "./App.css";

// ui
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

// images
import HeaderBackground from "./components/Header/HeaderBackground.js";

// use with globaly
//const withLeftMenu = 240;

function Main() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />

        <MenuLeft />

        <Box component="main" sx={{width: "100%", border: "1px solid red"}}>
          <Toolbar />
          <HeaderBackground />
        </Box>
      </Box>

      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
