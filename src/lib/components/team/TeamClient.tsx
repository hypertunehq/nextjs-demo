"use client";

import { useState } from "react";
import InviteMember from "@/lib/components/team/InviteMember";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

const initialMembers: TeamMember[] = [
  { id: "u1", name: "Avery Johnson", email: "avery.johnson@example.com", avatarUrl: "https://i.pravatar.cc/96?img=1" },
  { id: "u2", name: "Riley Chen", email: "riley.chen@example.com", avatarUrl: "https://i.pravatar.cc/96?img=2" },
  { id: "u3", name: "Jordan Patel", email: "jordan.patel@example.com", avatarUrl: "https://i.pravatar.cc/96?img=3" },
  { id: "u4", name: "Samira Khan", email: "samira.khan@example.com", avatarUrl: "https://i.pravatar.cc/96?img=4" },
];

export default function TeamClient(): React.ReactElement | null {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-h1 font-semibold">Team</h1>
        <InviteMember
          onInvited={(member) => {
            setMembers((prev) => [member as TeamMember, ...prev]);
          }}
        />
      </div>
      <ul className="flex flex-col gap-3">
        {members.map((member) => (
          <li
            key={member.id}
            className="flex flex-row items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src={member.avatarUrl}
              alt={`${member.name} avatar`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-h5 font-medium">{member.name}</span>
              <span className="text-md text-gray-600 dark:text-gray-300">{member.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


