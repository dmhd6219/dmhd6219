import { Contacts } from './components/Contacts';
import { Stars } from './components/Stars';
import { Available } from './components/Available';
import { Location } from './components/Location';
import { Stack } from './components/Stack';
import CV from './components/CV/CV';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="px-4 md:px-0" id="about">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
            >
                Немного про меня
            </motion.h1>
            <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-stretch">
                {/*Левый блок*/}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col gap-y-4"
                >
                    <Contacts />
                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 h-full">
                        <div className="w-full md:w-1/2">
                            <Stars />
                        </div>
                        <div className="w-full md:w-1/2">
                            <CV />
                        </div>
                    </div>
                </motion.div>

                {/*Правый блок*/}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full md:w-1/2 flex flex-col gap-y-4"
                >
                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-full">
                        <Available />
                        <Location />
                    </div>
                    {/*Стек*/}
                    <Stack />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
