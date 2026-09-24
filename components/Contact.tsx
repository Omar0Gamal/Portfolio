'use client';

import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';


interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);

    const validateForm = (formData: FormData): FormErrors => {
        const errors: FormErrors = {};
        
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }
        
        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        
        try {
            const formDataObj = new FormData(e.currentTarget);
            const formData: FormData = {
                name: (formDataObj.get('name') as string)?.trim() || '',
                email: (formDataObj.get('email') as string)?.trim() || '',
                subject: (formDataObj.get('subject') as string)?.trim() || '',
                message: (formDataObj.get('message') as string)?.trim() || '',
            };

            const validationErrors = validateForm(formData);
            
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            const mailtoLink = `mailto:omargamal.dev@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            window.location.href = mailtoLink;
            
            setShowSuccess(true);
            (e.target as HTMLFormElement).reset();
            
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-24 px-5 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                    Get In Touch
                </h2>
                
                {showSuccess && (
                    <div className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                        Message received. Your email client should open shortly.
                    </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-xl border border-white/10 animate-left">
                        <h3 className="text-2xl font-bold mb-6">
                            Open to new opportunities
                        </h3>
                        <p className="mb-8 text-gray-300 leading-relaxed">
                            I&apos;m actively looking for backend and infrastructure engineering roles.
                            If you&apos;re building distributed systems, working on developer tooling,
                            or just want to talk about something interesting, reach out.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                                <FiMapPin size={18} className="text-primary/60 shrink-0" />
                                <span>Cairo, Egypt</span>
                            </div>
                            <a
                                href="tel:+201064444598"
                                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 text-light no-underline transition-all duration-300 hover:text-primary hover:bg-white/10"
                                aria-label="Call Omar Gamal"
                            >
                                <FiPhone size={18} className="shrink-0" />
                                <span>+201064444598</span>
                            </a>
                            <a
                                href="mailto:omargamal.dev@outlook.com"
                                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 text-light no-underline transition-all duration-300 hover:text-primary hover:bg-white/10"
                                aria-label="Email Omar Gamal"
                            >
                                <FiMail size={18} className="shrink-0" />
                                <span>omargamal.dev@outlook.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-xl border border-white/10 animate-right">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-primary mb-2 font-semibold"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={`w-full p-4 bg-white/10 border rounded-xl text-light text-base transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] ${
                                            errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'
                                        }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="text-red-400 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-primary mb-2 font-semibold"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className={`w-full p-4 bg-white/10 border rounded-xl text-light text-base transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] ${
                                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-red-400 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-primary mb-2 font-semibold"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                    className={`w-full p-4 bg-white/10 border rounded-xl text-light text-base transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] ${
                                        errors.subject ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'
                                    }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && (
                                    <p id="subject-error" className="text-red-400 text-sm mt-1">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-primary mb-2 font-semibold"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    className={`w-full p-4 bg-white/10 border rounded-xl text-light text-base transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.3)] resize-vertical ${
                                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'
                                    }`}
                                    placeholder="Tell me about your project or idea..."
                                />
                                {errors.message && (
                                    <p id="message-error" className="text-red-400 text-sm mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full p-4 bg-gradient-to-r from-primary to-accent text-dark border-none rounded-full text-base font-bold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin inline-block">⏳</span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
