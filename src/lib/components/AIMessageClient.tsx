"use client";

import { useEffect, useState } from "react";
import RatingButtons from "@/lib/components/RatingButtons";
import { useHypertune } from "@/generated/hypertune.react";

export default function AIMessageClient() {
  const hypertune = useHypertune();
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchRecommendation() {
      try {
        const res = await fetch("/api/recommendations", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data: { message: string } = await res.json();
        if (isMounted) {
          setMessage(data.message);
        }
      } catch {
        if (isMounted) {
          setError("Unexpected error");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void fetchRecommendation();
    return () => {
      isMounted = false;
    };
  }, []);

  const loadingText = hypertune.ai().loadingMessage({ fallback: "Loading..." });

  return (
    <>
      <p>{error ? error : message || loadingText}</p>
      {!isLoading && !error && message && <RatingButtons />}
    </>
  );
}


