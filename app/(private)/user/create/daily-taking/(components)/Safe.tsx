import { Coin } from "@/common/types";
import React from "react";
import SpinBox from "./SpinBox";

interface SafeTakingProps {
  formData: Coin;
  setFormData: (denomination: string, value: number) => void;
}

function Safe({ formData, setFormData }: SafeTakingProps) {
  return (
    <div>
      {Object.entries(formData).map((coin) => (
        <SpinBox
          denomination={coin[0]}
          value={coin[1]}
          setCoins={setFormData}
        />
      ))}
    </div>
  );
}

export default Safe;
