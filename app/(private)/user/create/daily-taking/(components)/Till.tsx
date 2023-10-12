import { Cash } from "@/common/types";
import React, { Dispatch, SetStateAction } from "react";

interface TillTakingProps {
  formData: Cash;
  setFormData: Dispatch<SetStateAction<Cash>>;
}

function Till({ formData, setFormData }: TillTakingProps) {
  return <div>Till</div>;
}

export default Till;
