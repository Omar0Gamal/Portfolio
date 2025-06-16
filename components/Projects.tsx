'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import projectDetails, { ProjectKey, ProjectDetail } from '../data/projects';

type Project = { id: ProjectKey } & ProjectDetail;

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects: Project[] = Object.entries(projectDetails).map(([key, detail]) => ({
        id: key as ProjectKey,
        ...detail,
    }));

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

    const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
        <div
            className={`bg-white/5 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,245,255,0.3)] hover:scale-105 animate-scale`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => openProjectModal(project)}
        >
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={400} 
                        height={192} 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <div className="text-6xl text-primary/50">📁</div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-3">{project.title}</h3>
                <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-secondary/10 text-secondary py-1 px-3 rounded-full text-xs">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400">+{project.technologies.length - 3} more</span>
                    )}
                </div>
            </div>
        </div>
    );

    const ProjectModal = ({ project }: { project: Project }) => (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[2000] backdrop-blur-xl"
            onClick={closeProjectModal}
        >
            <style jsx>{`
                .modal-scrollbar::-webkit-scrollbar { width: 8px; }
                .modal-scrollbar::-webkit-scrollbar-track { background: transparent; border-radius: 10px; }
                .modal-scrollbar::-webkit-scrollbar-thumb { 
                    background: rgba(0, 245, 255, 0.3); 
                    border-radius: 10px; 
                    border: 2px solid transparent; 
                    background-clip: content-box; 
                }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover { 
                    background: rgba(0, 245, 255, 0.5); 
                    background-clip: content-box; 
                }
                @keyframes scale {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-scale {
                    animation: scale 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
            
            <div
                className="bg-white/10 rounded-2xl p-8 max-w-4xl w-[90%] max-h-[80vh] overflow-y-auto backdrop-blur-xl border border-white/20 relative modal-scrollbar"
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#00f5ff40 transparent' }}
            >
                <button
                    className="absolute top-4 right-6 text-light text-2xl hover:text-primary transition-colors"
                    onClick={closeProjectModal}
                >
                    ×
                </button>
                
                <div className="w-full h-64 mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    {project.image ? (
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={600} 
                            height={256} 
                            className="w-full h-full object-cover rounded-xl" 
                        />
                    ) : (
                        <div className="text-8xl text-primary/50">📁</div>
                    )}
                </div>

                <h2 className="text-3xl text-primary mb-4">{project.title}</h2>
                <p className="text-lg mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                    <h4 className="text-accent mb-3 text-xl">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-primary mr-2">▶</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="text-accent mb-3 text-xl">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="bg-primary/10 text-primary py-2 px-3 rounded-lg text-sm border border-primary/30">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.links && (
                    <div className="flex gap-4">
                        {Object.entries(project.links).map(([buttonName, url]) => (
                            <a
                                key={buttonName}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-primary/20 text-primary rounded-lg font-medium border border-primary/30 hover:bg-primary/30 transition-all"
                            >
                                {buttonName}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <section id="projects" className="min-h-screen py-24 px-5 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
