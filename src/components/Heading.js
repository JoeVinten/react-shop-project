import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.h1`
  text-transform: uppercase;
  background-color: #ffae00;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 3em;
  font-weight: 900;
  letter-spacing: 4px;
`;

const Heading = () => {
  return <HeadingStyle>Hello, World</HeadingStyle>;
};

export default Heading;
