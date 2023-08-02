import { Box, Button, Container, Link, Typography } from "@mui/material";
import React from "react";

import imageHero from "../../images/banner-16.jpg";
import imageHero2 from "../../images/banner-17.jpg";
import imageHero3 from "../../images/banner-15.jpg";
import imageHero4 from "../../images/banner-25.jpg";
import { ArrowForwardIos } from "@mui/icons-material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import SectionIcons from "./SectionIcons";
import { useTheme } from "@emotion/react";

const mySlider = [
  { text: "MEN", link: imageHero3 },
  { text: "WOMEN", link: imageHero4 },
];
function Hero() {
  const them = useTheme()
  return (
    <Container sx={{ mt: 3 }} >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item}>
                <img src={item.link} alt="image" />
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                    textAlign: "left",
                  }}
                >
                  <Typography sx={{
                   color: them.palette.text.primary} }
                   variant="h6">LIST LIFE COLLECTION</Typography>
                  <Typography variant="h3">{item.text}</Typography>
                  <Typography variant="h4">
                    SALE UP TO <span className="spanColor">30% OFF</span>
                  </Typography>
                  <Typography variant="body1">
                    get free shipping on orders over $99.00{" "}
                  </Typography>
                  <Button variant="contained" sx={{ bgcolor: "#222", mt: 4 }}>
                    SHP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <Stack > */}

        <Box
          className=""
          sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}
        >
          <Box sx={{ position: "relative" }}>
            <img src={imageHero2} className="imageMain" alt="image" />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "16px" }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 20% OFF
              </Typography>

              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  mt: 3,
                  fontSize: "16px",
                  "&:hover": { color: "red" },
                }}
              >
                SHOP NOW
                <ArrowForwardIos />
              </Link>
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img src={imageHero} className="imageMain" alt="image" />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "16px" }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 20% OFF
              </Typography>

              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  mt: 3,
                  fontSize: "16px",
                  "&:hover": { color: "red" },
                }}
              >
                SHOP NOW
                <ArrowForwardIos />
              </Link>
            </Box>
          </Box>
        </Box>
        {/* </Stack> */}
      </Box>
      <SectionIcons />
    </Container>
  );
}

export default Hero;
