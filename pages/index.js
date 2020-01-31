import React from "react";
import Container from "@material-ui/core/Container";
import FullWidth from "../layouts/fullWidth";
import Typography from "@material-ui/core/Typography";
import Box from "../components/box";

const Index = props => {
  return (
    <FullWidth>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
        </Box>
      </Container>
    </FullWidth>
  );
};

export default Index;
