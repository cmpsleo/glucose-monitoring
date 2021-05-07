import styled, { css } from "styled-components";

import { Display } from "./types";

type Props = {
  display: Display;
};

export const Header = styled.div`
  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const Week = styled.div``;

export const Actions = styled.div``;

export const Body = styled.div``;

export const Group = styled.div``;

export const Head = styled.div`
  margin-bottom: 2rem;
`;

export const Date = styled.p`
  display: flex;
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const displays = {
  vertical: css`
    ${Group} {
      &:not(:last-of-type) {
        margin-bottom: 4rem;
      }
    }

    ${Date} {
      > span:first-of-type {
        &:after {
          padding: 0 0.5rem;

          content: "/";
        }
      }
    }
  `,

  horizontal: css`
    grid-template-columns: repeat(7, 1fr);

    ${Head} {
      text-align: center;
    }

    ${Date} {
      flex-direction: column-reverse;
    }
  `,
};

export const Container = styled.div<Props>`
  ${({ display }) => css`
    ${Body} {
      display: grid;

      ${displays[display]}
    }
  `}
`;
