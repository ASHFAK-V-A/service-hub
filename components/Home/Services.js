import React, { useEffect, useRef } from "react";
import ConstructionIcon from "@mui/icons-material/ConstructionOutlined";
import BuildIcon from '@mui/icons-material/BuildOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import CleaningServicesIcon from '@mui/icons-material/CleanHandsOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import FormatPaintIcon from '@mui/icons-material/FormatPaintOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton, Typography } from "@mui/material";
import gsap from "gsap";

function CustomTabPanel(props) {
  const { children, value, index, servicesList, handleChange, ...other } = props;

  return (
    <div

      role="tabpanel"
      className="transition-all duration-300"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Tab List shown on every panel */}
          <Box sx={{ position: 'relative', borderBottom: 1, borderColor: 'divider', mb: 2 }}>

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="service-tabs"
              TabIndicatorProps={{
                style: {
                  backgroundColor: servicesList[value]?.color || 'gray', // fallback in case

                },
              }}
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
              }}
            >
              {servicesList.map((service, i) => (


                <Tab
                  key={i}

                  label={
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} position={'relative'} color={value === i ? service?.color : 'gray'}>
                      {/* SVG as background */}
                      <Box Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          top: -14,
                          zIndex: -1,

                        }}
                      >
                        {value === i &&

                          <svg fill="none" height="80" viewBox="0 0 60 50" width="80">
                            <path
                              d="M18.8962 5.27305C25.849 -1.46104 32.1704 -0.338692 34.462 1.06424C39.9101 1.06424 51.4547 1.90601 54.049 5.27305C57.2919 9.48186 55.3461 21.0561 58.589 25.8662C61.8319 30.6762 56.2542 38.4926 44.4501 46.4593C32.646 54.4259 13.8374 46.4593 9.81618 46.4593C5.79502 46.4593 1.51443 40.146 0.606422 32.1794C-0.301583 24.2127 4.7573 22.1083 9.81618 21.0561C14.8751 20.0039 10.2053 13.6907 18.8962 5.27305Z"
                              fill={service.bgColor} opacity="0.5"
                            />
                          </svg>
                        }
                      </Box>


                      {service.icon}


                      <h1 className="mt-8 font-medium" style={{ fontSize: '16px', fontWeight: 400 }}>{service.title}</h1>
                    </Box>

                  }
                  {...a11yProps(i)}
                  sx={{
                    borderRadius: '10px',
                    padding: '10px',
                    textTransform: 'none',
                    minWidth: '150px',
                  }}

                  {...a11yProps(i)}

                />




              ))}
            </Tabs >
          </Box >

          {/* Tab Content */}
          <Box Box >
            <h2>{servicesList[index].title} Content</h2>
            <p>This is the content for <strong>{servicesList[index].title}</strong>.</p>
          </Box >
        </Box >
      )
      }
    </div >
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  servicesList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Services() {
  const servicesList = [
    { icon: <ConstructionIcon sx={{ fontSize: "40px" }} />, title: "Assembly", bgColor: 'rgba(146, 236, 161, 0.5)', color: 'rgba(34, 63, 40, 0.5)' },
    { icon: <BuildIcon sx={{ fontSize: "40px" }} />, title: "Mounting", bgColor: 'rgba(224, 103, 178, 0.5)', color: 'rgba(193, 58, 141, 0.5)' },
    { icon: <LocalShippingIcon sx={{ fontSize: "40px" }} />, title: "Moving", bgColor: 'rgba(255, 204, 0, 0.5)', color: 'rgba(137, 88, 15, 0.5)' },
    { icon: <CleaningServicesIcon sx={{ fontSize: "40px" }} />, title: "Cleaning", bgColor: 'rgba(0, 204, 255, 0.5)', color: 'rgba(14, 60, 106, 0.5)' },
    { icon: <ConstructionIcon sx={{ fontSize: "40px" }} />, title: "Outdoor Help", bgColor: 'rgba(0, 255, 127, 0.5)', color: 'rgba(0, 127, 63, 0.5)' },
    { icon: <HomeIcon sx={{ fontSize: "40px" }} />, title: "Home Repairs", bgColor: 'rgba(255, 0, 127, 0.5)', color: 'rgba(127, 0, 63, 0.5)' },
    { icon: <FormatPaintIcon sx={{ fontSize: "40px" }} />, title: "Painting", bgColor: 'rgba(127, 0, 255, 0.5)', color: 'rgba(70, 15, 126, 0.5)' },
    { icon: <WhatshotIcon sx={{ fontSize: "40px" }} />, title: "Trending", bgColor: 'rgba(255, 127, 0, 0.5)', color: 'rgba(127, 63, 0, 0.5)' },
  ];

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    // GSAP Fade-in Animation
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 160 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);
  return (
    <Box sx={{ width: '100%' }} ref={bannerRef}>
      {servicesList.map((_, index) => (
        <CustomTabPanel

          key={index}
          value={value}
          index={index}
          servicesList={servicesList}
          handleChange={handleChange}
        />
      ))}
    </Box>
  );
}

export default Services;