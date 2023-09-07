import React from "react";
import { FooterProps } from "./footer.props";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
