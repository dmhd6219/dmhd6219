import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github?: string;
}

const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description:
            'Современная платформа электронной коммерции с поддержкой множества платежных систем и интеграцией с CRM.',
        image: 'https://placehold.co/600x400',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://example.com/project1',
        github: 'https://github.com/username/project1',
    },
    {
        title: 'AI Image Generator',
        description:
            'Приложение для генерации изображений с использованием искусственного интеллекта. Поддерживает различные стили и форматы.',
        image: 'https://placehold.co/600x400',
        technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        link: 'https://example.com/project2',
        github: 'https://github.com/username/project2',
    },
    {
        title: 'Task Management System',
        description:
            'Система управления задачами с поддержкой команд, временных меток и аналитики.',
        image: 'https://placehold.co/600x400',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
        link: 'https://example.com/project3',
        github: 'https://github.com/username/project3',
    },
];

export const Projects = () => {
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
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="overflow-hidden h-full flex flex-col">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <CardHeader>
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-muted-foreground mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <Badge
                                            key={i}
                                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-600 hover:to-pink-500"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Демо</span>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
