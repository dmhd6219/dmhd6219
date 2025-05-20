import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface HackathonItem {
    name: string;
    date: string;
    status: string;
    description: string;
    link: string;
}

const hackathons: HackathonItem[] = [
    {
        name: 'Technoed Хакатон от Сбера',
        status: 'Победитель',
        date: '2024',
        description:
            'Создали LMS с ИИ на основе Telegram Mini Apps для IT Академии.',
        link: 'https://developers.sber.ru/kak-v-sbere/events/hackathon_october',
    },
];

export const Hackathons = () => {
    return (
        <section className="pt-16 px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-8"
            >
                <h2 className="text-3xl font-bold">Хакатоны</h2>
            </motion.div>

            <div className="space-y-8">
                {hackathons.map((edu, index) => (
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
                                            {edu.name}
                                        </h3>
                                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 font-medium">
                                            {edu.status}
                                        </p>
                                    </div>
                                    <span className="text-muted-foreground">
                                        {edu.date}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {edu.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
