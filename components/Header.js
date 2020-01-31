import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import Link from "../src/Link";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { styled } from "@material-ui/core/styles";
import Box from "./Box";

const Logo = styled(Link)({
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
            <Logo href="/">ORSUM</Logo>
          </Grid>
          <Grid item xs={8}>
            <Nav>
              <NavItem>
                <Link href="/listing" color="inherit">
                  PRODUCTS
                </Link>
              </NavItem>
            </Nav>
          </Grid>
          <Grid item xs={2}>
            <Cart onClick={handleClick}>
              <ShoppingCartOutlinedIcon />
            </Cart>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
