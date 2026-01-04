"use client";

import { useState } from "react";
import { type ProjectType, PROJECTS } from "@/constants";
import { ProjectFilter } from "./ProjectFilter";
import { FeaturedProject } from "./FeaturedProject";
import { OtherProject } from "./OtherProject";

export const ProjectsSection = () => {
  const [filterType, setFilterType] = useState<ProjectType | "all">("all");

  const filteredProjects = PROJECTS.filter((project) =>
    filterType === "all" ? true : project.type === filterType
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-4">
            <span className="font-mono text-xl text-accent">03.</span>
            <span className="text-foreground">Projetos</span>
            <div className="flex-1 h-px bg-border ml-4 max-w-xs"></div>
          </h2>

          <ProjectFilter
            filterType={filterType}
            onFilterChange={setFilterType}
          />
        </div>

        {/* Projetos em Destaque */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Outros Projetos */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Outros Projetos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <OtherProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary text-lg">
              Nenhum projeto encontrado com este filtro.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
