"use client";

import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/app/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <LazyMap />
    </main>
  );
}
