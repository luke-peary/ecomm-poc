import React from "react";
import Link from "next/link";

const withLink = StyledComponent => {
  return class WithLink extends React.Component {
    render() {
      const { href, ...otherProps } = this.props;

      // return a button
      if (!href) {
        return <StyledComponent {...otherProps} />;
      }

      // return internal link
      return (
        <Link href={href}>
          <StyledComponent as="a" {...otherProps} />
        </Link>
      );
    }
  };
};

export default withLink;
