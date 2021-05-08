import styled, { css, DefaultTheme } from "styled-components";
import { rgba, size } from "polished";

import { Card } from ".";

type Props = Pick<Card.Props, "condition" | "display">;

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

export const Container = styled.div<Props>`
  ${({ theme, condition, display }) => css`
    position: relative;

    padding: 2rem;
    border-radius: 0.8rem;
    border-left: 6px solid transparent;

    background-color: #fff;
    box-shadow: 0px 4px 30px ${rgba("#000", 0.1)};

    ${conditions[condition](theme)}
    ${displays[display]}
  `}
`;

function makeConditions(color: string) {
  return css`
    border-left-color: ${color};
    background-color: ${rgba(color, 0.08)};
  `;
}

const conditions = {
  normal: (theme: DefaultTheme) => makeConditions(theme.colors.pallete.success),

  hiperglicemia: (theme: DefaultTheme) =>
    makeConditions(theme.colors.pallete.warning),

  hipoglicemia: (theme: DefaultTheme) =>
    makeConditions(theme.colors.pallete.danger),
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
      position: absolute;
      bottom: 2rem;
      right: 2rem;
    }

    ${Item} {
      &:first-of-type {
        margin-bottom: 0.8rem;
      }
    }
  `,
};
