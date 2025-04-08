import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

export default function SearchBar({ placeholder }) {
  return (
    <Box sx={{ width: 500, maxWidth: "100%" }}>
      <TextField
        fullWidth
        label={placeholder}
        id="fullWidth"
        InputProps={{
            endAdornment: (
              <InputAdornment sx={{ cursor: "pointer" }}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px"
          },
        }}
      />
    </Box>
  );
}
