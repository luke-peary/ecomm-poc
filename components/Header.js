import React from "react";
import styled from "styled-components";
import { Container, Grid, IconButton } from "@material-ui/core";
import Link from "./Link";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Box from "./Box";
import Text from "./Text";

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 32px;
  &:hover {
    text-decoration: none;
  }
`;

const Cart = styled.div`
  color: white;
  text-align: right;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  color: white;
  display: inline-block;
`;

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
                <Link href="/listing">
                  <Text variant="large">PRODUCTS</Text>
                </Link>
              </NavItem>
            </Nav>
          </Grid>
          <Grid item xs={2}>
            <Cart>
              <Link href="/checkout/cart">
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Link>
            </Cart>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
