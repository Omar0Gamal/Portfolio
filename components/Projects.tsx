'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import projectDetails, { ProjectKey, ProjectDetail } from '../data/projects';
import { FadeIn } from '@/components/Motion';

type Project = { id: ProjectKey } & ProjectDetail;

const defaultEase = [0.21, 0.47, 0.32, 0.98] as const;

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedTags, setExpandedTags] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        };
        if (isModalOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

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
        nexuscommerce: 'from-blue-900/60 to-sky-800/60',
        jobtrack:      'from-emerald-950/60 to-teal-900/60',
        cartwright:    'from-sky-900/60 to-indigo-900/60',
        axiomgraph:    'from-cyan-900/60 to-teal-900/60',
        llamacpp:      'from-slate-800/60 to-zinc-900/60',
        darkfire:      'from-rose-900/40 to-slate-900/60',
    };

    const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
        const gradient = bannerColors[project.id] ?? 'from-slate-800/60 to-slate-900/60';
        const githubLink = project.links
            ? Object.entries(project.links).find(([, url]) => url.includes('github.com'))
            : null;
        const liveDemoLink = project.links
            ? Object.entries(project.links).find(([name]) => name.toLowerCase().includes('demo'))
            : null;

        const isTagsExpanded = !!expandedTags[project.id];
        const visibleTechs = isTagsExpanded
            ? project.technologies
            : project.technologies.slice(0, 3);

        return (
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px', amount: 0.08 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: defaultEase }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 transition-colors duration-300 cursor-pointer hover:shadow-[0_25px_50px_rgba(56,189,248,0.15)] hover:border-primary/30"
                onClick={() => openProjectModal(project)}
            >
                {/* Banner */}
                <div className={`w-full h-44 bg-gradient-to-br ${gradient} border-b border-white/10 relative overflow-hidden group`}>
                    {project.image ? (
                        <>
                            <Image
                                src={project.image}
                                alt={`${project.title} preview`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent pointer-events-none" />
                        </>
                    ) : (
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }} />
                    )}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 justify-center z-10">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[10px] font-medium bg-black/60 backdrop-blur-md text-sky-200 border border-white/15 px-2 py-0.5 rounded-full">
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
                        <div className="flex items-center gap-2 shrink-0">
                            {liveDemoLink && (
                                <a
                                    href={liveDemoLink[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-1.5 text-xs text-sky-300 bg-sky-950/80 hover:bg-sky-900 border border-sky-700/50 hover:border-sky-500 px-2.5 py-1 rounded-full transition-all"
                                    aria-label={`Open live demo for ${project.title}`}
                                >
                                    <FiExternalLink size={12} />
                                    <span>Demo</span>
                                </a>
                            )}
                            {githubLink && (
                                <a
                                    href={githubLink[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-foreground/60 hover:text-primary transition-colors p-1"
                                    aria-label={`View ${project.title} source on GitHub`}
                                >
                                    <FiGithub size={17} />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                    {/* Expandable Tech tags */}
                    <div className="flex flex-wrap gap-1.5 items-center">
                        {visibleTechs.map((tech) => (
                            <span
                                key={tech}
                                className="bg-sky-950/60 text-sky-200 py-0.5 px-2.5 rounded-full text-xs border border-sky-700/30"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedTags((prev) => ({
                                        ...prev,
                                        [project.id]: !prev[project.id],
                                    }));
                                }}
                                className="text-xs text-primary/80 hover:text-primary underline cursor-pointer px-1 py-0.5"
                            >
                                {isTagsExpanded
                                    ? 'Show less'
                                    : `+${project.technologies.length - 3} more`}
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    const ProjectModal = ({ project }: { project: Project }) => (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[2000] p-3 sm:p-6"
            onClick={closeProjectModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
        >
            <style jsx>{`
                .modal-scrollbar::-webkit-scrollbar { width: 6px; }
                .modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .modal-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(56,189,248,0.25);
                    border-radius: 10px;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(56,189,248,0.45);
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: defaultEase }}
                className="bg-slate-950/95 border border-white/15 rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02] shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        {project.status && (
                            <span className={`inline-flex items-center py-0.5 px-3 rounded-full text-xs font-semibold border ${getStatusStyles(project.status)} shrink-0`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                                {project.status}
                            </span>
                        )}
                        <h2 id="modal-project-title" className="text-xl md:text-2xl font-bold text-white truncate">
                            {project.title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        {project.links && Object.entries(project.links).map(([buttonName, url]) => (
                            <a
                                key={buttonName}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                    url.includes('github.com')
                                        ? 'bg-white/10 hover:bg-white/15 text-white/90 border border-white/15'
                                        : 'bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                                }`}
                            >
                                {url.includes('github.com') ? <FiGithub size={13} /> : <FiExternalLink size={13} />}
                                <span>{buttonName}</span>
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={closeProjectModal}
                            aria-label="Close modal"
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer ml-1"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                </div>

                {/* Modal Scrollable Body */}
                <div
                    className="p-6 md:p-8 overflow-y-auto space-y-6 modal-scrollbar"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#38bdf840 transparent' }}
                >
                    {/* Showcase Banner / Screenshot */}
                    <div className={`relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${bannerColors[project.id] ?? 'from-slate-900 to-slate-950'} group`}>
                        {project.image ? (
                            <>
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 900px"
                                    className="object-cover object-top opacity-95 group-hover:scale-[1.02] transition-transform duration-500"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center" style={{
                                backgroundImage: 'linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}>
                                <span className="text-3xl font-extrabold text-white/80 tracking-wide">{project.title}</span>
                            </div>
                        )}
                    </div>

                    {/* Overview */}
                    <div>
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-2">
                            Overview
                        </h3>
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Capabilities & Architecture Grid */}
                    <div>
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">
                            Key Capabilities & Architecture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/30 transition-colors"
                                >
                                    <span className="text-base leading-none mt-0.5 shrink-0 text-primary">•</span>
                                    <span className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">
                            Technologies & Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-sky-950/70 text-sky-200 border border-sky-600/30 px-3 py-1 rounded-lg text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-white/[0.02] shrink-0">
                    <span className="text-xs text-foreground/50 hidden sm:inline">
                        Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/10 text-[10px]">Esc</kbd> to exit
                    </span>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        {project.links && Object.entries(project.links).map(([buttonName, url]) => (
                            <a
                                key={buttonName}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                    url.includes('github.com')
                                        ? 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                                        : 'bg-gradient-to-r from-primary to-accent text-dark font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:-translate-y-0.5'
                                }`}
                            >
                                {url.includes('github.com') ? <FiGithub size={14} /> : <FiExternalLink size={14} />}
                                <span>{buttonName}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return (
        <>
            <section id="projects" className="min-h-screen py-24 px-5 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
                            Key Projects
                        </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && selectedProject && (
                    <ProjectModal project={selectedProject} />
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;
