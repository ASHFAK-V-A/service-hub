import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import ToolImage from "../../../assets/images/tools.webp";
import DoneIcon from '@mui/icons-material/Done';
function Badges() {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          borderRadius: "999px",
          borderColor: "green",
          color: "green",
          fontWeight: "bold",
          textTransform: "none",
          px: 3,
          py: 1,
        }}
      >
        General Furniture Assembly
      </Button>
      <Container >
        <Box

          height={"550px"}
          sx={{ backgroundColor: "rgba(186, 231, 255, 0.5)" }}
          mt={4}
          borderRadius={"20px"}
          position="relative"
          alignContent={"center"}
          className="lg:w-full"
        >
          <Box position="relative" width="100%" display={"flex"} justifyContent={"center"}   >
            <Image src={ToolImage} height={600} width={900} objectFit="contain" class="lg:w-[900px]" />
            <Box
              position="absolute"
              left={10}
              top="15%"
              transform="translateY(-50%)"
              zIndex={99}
              bgcolor="white"
              p={1}
              borderRadius="6px"
              width={400}
              height={350}
              textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}

            >
              <Box pt={6} >
                <Box display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"} mt={2} mb={2} ml={3}>
                  <Typography component={"h6"} fontWeight={600} fontSize={"24px"} align="start" mb={3}>Assembly</Typography>
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mb={2} gap={3}>
                    <DoneIcon /><Typography fontSize={"18px"} textAlign={'start'} lineHeight={1.5} fontWeight={400} >Assemble or disassemble furniture items by unboxing, building, and any cleanup.</Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mb={2} gap={3}>
                    <DoneIcon /><Typography fontSize={"18px"} textAlign={'start'} lineHeight={1.5} fontWeight={400}>Assemble or disassemble furniture items by unboxing, building, and any cleanup.</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container >
    </div >
  );
}

export default Badges;
