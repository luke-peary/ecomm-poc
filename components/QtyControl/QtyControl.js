import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Heading from "../Heading";
import styled from "styled-components";

const Wrapper = styled.div``;

const Value = styled(Heading)``;

const QtyControl = ({ increment, decrement, value }) => {
  return (
    <Wrapper>
      <Remove
        onClick={decrement}
        style={{ marginRight: "24px" }}
        fontSize="large"
      />
      <Value>{value}</Value>
      <Add
        onClick={increment}
        style={{ marginLeft: "24px" }}
        fontSize="large"
      />
    </Wrapper>
  );
};

export default QtyControl;
