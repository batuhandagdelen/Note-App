import React from "react";
import type { FC } from "react";

interface Props {
  totalCount: number;
  filteredCount: number;
}

const Total: FC<Props> = ({ totalCount, filteredCount }) => {
  return (
    <div className="mt-8  text-text-secondary text-sm flex items center gap-1">
      <span className="text-text-primary">{filteredCount}</span>
      not gösteriliyor ,toplam
      <span className="text-text-primary">({totalCount})</span>
    </div>
  );
};

export default Total;
