import React from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import Text from "./Text";
import { toPrice } from "../helpers/functions";

const TotalsCard = styled(Card)`
  padding: 24px;
  margin-bottom: 16px;
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
        <TotalsLabel>
          <Text>Sub total</Text>{" "}
        </TotalsLabel>
        <TotalsValue>
          <Text>{toPrice(subTotal)}</Text>
        </TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>
          <Text>Taxes</Text>
        </TotalsLabel>
        <TotalsValue>
          <Text>{toPrice(tax)}</Text>
        </TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>
          <Text>Shipping</Text>
        </TotalsLabel>
        <TotalsValue>
          <Text>{toPrice(shipping)}</Text>
        </TotalsValue>
      </TotalsRow>
      <TotalsRow>
        <TotalsLabel>
          <Text>Total</Text>
        </TotalsLabel>
        <TotalsValue>
          <Text>{toPrice(total)}</Text>
        </TotalsValue>
      </TotalsRow>
    </TotalsCard>
  );
};

export default TotalsTable;
