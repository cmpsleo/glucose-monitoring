import styled, { css } from "styled-components";
import media from "styled-media-query";
import { rgba } from "polished";

export type ModalsBaseProps = {
  size?: "small" | "medium" | "large";
};

const modifiers = {
  small: css`
    width: 90%;

    ${media.greaterThan("small")`
      width: 50rem;
    `}
  `,

  medium: css`
    width: 95%;

    ${media.greaterThan("small")`
      width: 65%;
    `}

    ${media.greaterThan("large")`
      width: 70rem;
    `}
  `,

  large: css`
    width: 80%;
  `,
};

export const Content = styled.div<ModalsBaseProps>`
  ${({ theme, size = "medium" }) => css`
    position: relative;
    z-index: ${theme.layers.modal};

    border-radius: 1.2rem;
    background-color: #fff;
    box-shadow: 0 0 20px ${rgba("#000", 0.3)};

    animation: fade-in-top 250ms;

    @keyframes fade-in-top {
      from {
        transform: translateY(30px);

        opacity: 0;
      }

      to {
        transform: translateY(0);

        opacity: 1;
      }
    }

    ${modifiers[size]}
  `}
`;
