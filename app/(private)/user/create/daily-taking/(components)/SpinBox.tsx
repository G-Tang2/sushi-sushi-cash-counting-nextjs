import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TextField } from "@radix-ui/themes";

interface SpinBoxProps {
  denomination: string;
  value: number;
  setCoins: (denomination: string, value: number) => void;
}

const SpinBox = ({ denomination, value, setCoins }: SpinBoxProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCoins(denomination, value);
  };

  const denominationToString = (denomination: string) => {
    switch (denomination) {
      case "fiveCent": {
        return "$0.05";
      }
      case "tenCent": {
        return "$0.10";
      }
      case "twentyCent": {
        return "$0.20";
      }
      case "fiftyCent": {
        return "$0.50";
      }
      case "oneDollar": {
        return "$1.00";
      }
      case "twoDollar": {
        return "$2.00";
      }
      case "fiveDollar": {
        return "$5.00";
      }
      case "tenDollar": {
        return "$10.00";
      }
      case "twentyDollar": {
        return "$20.00";
      }
      case "fiftyDollar": {
        return "$50.00";
      }
      case "oneHundredDollar": {
        return "$100.00";
      }
    }
  };

  return (
    <div className="flex flex-col">
      <p>{denominationToString(denomination)}</p>
      <div className="flex flex-row">
        <button className="p-3 bg-primary">
          <AiOutlineMinus />
        </button>
        <TextField.Root className="bg-white">
          <TextField.Input
            value={value}
            onChange={handleChange}
            type="number"
            onKeyDown={(e) => "return event.keyCode !== 69"}
          />
        </TextField.Root>
        <button className="p-3 bg-primary">
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default SpinBox;
