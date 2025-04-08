import { useEffect, useRef } from "react";
import gsap from "gsap";
import SearchBar from "../shared/SearchBar";
import { Box } from "@mui/material";

function BannerSectionAndSearch() {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Fade-in Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(bannerRef.current, {

      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bannerRef.current, {

      duration: 0.5,
    });
  };

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[300px]  flex justify-center items-center text-white text-center overflow-hidden transition-all duration-300 mt-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Banner Content */}
      <div ref={textRef} className="z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">
          Need Help? <br /> We’re One Click Away!
        </h1>
        <p className="text-lg md:text-xl text-[#000] mb-6 ">
          Find professionals for repairs, cleaning, and more!
        </p>
        <Box width={"100%"} display={'flex'} justifyContent={'center'}>
          <SearchBar placeholder={"What do you need help with ?"} />
        </Box>
      </div>
    </div>
  );
}

export default BannerSectionAndSearch;
