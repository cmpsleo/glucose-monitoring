import styled, { css, DefaultTheme } from "styled-components";
import { rgba } from "polished";

import { Card } from ".";

type Props = Pick<Card.Props, "condition">;

const conditions = {
  normal: (theme: DefaultTheme) => css`
    border-left-color: ${theme.colors.pallete.success};
    background-color: ${rgba(theme.colors.pallete.success, 0.08)};
  `,

  hiperglicemia: (theme: DefaultTheme) => css`
    border-left-color: ${theme.colors.pallete.warning};
    background-color: ${rgba(theme.colors.pallete.warning, 0.08)};
  `,

  hipoglicemia: (theme: DefaultTheme) => css`
    border-left-color: ${theme.colors.pallete.danger};
    background-color: ${rgba(theme.colors.pallete.danger, 0.08)};
  `,
};

export const Container = styled.div<Props>`
  ${({ theme, condition }) => css`
    padding: 2rem;

    border-radius: 0.8rem;
    border-left: 6px solid transparent;

    background-color: #fff;
    box-shadow: 0px 4px 30px ${rgba("#000", 0.1)};

    ${conditions[condition](theme)}
  `}
`;

export const Item = styled.p``;
