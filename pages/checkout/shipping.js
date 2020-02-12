import React from "react";
import FullWidth from "../../layouts/fullWidth";
import {
  Container,
  Typography,
  Button,
  TextField,
  makeStyles
} from "@material-ui/core";
import FormCard from "../../components/FormCard";
import Link from "../../src/Link";

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
          <Typography variant="h2" component="h1" gutterBottom>
            Shipping address
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Address line 1"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Address line 1"
              variant="outlined"
            />
            <div className={classes.row}>
              <TextField
                select
                margin="normal"
                label="State"
                variant="outlined"
                className={classes.textField}
              >
                {states.map(state => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </TextField>

              <TextField
                margin="normal"
                id="outlined-basic"
                label="Postcode"
                variant="outlined"
                className={classes.textField}
              />
            </div>
          </form>
          <Button
            variant="contained"
            color="primary.main"
            component={Link}
            naked
            href="/checkout/payment"
          >
            Go to payment page
          </Button>
        </FormCard>
      </Container>
    </FullWidth>
  );
}
