import { ReactNode } from "react";
import media from "styled-media-query";
import styled, { css } from "styled-components";

type ContainerProps = {
  children: ReactNode;
  size?: "small" | "large";
  spacingTop?: boolean;
  spacingBottom?: boolean;
};

const sizes = {
  large: css`
    ${media.greaterThan("large")`
      width: 1200px;
    `}

    ${media.greaterThan("huge")`
      width: 1500px;
    `}
  `,

  small: css`
    ${media.greaterThan("large")`
      width: 400px;
    `}

    ${media.greaterThan("huge")`
      width: 500px;
    `}
  `,
};

const spacings = {
  top: css`
    margin-top: 4rem;

    ${media.greaterThan("huge")`
      margin-top: 6rem;
    `}
  `,

  bottom: css`
    margin-bottom: 4rem;

    ${media.greaterThan("huge")`
      margin-bottom: 6rem;
    `}
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ size = "large", spacingTop, spacingBottom }) => css`
    width: 90%;

    margin-left: auto;
    margin-right: auto;

    ${sizes[size]}
    ${spacingTop && spacings.top}
    ${spacingBottom && spacings.bottom}
  `}
`;
