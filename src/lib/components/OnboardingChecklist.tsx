"use client";

import { useEffect, useState } from "react";
import Button from "@/lib/components/Button";

type ChecklistItem = {
  id: string;
  label: string;
  completed: boolean;
};

const STORAGE_KEY = "onboarding_checklist";

export default function OnboardingChecklist(): React.ReactElement | null {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: "create_project", label: "Create your first project", completed: false },
    { id: "invite_teammate", label: "Invite a teammate", completed: false },
    { id: "explore_plans", label: "Explore plans & features", completed: false },
    { id: "get_ai_tip", label: "Get an AI recommendation", completed: false },
  ]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChecklistItem[];
        setItems((prev) =>
          prev.map((p) => parsed.find((x) => x.id === p.id) ?? p)
        );
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const allDone = items.every((i) => i.completed);

  return (
    <div className="w-full rounded-lg border border-bd-darker bg-white p-4 text-tx-default dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-h4 font-semibold">Onboarding checklist</h2>
        {allDone && (
          <span className="text-sm text-intent-success">All set!</span>
        )}
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3">
            <label className="flex flex-1 cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer"
                checked={item.completed}
                onChange={() =>
                  setItems((prev) =>
                    prev.map((x) =>
                      x.id === item.id ? { ...x, completed: !x.completed } : x
                    )
                  )
                }
              />
              <span className={item.completed ? "line-through text-tx-muted" : ""}>{item.label}</span>
            </label>
            {item.id === "create_project" && (
              <a href="/app/projects" className="shrink-0">
                <Button intent="primary" text="Open" size="small" />
              </a>
            )}
            {item.id === "invite_teammate" && (
              <a href="/app/team" className="shrink-0">
                <Button intent="primary" text="Open" size="small" />
              </a>
            )}
            {item.id === "explore_plans" && (
              <a href="/app/plans" className="shrink-0">
                <Button intent="primary" text="Open" size="small" />
              </a>
            )}
            {item.id === "get_ai_tip" && (
              <a href="/app" className="shrink-0">
                <Button intent="primary" text="Open" size="small" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


