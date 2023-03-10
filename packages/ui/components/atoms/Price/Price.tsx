import React, { useCallback, useMemo } from "react";

export interface PriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  price: number;
  origPrice?: number;
  billingSchedule?: {};
}

const Price: React.FC<PriceProps> = ({
  price,
  origPrice,
  billingSchedule,
  className,
}) => {
  return (
    <span className={className ?? ""}>
      <span>{100}</span> {true && <span className="line-through">{100}</span>}
    </span>
  );
};

export default Price;
