import React from "react";
import * as Banner from "./PrimaryBanner.styles";
import Link from "../Link";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";

const PrimaryBanner = ({ title, body, image, linkUrl }) => {
  return (
    <Banner.OuterWrapper bgcolor="white">
      <Banner.ImageWrapper>
        <Banner.Image src={image.src} alt={image.alt} />
      </Banner.ImageWrapper>
      <Banner.ContentWrapper>
        <Heading as="h1" variant="h2" color="black">
          {title}
        </Heading>
        <Text color="black">{body}</Text>
        {linkUrl && (
          <Banner.ButtonWrapper>
            <Button href={linkUrl} variant="primary">
              View all products
            </Button>
          </Banner.ButtonWrapper>
        )}
      </Banner.ContentWrapper>
    </Banner.OuterWrapper>
  );
};

export default PrimaryBanner;
