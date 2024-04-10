import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = ({ width, placeholder, mt = { xs: "0", md: "0" } }) => {
  return (
    <Stack marginTop={{ xs: mt.xs, md: mt.md }}>
      <OutlinedInput
        required
        placeholder={placeholder}
        sx={{
          backgroundColor: "#F3F4F6",
          color: "#858585",
          borderRadius: "6px",
          width: width,
          height: "40px",
          border: "none",
        }}
        endAdornment={
          <InputAdornment position="end" color={"secondary"}>
            <SearchIcon color="secondary" />
          </InputAdornment>
        }
      />
    </Stack>
  );
};

export default InputSearch;
