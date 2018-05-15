import React from 'react';
import Link from 'gatsby-link';

import logo from './logo.svg';
import { LogoImage } from './styled';

export default function Logo() {
  return (
    <Link to="/">
      <LogoImage src={logo} alt="YLD Logo" />
    </Link>
  );
}
