import { ReactNode } from "react";
import { Placement } from "tippy.js";

import * as S from "./styles";

export const Tooltip = ({
  placement = "top",
  content,
  children,
}: Tooltip.Props) => {
  return (
    <S.Container
      placement={placement}
      render={(attrs) => (
        <S.Tooltip {...attrs}>
          <S.Content>{content}</S.Content>

          <S.Arrow data-popper-arrow />
        </S.Tooltip>
      )}
    >
      <S.Children>{children}</S.Children>
    </S.Container>
  );
};

export namespace Tooltip {
  export type Props = {
    content?: any;
    children: ReactNode;
    placement?: Placement;
  };
}
