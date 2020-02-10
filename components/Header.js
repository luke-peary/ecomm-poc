import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import Link from "./Link";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { styled } from "@material-ui/core/styles";
import Box from "./Box";

const Logo = styled("div")({
  color: "white",
  fontWeight: "bold",
  fontSize: "32px",
  "&:hover": {
    textDecoration: "none"
  }
});

const Cart = styled("div")({
  color: "white"
});

const Nav = styled("ul")({
  listStyle: "none",
  padding: 0
});

const NavItem = styled("li")({
  color: "white",
  display: "inline-block"
});

const Header = () => {
  return (
    <Box py={2} px={4} bgcolor="neutral.800">
      <Container fixed>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={2}>
            <Link href="/">
              <Logo>ORSUM</Logo>
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Nav>
              <NavItem>
                <Link href="/listing">PRODUCTS</Link>
              </NavItem>
            </Nav>
          </Grid>
          <Grid item xs={2}>
            <Cart>
              <Link href="/checkout/cart">
                <ShoppingCartOutlinedIcon />
              </Link>
            </Cart>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
