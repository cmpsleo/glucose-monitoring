import styled, { css } from "styled-components";
import media from "styled-media-query";

type AlignmentProps = {
  on?: "top" | "center" | "bottom";
};

const alignments = {
  top: css`
    align-items: flex-start;
  `,

  center: css`
    align-items: center;
  `,

  bottom: css`
    align-items: flex-end;
  `,
};

export const Alignment = styled.div<AlignmentProps>`
  ${({ on = "top" }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    padding: 2rem 0;

    display: flex;
    justify-content: center;

    ${alignments[on]}

    ${media.greaterThan("huge")`
      padding: 4rem 0;
    `}
  `}
`;
