import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: 'Tech Solutions Inc.',
        position: 'Senior Frontend Developer',
        period: '2022 - Настоящее время',
        description: [
            'Разработка и поддержка высоконагруженных веб-приложений',
            'Оптимизация производительности и улучшение UX',
            'Менторство младших разработчиков',
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    },
    {
        company: 'Digital Innovations',
        position: 'Frontend Developer',
        period: '2020 - 2022',
        description: [
            'Разработка пользовательских интерфейсов',
            'Интеграция с REST API',
            'Участие в code review',
        ],
        technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack'],
    },
];

export const Experience = () => {
    return (
        <section className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-8"
            >
                <h2 className="text-3xl font-bold">Опыт работы</h2>
            </motion.div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {exp.position}
                                        </h3>
                                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <Badge
                                            key={i}
                                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
