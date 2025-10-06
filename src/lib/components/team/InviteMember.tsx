"use client";

import React, { useState } from "react";
import Modal from "@/lib/components/Modal";
import Button from "@/lib/components/Button";

export default function InviteMember({
  onInvited,
}: {
  onInvited?: (member: { id: string; name: string; email: string; avatarUrl: string }) => void;
}): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  const isValidName = (value: string): boolean => /^[A-Za-z0-9 _-]+$/.test(value);
  const isValidEmail = (value: string): boolean => /.+@.+\..+/.test(value);
  const nameError = trimmedName.length > 0 && !isValidName(trimmedName)
    ? "Only letters, numbers, spaces, hyphens, and underscores are allowed."
    : null;
  const emailError = trimmedEmail.length > 0 && !isValidEmail(trimmedEmail)
    ? "Enter a valid email address."
    : null;

  const close = () => setOpen(false);
  const reset = () => {
    setName("");
    setEmail("");
  };

  const handleInvite = () => {
    if (!trimmedName || !trimmedEmail || nameError || emailError) {
      return;
    }

    const newMember = {
      id: `u${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName,
      email: trimmedEmail,
      avatarUrl: `https://i.pravatar.cc/96?u=${encodeURIComponent(trimmedEmail)}`,
    };

    onInvited?.(newMember);
    close();
    reset();
  };

  return (
    <>
      <Button
        text="Invite member"
        intent="primary"
        weight="filled"
        size="large"
        className="text-md"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        title="Invite a team member"
        description="Enter the person’s name and email. We’ll send them an invite to join your workspace."
        onClose={close}
        primaryAction={{ label: "Send Invite", onClick: handleInvite, disabled: !trimmedName || !trimmedEmail || !!nameError || !!emailError }}
        secondaryAction={{ label: "Cancel", onClick: close }}
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm">Full name</span>
          <input
            className={`rounded-md border px-3 py-2 outline-none ${nameError ? "border-red-500 focus:border-red-500" : "border-bd-darker focus:border-intent-primary"}`}
            placeholder="e.g. Jamie Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!nameError}
            aria-describedby={nameError ? "invite-name-error" : undefined}
          />
          {nameError && (
            <span id="invite-name-error" className="text-xs" style={{ color: '#dc2626' }}>{nameError}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className={`rounded-md border px-3 py-2 outline-none ${emailError ? "border-red-500 focus:border-red-500" : "border-bd-darker focus:border-intent-primary"}`}
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!emailError}
            aria-describedby={emailError ? "invite-email-error" : undefined}
          />
          {emailError && (
            <span id="invite-email-error" className="text-xs" style={{ color: '#dc2626' }}>{emailError}</span>
          )}
        </label>
      </Modal>
    </>
  );
}


