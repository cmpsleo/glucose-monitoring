import { memo } from "react";

import * as S from "./styles";
import { TooltipProps } from "./types";

function Tooltip({ placement = "top", content, children }: TooltipProps) {
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
}

export default memo(Tooltip);
