import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import CompNavbar from "../../components/Navbar/CompNavbar";

const Home = () => {
  return (
    <Stack>
      <CompNavbar />
      <Stack sx={{ width: "150px" }}>
        {/* <Button color="primary">Primary</Button> */}
        <Button color="cuaternary" sx={{ width: "266px", height: "41px" }}>
          <Typography variant="label" fontSize={16}>
            Añadir
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
