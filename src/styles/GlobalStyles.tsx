'use client';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
  html,
  body {
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;

  }
  main {
    width: 100%;
    height: calc(100vh - 96px);
    background-color: #F4F7FD;
    display: flex;
  }
`;