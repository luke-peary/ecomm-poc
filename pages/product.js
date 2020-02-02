import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "../components/Box";
import MuiLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";

export default function Product() {
  return (
    <Container fixed>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Page
        </Typography>
        <Button
          variant="contained"
          color="primary.main"
          component={Link}
          naked
          href="/checkout/cart"
        >
          Go to the cart page
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
}
