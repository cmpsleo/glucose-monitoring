import styled, { css, DefaultTheme } from "styled-components";
import { rgba } from "polished";
import media from "styled-media-query";

import { Calendar } from ".";

type Props = {
  display: Calendar.Display;
};

export const Header = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;

  ${media.greaterThan("large")`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.pallete.primary};
  `}
`;

export const Week = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.pallete.primary};

    ${media.lessThan("large")`
      margin-top: 1rem;
    `}
  `}
`;

export const Actions = styled.div`
  ${media.lessThan("large")`
    margin-top: 3rem;
  `}

  > button {
    &:not(:last-of-type) {
      margin-right: 0.8rem;
    }
  }
`;

export const Body = styled.div`
  padding-bottom: 3rem;

  border-radius: 2rem;
  background-color: #fff;

  ${media.lessThan("large")`
    overflow-x: auto;
  `}
`;

export const Group = styled.div``;

export const Head = styled.div`
  padding: 3rem;
  padding-bottom: 0;
  margin-bottom: 2rem;
`;

export const Date = styled.p`
  ${({ theme }) => css`
    display: flex;

    font-weight: bold;
    text-transform: uppercase;
    color: ${theme.colors.pallete.primary};

    > span {
      &:first-child {
        font-size: ${theme.font.size.large};
      }
    }
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;

    border-top: 1px solid ${defaultBorder(theme)};
    border-bottom: 1px solid ${defaultBorder(theme)};
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding-right: 1rem;
    padding-left: 1rem;

    &:not(:last-of-type) {
      margin-bottom: 2rem;
      padding-bottom: 2rem;

      border-bottom: 1px solid ${defaultBorder(theme)};
    }
  `}
`;

export const Container = styled.div<Props>`
  ${({ display }) => css`
    ${Body} {
      display: grid;

      ${displays[display]()}
    }
  `}
`;

const defaultBorder = (theme: DefaultTheme) =>
  rgba(theme.colors.pallete.primary, 0.1);

const displays = {
  vertical: () => css`
    ${Date} {
      align-items: center;

      > span {
        &:first-of-type {
          &:after {
            padding: 0 0.5rem;

            content: "/";
          }
        }

        &:last-of-type {
          margin-top: 3px;
        }
      }
    }
  `,

  horizontal: () => css`
    grid-template-columns: repeat(7, 1fr);

    ${Head} {
      text-align: center;
    }

    ${Date} {
      flex-direction: column-reverse;
    }
  `,
};
