import { css } from "styled-components";

export default css`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.text.default};
    }
  `}
`;
