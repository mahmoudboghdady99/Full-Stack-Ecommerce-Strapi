import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/header/Header";
import { useState } from "react";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { grey } from "@mui/material/colors";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null ? "light" 
  : localStorage.getItem("currentMode") === "light" ? "light"
  : "dark"
  );

  const darkTheme = createTheme({
      palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        myColor:{
          main: "#F6F9Fc"
        }
        }
      : {
          // palette values for dark mode
          myColor:{
            main: grey[300]
          }
        
        }),
  },
  });
  return (
    
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header setMyMode={setMyMode} />
        <Header2 />
        <Header3 />
        <Hero />
        <Main />
        <Footer />

        <ScrollToTop />
      </ThemeProvider>

  );
}

export default App;
