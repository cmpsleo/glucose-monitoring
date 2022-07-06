import { useRef, memo } from "react";
import { XIcon } from "@heroicons/react/solid";

import { formatDate } from "@/infra/date";
import { MealContexts } from "@/domain/models";
import { Modal } from "@/presentation/components";
import { useLockBodyScroll, useOutsideClick } from "@/presentation/hooks";

import * as S from "./styles";
import { DetailsProps } from "./types";

function Details({ onClose, measurement }: DetailsProps) {
  const { Alignment, Backdrop, Content } = Modal.Base;

  const contentRef = useRef();

  useLockBodyScroll();

  useOutsideClick(contentRef, onClose);

  return (
    <Alignment on="center">
      <Backdrop />

      <Content size="small">
        <S.Content ref={contentRef}>
          <S.Head>
            <S.Title>
              {formatDate(measurement.measuredAt).format("L LTS")}
            </S.Title>

            <S.Close onClick={onClose}>
              <XIcon />
            </S.Close>
          </S.Head>

          <S.Body>
            <S.Item>
              <span>Notes:</span>
              <span>{measurement.notes || "-"}</span>
            </S.Item>

            <S.Item>
              <span>Context:</span>
              <span>{MealContexts[measurement.mealContext]}</span>
            </S.Item>

            <S.Item>
              <span>Glucometer:</span>
              <span>{measurement.glucometer.name || "-"}</span>
            </S.Item>

            <S.Item>
              <span>Manufacturer:</span>
              <span>{measurement.glucometer.manufacturer || "-"}</span>
            </S.Item>

            <S.Item>
              <span>Method:</span>
              <span>{measurement.measurementMethod || "-"}</span>
            </S.Item>
          </S.Body>
        </S.Content>
      </Content>
    </Alignment>
  );
}

export default memo(Details);
