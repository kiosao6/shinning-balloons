'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from 'react';

const steps = [
  {
    step: 1,
    title: "Shipping",
    description: "Desc for step two",
  },
  {
    step: 2,
    title: "Payment",
    description: "Desc for step three",
  },
  {
    step: 3,
    title: "Review",
    description: "Desc for step four",
  },
];

export function Steps() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepParams = searchParams.get('step');
  const defaultStep = steps.find(step => step.title.toLowerCase() === stepParams)?.step || 1
  const onClick = (title: string) => {
    router.push(`/checkout?step=${title.toLowerCase()}`)
  }
  return (
    <div className="space-y-8 text-center max-w-lg pb-8">
      <Stepper defaultValue={defaultStep} value={defaultStep} className='justify-between'>
        {steps.map(({ step, title }, index) => (
          <StepperItem onClick={() => onClick(title)} key={step} step={step}
          className={`!flex-col items-start justify-center ${index != (steps.length - 1) && 'w-full'}`}>
            <StepperTrigger className="cursor-default flex-col gap-3 items-start justify-center w-full">
              <div className="flex items-center flex-row-reverse justify-end w-full">
                {step < steps.length && (
                  <StepperSeparator className="h-1 !w-[!w-full - 28px] flex -order-1 mx-0 group-hover:bg-black transition-colors" />
                )}
                <StepperIndicator />
              </div>  
              <div className="space-y-0.5">
                <StepperTitle className='text-base-heading'>{title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}
