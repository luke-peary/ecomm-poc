import React from "react";
import FullWidth from "../../layouts/fullWidth";
import {
  Container,
  Typography,
  Grid,
  // TextField,
  makeStyles
} from "@material-ui/core";
import FormCard from "../../components/FormCard";
import Button, { ButtonControl } from "../../components/Button";
import TextField from "../../components/TextField";
import FormRow from "../../components/FormRow";
import Heading from "../../components/Heading";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  textField: {
    width: "48%"
  }
}));

export default function Shipping() {
  const classes = useStyles();

  const states = [
    {
      value: "",
      label: ""
    },
    {
      value: "NT",
      label: "NT"
    },
    {
      value: "WA",
      label: "WA"
    },
    {
      value: "NSW",
      label: "NSW"
    },
    {
      value: "TAS",
      label: "TAS"
    },
    {
      value: "ACT",
      label: "ACT"
    },
    {
      value: "VIC",
      label: "VIC"
    },
    {
      value: "QLD",
      label: "QLD"
    }
  ];

  return (
    <FullWidth>
      <Container maxWidth="sm">
        <FormCard>
          <Heading variant="h2" as="h1">
            Shipping address
          </Heading>
          <form noValidate autoComplete="off">
            <FormRow>
              <TextField type="text" label="Name" />
            </FormRow>
            <FormRow>
              <TextField type="text" label="Address 1" />
            </FormRow>
            <FormRow>
              <TextField type="text" label="Address 2" />
            </FormRow>
            <FormRow>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField type="select" label="State" options={states} />
                </Grid>
                <Grid item xs={6}>
                  <TextField type="text" label="Post Code" />
                </Grid>
              </Grid>
            </FormRow>
          </form>
        </FormCard>
        <ButtonControl alignment="right" hasTopSpace={true}>
          <Button variant="primary" href="/checkout/payment">
            Go to payment page
          </Button>
        </ButtonControl>
      </Container>
    </FullWidth>
  );
}
