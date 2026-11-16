"use client";

export default function CityError({ reset }: { reset: () => void }) {
  return <main className="mx-auto max-w-xl px-6 py-24 text-center"><h1 className="text-3xl text-primary">City page temporarily unavailable</h1><p className="my-6">Please try again in a moment, or contact our team on +91 98875 37129.</p><button onClick={reset} className="rounded bg-primary px-6 py-3 text-white">Try again</button></main>;
}
