import { motion } from 'framer-motion';
import { Project } from './components/Project';
import { projects } from '@/lib/config/projects';

const Projects = () => {
    return (
        <section className="pt-16 px-4 md:px-0">
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
