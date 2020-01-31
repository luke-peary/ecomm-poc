import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/box";
import Button from "@material-ui/core/Button";
import Link from "../../src/Link";

export default function Cart() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cart
        </Typography>
        <Button
          variant="contained"
          color="primary.main"
          component={Link}
          naked
          href="/checkout/shipping"
        >
          Go to shipping page
        </Button>
      </Box>
    </Container>
  );
}
