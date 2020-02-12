import React from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import { toPrice } from "../helpers/functions";

const TotalsCard = styled(Card)`
  padding: 24px;
`;

const TotalsRow = styled("div")`
  display: flex;
  flex-direction: row;
`;

const TotalsLabel = styled("div")`
  width: 50%;
`;

const TotalsValue = styled("div")`
  width: 50%;
  text-align: right;
`;

const TotalsTable = ({ totals }) => {
  const { subTotal, total, tax, shipping } = totals;
  return (
    <TotalsCard>
      <TotalsRow>
        <TotalsLabel>Sub total</TotalsLabel>
        <TotalsValue>{toPrice(subTotal)}</TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>Taxes</TotalsLabel>
        <TotalsValue>{toPrice(tax)}</TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>Shipping</TotalsLabel>
        <TotalsValue>{toPrice(shipping)}</TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>Total</TotalsLabel>
        <TotalsValue>{toPrice(total)}</TotalsValue>
      </TotalsRow>
    </TotalsCard>
  );
};

export default TotalsTable;
