import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Nunito } from "next/font/google";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Base({ children }) {
  return (
    
    <main className={nunito.className}>
      <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <AppBar />
        {children}
        <Footer />
      </StyledEngineProvider>
    </main>
  );
}

export default Base;
