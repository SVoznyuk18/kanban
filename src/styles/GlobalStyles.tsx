'use client';

import styled, { createGlobalStyle } from "styled-components";

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
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 96px);
  background-color: ${({ theme }) => theme.primaryBgColor};
  display: flex;
`;