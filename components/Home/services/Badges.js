import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import ToolImage from "../../../assets/images/tools.webp";

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
      <Container>
        <Box
          width={"100%"}
          height={"550px"}
          sx={{ backgroundColor: "rgba(186, 231, 255, 0.5)" }}
          mt={4}
          borderRadius={"20px"}
          position="relative"
          alignContent={"center"}
        >
          <Box position="relative" width="100%" display={"flex"} justifyContent={"center"}   >
            <Image src={ToolImage} height={600} width={900} objectFit="contain" />
            <Box
              position="absolute"
              left={10}
              top="15%"
              transform="translateY(-50%)"
              zIndex={99}
              bgcolor="white"
              p={1}
              borderRadius="4px"
              width={400}
              height={350}
              textAlign={"center"}
            >
              <Typography component={"h1"} fontWeight={"bold"}>Assembly</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Badges;
