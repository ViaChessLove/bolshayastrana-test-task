import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: lightgray;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    list-style-type: none;
  }
`;
