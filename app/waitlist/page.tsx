"use client";

import WaitlistForm from "@/app/components/waitlist/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pb-16 pt-10 md:px-8">
        <WaitlistForm
          showHeader={true}
          intro={
            <header className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-[#008AFF]">
                MAVSCAN Waitlist
              </p>
              <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                Get ready to scan smarter.
              </h1>
              <p className="text-gray-600">
                Answer a few quick questions so we can tailor MAVSCAN to your needs.
              </p>
            </header>
          }
        />
      </div>
    </div>
  );
}
