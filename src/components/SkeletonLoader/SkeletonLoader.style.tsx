import styled, { css } from "styled-components";
import { media } from '@/UtilsRoot';

interface IProps {
  variants: "task" | "board" | "column";
}

export const SkeletonWrapper = styled.div<IProps>`
  span {
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
        height: 88px;
        border-radius: 8px;
      `}
    }
  }
`;
