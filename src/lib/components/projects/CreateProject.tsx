"use client";

import React, { useState } from "react";
import Modal from "@/lib/components/Modal";
import Button from "@/lib/components/Button";

export default function CreateProject({
  onCreated,
}: {
  onCreated?: (project: { id: string; name: string; description: string; image: string }) => void;
}): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // Validation is computed from `name` each render

  const close = () => setOpen(false);
  const reset = () => {
    setName("");
    setDescription("");
  };

  const isValidName = (value: string): boolean => {
    // Allow letters, numbers, spaces, hyphens, and underscores only
    return /^[A-Za-z0-9 _-]+$/.test(value);
  };

  const trimmedName = name.trim();
  const isNameInvalid = trimmedName.length > 0 && !isValidName(trimmedName);
  const currentNameError = isNameInvalid
    ? "Only letters, numbers, spaces, hyphens, and underscores are allowed."
    : null;
    console.log("currentNameError", currentNameError);

  const handleCreate = () => {
    const trimmed = name.trim();
    if (!trimmed || !isValidName(trimmed)) {
      return;
    }
    // Simulate creation; in real app, call API and use response
    const newProject = {
      id: `p${Math.random().toString(36).slice(2, 8)}`,
      name: trimmed,
      description: description.trim(),
      image: `https://picsum.photos/seed/${encodeURIComponent(trimmed)} /800/400`.replace(" %2F", ""),
    };

    onCreated?.(newProject);
    close();
    reset();
  };

  return (
    <>
      <Button
        text="New project"
        intent="primary"
        weight="filled"
        size="large"
        className="text-md"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        title="Create a new project"
        description="Give your project a clear name and a short description so your team knows what it’s about. You can edit these later."
        onClose={close}
        primaryAction={{ label: "Create", onClick: handleCreate, disabled: trimmedName.length === 0 || isNameInvalid }}
        secondaryAction={{ label: "Cancel", onClick: close }}
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm">Project name</span>
          <input
            className={
              `rounded-md border px-3 py-2 outline-none ` +
              (isNameInvalid ? "border-red-500 focus:border-red-500" : "border-bd-darker focus:border-intent-primary")
            }
            placeholder="e.g. Customer Portal"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            aria-invalid={isNameInvalid ? true : false}
            aria-describedby={isNameInvalid ? "project-name-error" : undefined}
          />
          {currentNameError && (
            <span id="project-name-error" className="text-xs" style={{ color: '#dc2626' }}>{currentNameError}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Description</span>
          <textarea
            className="min-h-[90px] rounded-md border border-bd-darker px-3 py-2 outline-none focus:border-intent-primary"
            placeholder="What’s the goal or scope?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </Modal>
    </>
  );
}


