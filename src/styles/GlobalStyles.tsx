'use client';

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
    
  html, body {
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: rgba(0, 0,0,0);
    
  }
  ::-webkit-scrollbar{
    width: 8px;
    background-color: rgba(0, 0,0,0);
    
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #635FC7;

  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 96px);
  background-color: ${({ theme }) => theme.primaryBgColor};
  display: flex;
`;