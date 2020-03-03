import { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import FullWidth from "../../layouts/fullWidth";
import ProductInfo from "../../components/ProductInfo";
import Box from "../../components/Box";
import { fetchProduct } from "../../redux/actions";

const Image = styled("img")`
  width: 100%;
`;

const StyledContainer = styled(Container)`
  margin-top: 4rem;
`;

const ProductPage = props => {
  const router = useRouter();
  const { product, error, loading, dispatch } = props;

  useEffect(() => {
    dispatch(fetchProduct(router.query.id));
  }, []);

  if (loading) return <CircularProgress />;
  if (!product) return null;

  return (
    <FullWidth>
      <StyledContainer fixed>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Box bgcolor="white" boxShadow="md" borderRadius="borderRadius.md">
              <Image src={product.image} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <ProductInfo product={product} />
          </Grid>
        </Grid>
      </StyledContainer>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading,
  error: state.product.error
});

export default connect(mapStateToProps)(ProductPage);
