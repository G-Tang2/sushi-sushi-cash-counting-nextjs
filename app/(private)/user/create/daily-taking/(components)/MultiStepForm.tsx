import { ReactElement, useState } from "react";
import { Steps } from "@/common/types";

type MultiStepFormProps = {
  steps: [Steps, ReactElement][];
};

export default function MultiStepForm({ steps }: MultiStepFormProps) {
  const [step, setStep] = useState(steps.at(0));
  return step?.[1];
}
