import React, { ReactElement } from "react";
import MultiStepForm from "./(components)/MultiStepForm";
import { Steps } from "./(components)/(enum)/Steps";
import Safe from "./(components)/Safe";
import Till from "./(components)/Till";
import BankTaking from "./(components)/BankTaking";

export default function DailyTaking() {
  let steps: [Steps, ReactElement][] = [
    [Steps.Safe, <Safe />],
    [Steps.Till, <Till />],
    [Steps.BankTaking, <BankTaking />],
  ];

  return <MultiStepForm steps={steps} />;
}
