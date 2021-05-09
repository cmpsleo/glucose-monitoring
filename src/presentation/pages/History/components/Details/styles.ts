import styled, { css } from "styled-components";
import { size } from "polished";
import media from "styled-media-query";

export const Content = styled.div`
  padding: 3rem;
`;

export const Head = styled.div`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.bold};

    ${media.greaterThan("large")`
      font-size: ${theme.font.size.large};
    `}
  `}
`;

export const Close = styled.button`
  all: unset;

  opacity: 0.6;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    opacity: 1;
  }

  > svg {
    ${size("20px")}
  }
`;

export const Body = styled.div``;

export const Item = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 1.2rem;
    }

    ${media.lessThan("large")`
      font-size: ${theme.font.size.small};
    `}

    span {
      &:first-of-type {
        width: 80px;

        ${media.greaterThan("large")`
          width: 110px;
        `}
      }
    }
  `}
`;
