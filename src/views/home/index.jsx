import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import CompNavbar from "../../components/Navbar/CompNavbar";

const Home = () => {
  return (
    <Stack>
      <CompNavbar />
      <Stack sx={{ width: "150px" }}>
        <Button color="primary">Primary</Button>
      </Stack>
    </Stack>
  );
};

export default Home;
