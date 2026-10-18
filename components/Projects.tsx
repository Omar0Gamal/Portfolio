'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX, FiLayers } from 'react-icons/fi';
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
                return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
            case 'in development':
            case 'in-development':
                return 'bg-sky-500/15 text-sky-400 border-sky-500/30';
            case 'planned':
                return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
            case 'on hold':
            case 'on-hold':
                return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
            case 'open source':
                return 'bg-teal-500/15 text-teal-300 border-teal-500/30';
            case 'archived':
                return 'bg-gray-500/15 text-gray-400 border-gray-500/30';
            default:
                return 'bg-accent/15 text-accent border-accent/30';
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
        nexuscommerce: 'from-blue-900/50 to-sky-800/40',
        jobtrack:      'from-emerald-950/50 to-teal-900/40',
        cartwright:    'from-sky-900/50 to-indigo-900/40',
        axiomgraph:    'from-cyan-900/50 to-teal-900/40',
        llamacpp:      'from-slate-800/50 to-zinc-900/40',
        darkfire:      'from-rose-900/30 to-slate-900/40',
    };

    const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
        const gradient = bannerColors[project.id] ?? 'from-slate-800/50 to-slate-900/40';
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
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(56,189,248,0.12)] hover:border-primary/25"
                onClick={() => openProjectModal(project)}
            >
                {/* Banner */}
                <div className={`w-full h-44 bg-gradient-to-br ${gradient} border-b border-white/10 relative overflow-hidden`}>
                    {project.image ? (
                        <>
                            <Image
                                src={project.image}
                                alt={`${project.title} preview`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent pointer-events-none" />
                        </>
                    ) : (
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }} />
                    )}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 justify-center z-10">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[10px] font-medium bg-black/60 backdrop-blur-md text-sky-200 border border-white/15 px-2.5 py-0.5 rounded-full shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            {project.status && (
                                <span className={`inline-flex items-center py-0.5 px-3 rounded-full text-xs font-semibold border ${getStatusStyles(project.status)} backdrop-blur-md`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
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
                                    className="flex items-center gap-1.5 text-xs text-sky-300 bg-sky-950/80 hover:bg-sky-900 border border-sky-700/50 hover:border-sky-500 px-3 py-1 rounded-full transition-all backdrop-blur-md shadow-sm"
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

                    <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                    {/* Expandable Tech tags - matching Experience tech pills */}
                    <div className="flex flex-wrap gap-1.5 items-center">
                        {visibleTechs.map((tech) => (
                            <span
                                key={tech}
                                className="bg-sky-950/60 text-sky-300 py-1 px-2.5 rounded-full text-xs border border-sky-700/30"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[2000] p-3 sm:p-6"
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
                className="bg-[#080d1a]/30 bg-gradient-to-br from-primary/15 via-white/10 to-accent/10 backdrop-blur-3xl border border-primary/20 rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(56,189,248,0.20)] relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-primary/15 bg-white/[0.04] shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        {project.status && (
                            <span className={`inline-flex items-center py-0.5 px-3 rounded-full text-xs font-semibold border ${getStatusStyles(project.status)} shrink-0 backdrop-blur-md`}>
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
                                className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
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
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer ml-1 backdrop-blur-md"
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
                    <div className={`relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${bannerColors[project.id] ?? 'from-slate-800/50 to-slate-900/40'} group shadow-inner`}>
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
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
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
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Overview
                        </h3>
                        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Capabilities & Architecture Grid - using bg-white/5 matching Experience cards */}
                    <div>
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Key Capabilities & Architecture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-primary/25 backdrop-blur-xl transition-all duration-200 group"
                                >
                                    <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                        <FiLayers size={11} />
                                    </div>
                                    <span className="text-xs md:text-sm text-foreground/80 leading-relaxed font-normal">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Pills - matching Experience tech pills */}
                    <div>
                        <h3 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Technologies & Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-sky-950/60 text-sky-300 py-1 px-3 rounded-full text-xs border border-sky-700/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-primary/15 bg-white/[0.04] shrink-0">
                    <span className="text-xs text-foreground/50 hidden sm:inline">
                        Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/10 text-[10px] text-foreground/70">Esc</kbd> to exit
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
                                        ? 'bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md'
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
