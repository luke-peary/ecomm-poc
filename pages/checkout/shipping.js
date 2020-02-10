import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/Box";
import Button from "@material-ui/core/Button";
import Link from "../../src/Link";

export default function Shipping() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shipping
        </Typography>
        <Button
          variant="contained"
          color="primary.main"
          component={Link}
          naked
          href="/checkout/payment"
        >
          Go to payment page
        </Button>
      </Box>
    </Container>
  );
}
