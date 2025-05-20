import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { cn } from '@/lib/utils.ts';
import { Badge } from '@/components/ui/badge.tsx';
import type { InfoBlockEntry } from '@/types/info.ts';

interface InfoBlockProps {
    title: string;
    entries: InfoBlockEntry[];
    id: string;
}

const InfoBlock = ({ title, entries, id }: InfoBlockProps) => {
    return (
        <section className="pt-16 px-4 md:px-0" id={id}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-8"
            >
                <h2 className="text-3xl font-bold">{title}</h2>
            </motion.div>

            <div className="space-y-8">
                {entries.map((entry, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 == 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-x-4">
                                        {entry.image && (
                                            <img
                                                src={entry.image}
                                                alt={entry.title}
                                                className="w-16 h-16"
                                            />
                                        )}
                                        <div>
                                            <h3
                                                className={cn(
                                                    'text-xl font-semibold',
                                                    entry.titleLink &&
                                                        'underline',
                                                )}
                                            >
                                                <a
                                                    href={entry.titleLink}
                                                    target="_blank"
                                                >
                                                    {entry.title}
                                                </a>
                                            </h3>
                                            <p className="font-medium text-zinc-300">
                                                {entry.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-muted-foreground text-right">
                                        {entry.rightSection}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div className="pb-2 text-muted-foreground">
                                        {entry.description}
                                    </div>
                                    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                                        {entry.bullets?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {entry.badges?.map((tech, i) => (
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

export default InfoBlock;
