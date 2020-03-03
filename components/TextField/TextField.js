import Text from "../Text";
import styled from "styled-components";

const StyledLabel = styled(Text)`
  display: block;
  margin-bottom: 0.8rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.palette.neutral[300]};
  border-radius: ${props => props.theme.shape.borderRadius.sm};
  line-height: 4rem;
  width: 100%;
  font-size: 1.7rem;
  padding: 0 0.8rem;
`;

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.palette.neutral[300]};
  border-radius: ${props => props.theme.shape.borderRadius.sm};
  height: 4rem;
  width: 100%;
  font-size: 1.7rem;
  padding: 0 0.8rem;
  background: white;
  appearance: none;
`;

const TextField = ({ type, label, options = [] }) => {
  const renderSwitch = param => {
    switch (type) {
      case "select":
        return (
          <StyledSelect>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        );
        break;

      default:
        return <StyledInput type={type} />;
        break;
    }
  };
  return (
    <>
      <StyledLabel as="label" variant="medium">
        {label}
      </StyledLabel>
      {renderSwitch()}
    </>
  );
};

export default TextField;
