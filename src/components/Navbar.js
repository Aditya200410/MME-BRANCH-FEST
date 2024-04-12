import { Box, Stack, Link, IconButton, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NotesIcon from '@mui/icons-material/Notes';

function Navbar({ onClick1, onClick2, onClick3, onClick4 }) {
  const linkStyles = {
    color: "white",
    cursor: "pointer",
    textDecoration: 'none',
    transition: ".2s ease",
    fontFamily: "Poppins, sans-serif",
    '&:hover': { textDecoration: "underline" },
  };

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const homeLink = isHomePage ? { text: 'Home', onClick: onClick1 } : { text: 'Home', to: "/" };

  const links = [
    homeLink,
    { text: 'events', onClick: onClick2, },
    { text: 'registration', onClick: onClick3, },
    { text: 'Contact', onClick: onClick4, }
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box sx={{ width: "98%", background: "#333333", color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: ".25rem 1.125rem", position: 'fixed', zIndex: "99" }}>
        <img style={{ width: "6.25rem", height: "6.25rem", }} src='./n.png' alt='Logo' />
        <Stack sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row", fontSize: "1.5rem", fontWeight: "bold", gap: "1rem" }}>
          {links.map((link, index) => (
            <Link key={index} className='text' component={link.to ? RouterLink : 'a'} to={link.to} href={link.to} sx={linkStyles} onClick={link.onClick}>
              {link.text}
            </Link>
          ))}
        </Stack>
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" }, }}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <NotesIcon sx={{ rotate: '180deg', fontSize: { xs: "24px" } }} />
        </IconButton>
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ '& .MuiDrawer-paper': { width: '250px', height: '250px', background: 'transparent', backdropFilter: 'blur(10px)', } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon sx={{ color: 'whitesmoke', fontSize: { xs: "24px" } }} />
          </IconButton>
        </Box>
        <Stack sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}>
          {links.map((link, index) => (
            <Link key={index} className='text' component={link.to ? RouterLink : 'a'} to={link.to} href={link.to} sx={{ ...linkStyles, display: 'block', textAlign: 'right', marginBottom: '1rem' }} onClick={link.onClick}>
              {link.text}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

export default Navbar;