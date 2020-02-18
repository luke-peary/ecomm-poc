import styled from "styled-components";
import Picture from "../Picture";
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
  width: 100%;
  margin-top: 16px;
  width: auto;
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
