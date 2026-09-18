import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050a14] text-white">
      <Navigation />

      <article className="pt-24 pb-16">
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[320px] max-h-[560px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-wide pb-10">
            <Link
              href="/#projects"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-4 inline-block"
            >
              ← Back to Projects
            </Link>
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider block mb-2">
              {project.category} · {project.year}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {project.name}
            </h1>
            <p className="text-slate-400">{project.location}</p>
          </div>
        </div>

        <div className="container-wide py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>

              {project.images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-sm overflow-hidden border border-white/10">
                      <Image
                        src={img}
                        alt={`${project.name} — image ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Services Delivered
                </h3>
                <ul className="space-y-2 mb-8">
                  {project.services.map((service) => (
                    <li key={service} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="btn-primary w-full text-center">
                  Start a Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
