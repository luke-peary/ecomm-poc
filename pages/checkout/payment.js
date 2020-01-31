import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/box";
import Button from "@material-ui/core/Button";
import Link from "../../src/Link";

export default function Payment() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Payment
        </Typography>
        <Button
          variant="contained"
          color="primary.main"
          component={Link}
          naked
          href="/checkout/confirmation"
        >
          Go to confirmation page
        </Button>
      </Box>
    </Container>
  );
}
