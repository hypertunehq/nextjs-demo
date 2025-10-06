import { Metadata } from "next";
import TeamClient from "@/lib/components/team/TeamClient";

export const metadata: Metadata = {
  title: "Team - Potion",
};

export default function TeamPage() {
  return (
    <div className="-m-4 flex flex-col gap-4 p-10">
      <TeamClient />
    </div>
  );
}
