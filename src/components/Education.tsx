import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    description: string;
}

const education: EducationItem[] = [
    {
        institution: 'Московский Технический Университет',
        degree: 'Магистр компьютерных наук',
        period: '2018 - 2020',
        description:
            "Специализация в области искусственного интеллекта и машинного обучения. Дипломная работа: 'Применение нейронных сетей в обработке естественного языка'",
    },
    {
        institution: 'Санкт-Петербургский Государственный Университет',
        degree: 'Бакалавр информационных технологий',
        period: '2014 - 2018',
        description:
            'Основное направление: разработка программного обеспечения. Участие в научных конференциях и хакатонах',
    },
];

export const Education = () => {
    return (
        <section className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-8"
            >
                <h2 className="text-3xl font-bold">Образование</h2>
            </motion.div>

            <div className="space-y-8">
                {education.map((edu, index) => (
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
                                            {edu.degree}
                                        </h3>
                                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 font-medium">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <span className="text-muted-foreground">
                                        {edu.period}
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
