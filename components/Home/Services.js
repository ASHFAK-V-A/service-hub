import React from "react";
import ConstructionIcon from "@mui/icons-material/ConstructionOutlined";
import BuildIcon from '@mui/icons-material/BuildOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import CleaningServicesIcon from '@mui/icons-material/CleanHandsOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import FormatPaintIcon from '@mui/icons-material/FormatPaintOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
function Services() {
  const servicesList = [
    {
      icon: <ConstructionIcon sx={{fontSize: "40px"}} color="action" />,
      title: "Assembly",
    },
    {
        icon: <BuildIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Mounting",
      },
      {
        icon: <LocalShippingIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Moving",
        
      },
      {
        icon: <CleaningServicesIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Cleaning",
      },
      {
        icon: <ConstructionIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Outdoor Help",
      },
      {
        icon: <HomeIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Home Repairs",
      },
      {
        icon: <FormatPaintIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Painting",
      },
      {
        icon: <WhatshotIcon sx={{fontSize: "40px"}} color="action"/>,
        title: "Trending",
      },

  ];

  return <div className="flex justify-center  flex-wrap gap-17">

{servicesList.map((service, index) => (
  <div key={index} className="service items-center mt-10"> 
    <div className="service-icon">{service.icon}</div>
    <div className="service-title flex text-1xl font-bold">{service.title}</div>
  </div>
))}

  </div>;
}

export default Services;
