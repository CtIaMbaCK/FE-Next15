"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Liên Hệ", href: "#" },
    { label: "Tuyển Sinh", href: "#" },
    { label: "Đăng Nhập", href: "/login", isPrimary: true },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: "none", zIndex: 1, }}>
        <Toolbar sx={{ justifyContent: isMobile ?  " space-between" : "space-around", color: "black" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Image
              width={1000}
              height={1000}
              src="/logoVl.png"
              className="w-36"
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: item.isPrimary ? 1.1 : 1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      padding: "10px 20px",
                      ...(item.isPrimary
                        ? {
                            bgcolor: "#1565c0",
                            color: "white",
                            fontWeight: "light",
                            ":hover": { bgcolor: "#0d47a1" },
                          }
                        : {
                            fontWeight: "light",
                            ":hover": { bgcolor: "#d62134", color: "white" },
                          }),
                    }}
                  >
                    <Link
                      href={item.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {item.label}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item, idx) => (
            <ListItem key={idx} disablePadding onClick={() => setDrawerOpen(false)}>
              <ListItemButton component={Link} href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
