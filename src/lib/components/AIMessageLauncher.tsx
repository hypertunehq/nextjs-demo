"use client";

import { useState } from "react";
import Button from "@/lib/components/Button";
import AIMessageClient from "@/lib/components/AIMessageClient";

export default function AIMessageLauncher() {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {!showAI && (
        <Button intent="primary" text="Get your latest AI recommendation on how to make the most of your Potion workspace" onClick={() => setShowAI(true)} />
      )}
      {showAI && <AIMessageClient />}
    </div>
  );
}


