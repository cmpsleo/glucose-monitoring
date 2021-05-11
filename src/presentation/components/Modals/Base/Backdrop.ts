import styled, { css } from "styled-components";
import { rgba } from "polished";

export const Backdrop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.backdrop};

    animation: fade-in 100ms;
    background-color: ${rgba("#000", 0.05)};

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `}
`;
