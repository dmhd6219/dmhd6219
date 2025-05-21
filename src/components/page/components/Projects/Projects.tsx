import { motion } from 'framer-motion';
import { Project } from './components/Project';
import { projects } from '@/lib/config/projects';
import { useEffect, useRef } from 'react';
import { ym } from 'react-metrika';
import { COUNTER_NUMBER } from '@/lib/config/ym';

const Projects = () => {
    const projectsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        ym(COUNTER_NUMBER, 'reachGoal', 'projects_intersected');
                    }
                });
            },
            {
                threshold: [0.1],
                rootMargin: '0px',
            },
        );

        const currentRef = projectsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={projectsRef}
            className="pt-16 px-4 md:px-0"
            id="projects"
            style={{ minHeight: '100vh' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h2 className="text-3xl font-bold">Проекты</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Project project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
