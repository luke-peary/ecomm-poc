import React from "react";
import * as Banner from "./PrimaryBanner.styles";
import Link from "../Link";
import Heading from "../Heading";
import Text from "../Text";

const PrimaryBanner = ({ title, body, image, linkUrl }) => {
  return (
    <Banner.OuterWrapper bgcolor="white">
      <Banner.ImageWrapper>
        <Banner.Image src={image.src} alt={image.alt} />
      </Banner.ImageWrapper>
      <Banner.ContentWrapper>
        <Heading as="h1" color="black">
          {title}
        </Heading>
        <Text color="black">{body}</Text>
        {linkUrl && <Link href={linkUrl}>View all products</Link>}
      </Banner.ContentWrapper>
    </Banner.OuterWrapper>
  );
};

export default PrimaryBanner;
