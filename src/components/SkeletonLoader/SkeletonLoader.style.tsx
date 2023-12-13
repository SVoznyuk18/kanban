import styled, { css } from "styled-components";
import { media } from '@/UtilsRoot';

interface IProps {
  variants: "task" | "board" | "column";
}

export const SkeletonWrapper = styled.div<IProps>`
  width: 100%;

  ${({ variants }) => variants === "column" && css`
    height: 100%;
  `}

  span {
    ${({ variants }) => variants === "column" && css`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    column-gap: 24px;
    `}
    span {
      width: 100%;
      opacity: 0.1;

      ${({ variants }) => variants === "board" && css`
        min-height: 48px;
        background-color: #fffff;
        ${media.mobile} {
          min-height: 40px;
	      }
      `}

      ${({ variants }) => variants === "task" && css`
        width: 100%;
        height: 88px;
        border-radius: 8px;
      `}

      ${({ variants }) => variants === "column" && css`
        width: 280px;
        border-radius: 24px;
      `}
    }
  }
`;
