import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { ExternalLink } from 'lucide-react';
import type { ProjectType } from '@/types/info';
import { motion } from 'framer-motion';
import GithubIcon from '@/components/ui/icon/github.tsx';

interface ProjectProps {
    project: ProjectType;
    index: number;
}

const Project = ({ project, index }: ProjectProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index * 0.1) / 3 }}
        >
            <Card className="overflow-hidden h-full flex flex-col pt-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />

                <CardHeader>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
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

                    <div className="flex items-center justify-between mt-auto">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            >
                                <GithubIcon className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span>Демо</span>
                            </a>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Project;
