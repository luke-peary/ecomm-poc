import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import Link from "next/link";
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

const Cart = styled("button")({
  color: "white",
  backgroundColor: "transparent",
  border: 0
});

const Nav = styled("ul")({
  listStyle: "none",
  padding: 0
});

const NavItem = styled("li")({
  color: "white",
  display: "inline-block"
});

const handleClick = () => {
  console.log("clicked");
};

const Header = () => {
  return (
    <Box py={2} px={4} bgcolor="neutral.800">
      <Container fixed>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={2}>
            <Link href="/">
              <a>
                <Logo>ORSUM</Logo>
              </a>
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Nav>
              <NavItem>
                <Link href="/listing">
                  <a>PRODUCTS</a>
                </Link>
              </NavItem>
            </Nav>
          </Grid>
          <Grid item xs={2}>
            <Cart onClick={handleClick}>
              <Link href="/checkout/cart">
                <a>
                  <ShoppingCartOutlinedIcon />
                </a>
              </Link>
            </Cart>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
