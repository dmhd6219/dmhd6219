import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/config/expirience';
import { cn } from '@/lib/utils.ts';

export const Experience = () => {
    return (
        <section className="pt-16 px-4 md:px-0">
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
                                    <div className="flex items-center gap-x-4">
                                        {exp.image && (
                                            <img
                                                src={exp.image}
                                                alt={exp.company}
                                                className="w-16 h-16"
                                            />
                                        )}
                                        <div>
                                            <h3
                                                className={cn(
                                                    'text-xl font-semibold',
                                                    exp.link && 'underline',
                                                )}
                                            >
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                >
                                                    {exp.company}
                                                </a>
                                            </h3>
                                            <p className="font-medium text-zinc-300">
                                                {exp.position}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-muted-foreground text-right">
                                        {exp.period}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div className="pb-2 text-muted-foreground">
                                        {exp.description}
                                    </div>
                                    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                                        {exp.bullets?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

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
