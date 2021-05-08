import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

import { Button } from ".";

type Props = Button.Props & {
  hasIcon?: boolean;
};

export const Icon = styled.span`
  transform: translateY(1px);

  line-height: 1;

  svg {
    height: 1.6rem;
  }
`;

export const Content = styled.span``;

const kinds = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.pallete.primary};

    &:hover {
      background-color: ${darken(0.05, theme.colors.pallete.primary)};
    }
  `,
};

const sizes = {
  medium: (theme: DefaultTheme) => css`
    padding: 1rem 2rem;

    font-size: ${theme.font.size.medium};
  `,
};

const modifiers = {
  withIcon: css`
    ${Content} {
      margin-left: 0.8rem;
    }
  `,

  disabled: css`
    opacity: 0.6;

    cursor: not-allowed;
  `,
};

export const Container = styled.button<Props>`
  ${({ theme, kind, size, hasIcon, disabled }) => css`
    all: unset;

    position: relative;

    border-radius: 0.4rem;
    box-sizing: border-box;

    display: inline-flex;
    align-items: center;

    color: #fff;

    font-family: ${theme.font.family};

    cursor: pointer;
    transition: 0.15s;

    ${kinds[kind](theme)}
    ${sizes[size](theme)}
    ${hasIcon && modifiers.withIcon}
    ${disabled && modifiers.disabled}
  `}
`;
