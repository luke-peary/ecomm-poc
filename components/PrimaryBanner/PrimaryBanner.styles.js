import styled from "styled-components";
import Button from "../Button";
import Box from "../Box";

export const OuterWrapper = styled(Box)`
  display: flex;
`;

export const ContentWrapper = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: calc(1200px / 2);
  padding: 56px 82px;
  margin-right: auto;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  min-height: 400px;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
