'use client';

import styled from 'styled-components'

export const SidebarSection = styled.div`
  width: 300px;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: red;
`;