import { useState } from "react";
import Safe from "./Safe";
import Till from "./Till";
import BankTaking from "./BankTaking";
import { Cash, Coin, Steps } from "@/common/types";

const initialSafeFormData: Coin = {
  fiveCent: 0,
  tenCent: 0,
  twentyCent: 0,
  fiftyCent: 0,
  oneDollar: 0,
  twoDollar: 0,
};

const initialTillFormData: Cash = {
  fiveCent: 0,
  tenCent: 0,
  twentyCent: 0,
  fiftyCent: 0,
  oneDollar: 0,
  twoDollar: 0,
  fiveDollar: 0,
  tenDollar: 0,
  twentyDollar: 0,
  fiftyDollar: 0,
  oneHundredDollar: 0,
};

const initialBankTakingFormData: Cash = {
  fiveCent: 0,
  tenCent: 0,
  twentyCent: 0,
  fiftyCent: 0,
  oneDollar: 0,
  twoDollar: 0,
  fiveDollar: 0,
  tenDollar: 0,
  twentyDollar: 0,
  fiftyDollar: 0,
  oneHundredDollar: 0,
};

let steps: Steps[] = [Steps.Safe, Steps.Till, Steps.BankTaking];

export default function MultiStepForm() {
  const [step, setStep] = useState(steps.at(0));
  const [safeFormData, setSafeFormData] = useState(initialSafeFormData);
  const [tillFormData, setTillFormData] = useState(initialTillFormData);
  const [bankTakingFormData, setBankTakingFormData] = useState(
    initialBankTakingFormData
  );

  switch (step) {
    case Steps.Safe:
      return <Safe formData={safeFormData} />;
    case Steps.Till:
      return <Till formData={tillFormData} />;
    case Steps.BankTaking:
      return <BankTaking formData={bankTakingFormData} />;
  }
}
