import { Metadata } from "next";
import ProjectsClient from "@/lib/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects - Potion",
};

export default function ProjectsPage() {
  return (
    <div className="-m-4 flex flex-col gap-4 p-10">
      <ProjectsClient />
    </div>
  );
}


