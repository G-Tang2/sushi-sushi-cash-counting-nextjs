"use client";

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

  const renderForm = () => {
    switch (step) {
      case Steps.Safe:
        return <Safe formData={safeFormData} setFormData={setSafeFormData} />;
      case Steps.Till:
        return <Till formData={tillFormData} setFormData={setTillFormData} />;
      case Steps.BankTaking:
        return (
          <BankTaking
            formData={bankTakingFormData}
            setFormData={setBankTakingFormData}
          />
        );
    }
  };

  const nextStep = () => {
    if (step != undefined) {
      const i = steps.indexOf(step);
      const nextStep = steps.at(i + 1);
      setStep(nextStep);
    } else {
      console.log("Step is undefined.");
    }
  };

  const previousStep = () => {
    if (step != undefined) {
      const i = steps.indexOf(step);
      const nextStep = steps.at(i - 1);
      setStep(nextStep);
    } else {
      console.log("Step is undefined.");
    }
  };

  const isFirstStep = () => {
    if (step != undefined) {
      return steps.indexOf(step) === 0;
    } else {
      console.log("Step is undefined.");
    }
  };

  const isLastStep = () => {
    if (step != undefined) {
      return steps.indexOf(step) === steps.length - 1;
    } else {
      console.log("Step is undefined.");
    }
  };

  return (
    <div>
      {renderForm()}
      <div className="flex flex-row justify-between">
        {!isFirstStep() ? (
          <button className={"btn w-24 m-8"} onClick={previousStep}>
            Back
          </button>
        ) : null}
        {!isLastStep() ? (
          <div className=" justify-end">
            <button className={"btn w-24 m-8"} onClick={nextStep}>
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
