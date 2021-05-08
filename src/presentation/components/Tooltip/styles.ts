import styled, { css } from "styled-components";
import { size, rgba } from "polished";
import Tippy from "@tippyjs/react/headless";

export const Container = styled(Tippy)``;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 12px;

    line-height: 140%;
    color: ${theme.colors.text.default};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};
  `}
`;

export const Arrow = styled.div`
  position: absolute;

  ${size("8px")}

  &:before {
    ${size("8px")}

    position: absolute;
    transform: rotate(45deg);

    content: "";
    background-color: #fff;
  }
`;

export const Children = styled.div`
  display: inline-flex;
`;

export const Tooltip = styled.div.attrs({
  tabIndex: -1,
})`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 30px ${rgba("#000", 0.1)};

  &[data-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }
  &[data-placement^="right"] > ${Arrow} {
    left: -4px;
  }
  &[data-placement^="left"] > ${Arrow} {
    right: -4px;
  }
  &[data-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }
`;
