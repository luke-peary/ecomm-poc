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
          <Grid item xs={3}>
            <Link href="/">
              <Logo>Flexy Commerce</Logo>
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Nav>
              <NavItem>
                <Link href="/listing">
                  <Text variant="medium">PRODUCTS</Text>
                </Link>
              </NavItem>
            </Nav>
          </Grid>
          <Grid item xs={2}>
            <Cart>
              <Link href="/checkout/cart">
                <ShoppingCartOutlinedIcon style={{ fontSize: 24 }} />
              </Link>
            </Cart>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
