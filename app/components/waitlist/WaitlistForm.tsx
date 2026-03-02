"use client";

import { useMemo, useState } from "react";
import type { WaitlistFormState, WaitlistStep } from "@/app/lib/types";
import { defaultState } from "@/app/lib/constants";
import { isStepValid } from "@/app/lib/validation";
import WaitlistHeader from "@/app/components/waitlist/WaitlistHeader";
import ProgressBar from "@/app/components/waitlist/ProgressBar";
import FormStepPills from "@/app/components/waitlist/FormStepPills";
import FormNavigation from "@/app/components/waitlist/FormNavigation";
import SuccessScreen from "@/app/components/waitlist/SuccessScreen";
import Step1 from "@/app/components/waitlist/steps/Step1";
import Step2 from "@/app/components/waitlist/steps/Step2";
import Step3 from "@/app/components/waitlist/steps/Step3";
import Step4 from "@/app/components/waitlist/steps/Step4";
import Step5 from "@/app/components/waitlist/steps/Step5";
import Step6 from "@/app/components/waitlist/steps/Step6";
import Step7 from "@/app/components/waitlist/steps/Step7";

type WaitlistFormProps = {
  /** When true, show the header with "Back" link (for standalone /waitlist page). When false, only show step indicator (for one-pager embed). */
  showHeader?: boolean;
  /** Optional id for the form container (e.g. for scroll target). */
  id?: string;
  /** Optional className for the outer wrapper. */
  className?: string;
  /** Optional intro content (e.g. title + description) rendered after header and before progress/form. */
  intro?: React.ReactNode;
};

export default function WaitlistForm({
  showHeader = true,
  id,
  className = "",
  intro,
}: WaitlistFormProps) {
  const [step, setStep] = useState<WaitlistStep>(1);
  const [state, setState] = useState<WaitlistFormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const totalSteps = 7;
  const progressPct = useMemo(
    () => Math.round((step / totalSteps) * 100),
    [step],
  );

  const nextDisabled = !isStepValid(step, state);

  function onContinue() {
    if (!isStepValid(step, state)) {
      setShowValidationErrors(true);
      return;
    }

    setShowValidationErrors(false);
    if (step < 7) setStep((s) => (s + 1) as WaitlistStep);
  }

  function onBack() {
    if (step > 1) {
      setShowValidationErrors(false);
      setStep((s) => (s - 1) as WaitlistStep);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isStepValid(7, state)) {
      setShowValidationErrors(true);
      return;
    }

    setShowValidationErrors(false);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Failed to join waitlist");
        setIsSubmitting(false);
        return;
      }

      setWaitlistPosition(data.position);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id={id} className={className}>
      {showHeader && (
        <WaitlistHeader step={step} totalSteps={totalSteps} />
      )}

      {!showHeader && (
        <div className="flex justify-end">
          <div className="text-xs text-gray-500">
            Step <span className="font-semibold text-gray-900">{step}</span> of {totalSteps}
          </div>
        </div>
      )}

      {intro}

      <ProgressBar progress={progressPct} />

      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-gray-200 bg-gray-50/80 p-6 shadow-lg"
      >
        <FormStepPills
          currentStep={step}
          totalSteps={totalSteps}
          onStepClick={setStep}
        />

        {submitted ? (
          <SuccessScreen
            email={state.email}
            waitlistPosition={waitlistPosition}
          />
        ) : (
          <>
            {step === 1 && (
              <Step1
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 2 && (
              <Step2
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 3 && (
              <Step3
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 4 && (
              <Step4
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 5 && (
              <Step5
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 6 && (
              <Step6
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}
            {step === 7 && (
              <Step7
                state={state}
                setState={setState}
                showValidationErrors={showValidationErrors}
              />
            )}

            {submitError && (
              <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-center text-sm text-red-700">
                {submitError}
              </div>
            )}

            <FormNavigation
              step={step}
              onBack={onBack}
              onContinue={onContinue}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              nextDisabled={nextDisabled}
            />
          </>
        )}
      </form>
    </div>
  );
}
