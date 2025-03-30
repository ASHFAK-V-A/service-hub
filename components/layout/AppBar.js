import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "white", // Customize color if needed
  boxShadow: "none",
  padding: "3px 0",
  textDecoration: "underline",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"],
});
export default function CustomDrawer() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      <AppBar position="relative" >
        <Container className={`${isMobile ? "!px-0" : ""}`}>
          {" "}
          {/* Limits width and centers header */}
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Hide menu button on desktop */}
            {isMobile && (
              <IconButton
                onClick={toggleDrawer}
                edge="start"
                sx={{ color: "blue", fontWeight: "none" }}
              >
                <MenuIcon className="header-toggler" />
              </IconButton>
            )}
            <h1
              className={`${josefinSans.className} text-[43px] text-blue-600   ${
                isMobile ? "text-center w-full mt-2" : ""
              }`}
            >
              QuickFix
            </h1>

            {/* Show navigation links on desktop */}
            {!isMobile && (
              <nav className="hidden md:flex space-x-6 text-1xl font-bold items-center">
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Services
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Sign up / Log in
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 font-bold border-2 border-blue-600 rounded-lg px-4 py-2 transition-all no-underline hover:no-underline hover:bg-blue-600 hover:text-white w-50 text-center"
                >
                  Become an Expert
                </Link>
              </nav>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}
              >
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li
                style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}
              >
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-blue-600"
                >
                  Services
                </Link>
              </li>
              <li
                style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}
              >
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-blue-600"
                >
                  Sign up / Log in
                </Link>
              </li>
              <li style={{ padding: "10px 20px" }}>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-blue-600"
                >
                  Become an Expert
                </Link>
              </li>
            </ul>
          </nav>
        </Drawer>
      )}
    </Box>
  );
}
