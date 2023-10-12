import { Coin } from "@/common/types";
import React, { Dispatch, SetStateAction } from "react";

interface SafeTakingProps {
  formData: Coin;
  setFormData: Dispatch<SetStateAction<Coin>>;
}

function Safe({ formData, setFormData }: SafeTakingProps) {
  return <div>Safe</div>;
}

export default Safe;
