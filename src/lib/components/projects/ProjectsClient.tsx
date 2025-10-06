"use client";

import { useState } from "react";
import Image from "next/image";
import CreateProject from "@/lib/components/projects/CreateProject";

type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const initialProjects: Project[] = [
  { id: "p1", name: "Customer Portal", description: "Next.js + Stripe integration", image: "https://picsum.photos/seed/portal/800/400" },
  { id: "p2", name: "Analytics Dashboard", description: "Realtime charts with WebSockets", image: "https://picsum.photos/seed/analytics/800/400" },
  { id: "p3", name: "Mobile App Backend", description: "tRPC API for React Native", image: "https://picsum.photos/seed/backend/800/400" },
  { id: "p4", name: "Marketing Site", description: "Static pages with CMS", image: "https://picsum.photos/seed/marketing/800/400" },
  { id: "p5", name: "Search Service", description: "Elasticsearch integration", image: "https://picsum.photos/seed/search/800/400" },
  { id: "p6", name: "Notification Hub", description: "Email & push pipeline", image: "https://picsum.photos/seed/notifications/800/400" },
  { id: "p7", name: "Admin Console", description: "RBAC + audit logs", image: "https://picsum.photos/seed/admin/800/400" },
  { id: "p8", name: "Data Lake", description: "ETL to S3 + Athena", image: "https://picsum.photos/seed/datalake/800/400" },
  { id: "p9", name: "Design System", description: "Reusable UI components", image: "https://picsum.photos/seed/design/800/400" },
  { id: "p10", name: "Billing Revamp", description: "Usage-based pricing", image: "https://picsum.photos/seed/billing/800/400" },
];

export default function ProjectsClient(): React.ReactElement | null {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showBanner, setShowBanner] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-3">
      {showBanner && (
        <div className="relative w-full rounded-lg border border-intent-primary/30 bg-intent-primary/5 p-4 text-intent-primary mb-6">
          <button
            type="button"
            aria-label="Dismiss"
            className="absolute right-2 top-2 rounded p-1 hover:bg-intent-primary/10"
            onClick={() => setShowBanner(false)}
          >
            ×
          </button>
          <div className="text-h4 font-semibold">Welcome to your projects</div>
          <div className="text-md text-tx-default mt-2">
            Manage and track all your projects in one place. Create a new project to get started.
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <h1 className="text-h1 font-semibold">Projects</h1>
        <CreateProject
          onCreated={(project) => {
            setProjects((prev) => [project as Project, ...prev]);
          }}
        />
      </div>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-[2px] hover:border-bd-darker hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="text-h5 font-medium">{project.name}</div>
                <div className="text-md text-gray-600 dark:text-gray-300">{project.description}</div>
              </div>
              <div className="relative mt-2 h-[45%] w-full overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={`${project.name} cover`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="text-2xs text-tx-muted">ID: {project.id}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


