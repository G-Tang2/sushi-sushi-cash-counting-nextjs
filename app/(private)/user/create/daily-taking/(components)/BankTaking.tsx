import React, { Dispatch, SetStateAction } from "react";
import { Cash } from "@/common/types";

interface BankTakingProps {
  formData: Cash;
  setFormData: Dispatch<SetStateAction<Cash>>;
}

function BankTaking({ formData, setFormData }: BankTakingProps) {
  return <div>BankTaking</div>;
}

export default BankTaking;
