import styled, { css, DefaultTheme } from "styled-components";
import { rgba, size } from "polished";

import { CardProps } from "./types";

export const Item = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.low};
  `}
`;

export const Heading = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.text.low};

    > span {
      margin-right: 0.4rem;

      color: ${theme.colors.text.default};
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const Icon = styled.img`
  transform: translateY(2px);

  ${size("2rem")}
`;

export const Container = styled.div<CardProps>`
  ${({ theme, display, condition, mealContext }) => css`
    position: relative;

    padding: 2rem;
    border-radius: 0.8rem;
    border-left: 6px solid transparent;

    cursor: pointer;
    background-color: #fff;

    ${displays[display]}
    ${mealContexts[mealContext]}
    ${conditions[condition]?.(theme)}
  `}
`;

function makeConditions(color: string) {
  return css`
    transition: 0.15s;
    border-left-color: ${color};
    background-color: ${rgba(color, 0.08)};

    &:hover {
      background-color: ${rgba(color, 0.15)};
    }
  `;
}

const conditions = {
  Normal: (theme: DefaultTheme) => makeConditions(theme.colors.pallete.success),

  Hyperglycemia: (theme: DefaultTheme) =>
    makeConditions(theme.colors.pallete.warning),

  Hypoglycemia: (theme: DefaultTheme) =>
    makeConditions(theme.colors.pallete.danger),
};

const mealContexts = {
  Before: () => css``,

  After: () => css``,

  Fasting: () => css`
    ${Icon} {
      opacity: 0.5;
    }
  `,
};

const displays = {
  expanded: css`
    display: flex;
    align-items: center;

    ${Item} {
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
    }
  `,

  short: css`
    ${Icon} {
      margin-top: 0.8rem;
    }

    ${Item} {
      &:first-of-type {
        margin-bottom: 0.8rem;
      }
    }
  `,
};
