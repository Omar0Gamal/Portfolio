'use client';

import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projectDetails, { ProjectKey, ProjectDetail } from '../data/projects';

type Project = { id: ProjectKey } & ProjectDetail;

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects: Project[] = Object.entries(projectDetails).map(([key, detail]) => ({
        id: key as ProjectKey,
        ...detail,
    }));

    const getStatusStyles = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'in development':
            case 'in-development':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'planned':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'on hold':
            case 'on-hold':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'open source':
                return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
            case 'archived':
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
            default:
                return 'bg-accent/20 text-accent border-accent/30';
        }
    };

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const bannerColors: Record<string, string> = {
        cartwright:    'from-sky-900/60 to-indigo-900/60',
        axiomgraph:    'from-cyan-900/60 to-teal-900/60',
        llamacpp:      'from-slate-800/60 to-zinc-900/60',
        nexuscommerce: 'from-blue-900/60 to-sky-800/60',
        darkfire:      'from-rose-900/40 to-slate-900/60',
    };

    const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
        const gradient = bannerColors[project.id] ?? 'from-slate-800/60 to-slate-900/60';
        const githubLink = project.links
            ? Object.entries(project.links).find(([, url]) => url.includes('github.com'))
            : null;

        return (
            <div
                className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,189,248,0.15)] hover:border-primary/30 hover:scale-[1.02] animate-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openProjectModal(project)}
            >
                {/* Banner */}
                <div className={`w-full h-36 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 border-b border-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }} />
                    <div className="flex flex-wrap gap-1.5 justify-center px-4 relative z-10">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[10px] font-medium bg-white/10 text-sky-200 border border-white/15 px-2 py-0.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            {project.status && (
                                <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold border ${getStatusStyles(project.status)}`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                        {githubLink && (
                            <a
                                href={githubLink[1]}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.title} on GitHub`}
                                className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-primary border border-white/10 hover:border-primary/30 bg-white/5 hover:bg-primary/5 px-3 py-1.5 rounded-full transition-all duration-200 shrink-0"
                            >
                                <FiGithub size={12} />
                                <span>Source</span>
                            </a>
                        )}
                    </div>
                    <h3 className="text-lg font-bold text-light mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 line-clamp-2 text-foreground/60 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="bg-primary/10 text-primary/80 py-0.5 px-2.5 rounded-full text-xs border border-primary/20">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs text-gray-500 py-0.5 px-1">+{project.technologies.length - 3} more</span>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const ProjectModal = ({ project }: { project: Project }) => (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[2000] backdrop-blur-xl"
            onClick={closeProjectModal}
        >
            <style jsx>{`
                .modal-scrollbar::-webkit-scrollbar { width: 6px; }
                .modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .modal-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(56,189,248,0.25);
                    border-radius: 10px;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(56,189,248,0.4);
                }
            `}</style>

            <div
                className="bg-slate-900/95 rounded-2xl p-8 max-w-4xl w-[90%] max-h-[85vh] overflow-y-auto backdrop-blur-xl border border-white/15 relative modal-scrollbar"
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#38bdf840 transparent' }}
            >
                <button
                    className="absolute top-4 right-5 text-foreground/50 text-2xl hover:text-primary transition-colors"
                    onClick={closeProjectModal}
                    aria-label="Close modal"
                >
                    ×
                </button>

                {/* Modal banner */}
                <div className={`w-full h-44 mb-6 bg-gradient-to-br ${bannerColors[project.id] ?? 'from-slate-800/60 to-slate-900/60'} rounded-xl flex flex-col items-center justify-center gap-3 border border-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0 rounded-xl" style={{
                        backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }} />
                    <span className="text-2xl font-bold text-white/90 relative z-10">{project.title}</span>
                    <div className="flex flex-wrap gap-2 justify-center px-6 relative z-10">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="text-xs bg-white/10 text-sky-200 border border-white/15 px-2.5 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {project.status && (
                        <span className={`inline-block py-1 px-4 rounded-full text-sm font-semibold border ${getStatusStyles(project.status)}`}>
                            {project.status}
                        </span>
                    )}
                    {project.links && Object.entries(project.links).map(([buttonName, url]) => (
                        <a
                            key={buttonName}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium border border-primary/25 hover:bg-primary/25 transition-all"
                        >
                            {url.includes('github.com') ? <FiGithub size={13} /> : <FiExternalLink size={13} />}
                            {buttonName}
                        </a>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-light mb-3">{project.title}</h2>
                <p className="text-base mb-6 leading-relaxed text-foreground/70">{project.description}</p>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-3">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                                <span className="text-primary mt-0.5 shrink-0">›</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <section id="projects" className="min-h-screen py-24 px-5 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
                        Key Projects
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} />
            )}
        </>
    );
};

export default Projects;
