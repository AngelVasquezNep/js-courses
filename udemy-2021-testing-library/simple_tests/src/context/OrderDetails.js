import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const OrderDetails = createContext();

export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
}

export const PRICES = {
  scoops: 2,
  toopings: 1.5,
};

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;

  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * PRICES[optionType];
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toopings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: formatCurrency(0),
    toopings: formatCurrency(0),
    grandTotal: formatCurrency(0),
  });

  useEffect(() => {
    const scoopsSubTotal = calculateSubtotal("scoops", optionCounts);
    const toopingsSubTotal = calculateSubtotal("toopings", optionCounts);

    const grandTotal = scoopsSubTotal + toopingsSubTotal;

    setTotals({
      scoops: formatCurrency(scoopsSubTotal),
      toopings: formatCurrency(scoopsSubTotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };
      const optionCountsMap = newOptionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    }

    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props} />;
}
