import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  box-sizing: border-box;
  background: black;
  padding: 16px 40px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1em;
  font-weight: 600;
  color: white;
  position: relative;
  border: none;

  &::before {
    border: 2px solid white;
    content: " ";
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover::before {
    left: 10px;
    top: 8px;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ text, size }) => {
  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
