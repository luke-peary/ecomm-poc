import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Anchor = styled("a")`
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const CustomLink = ({ href, as, children }) => {
  return (
    <Link href={href} as={as}>
      <Anchor>{children}</Anchor>
    </Link>
  );
};

export default CustomLink;
