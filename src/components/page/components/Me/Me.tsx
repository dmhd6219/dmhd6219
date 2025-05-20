import { motion } from 'framer-motion';

const Me = () => {
    return (
        <section
            className="mt-16 md:mt-32 mb-8 md:mb-16 mx-auto max-w-screen-lg text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 md:px-0"
            id="home"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Привет! Меня зовут{' '}
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-rose-600"
                >
                    Святослав
                </motion.span>
                , <br className="hidden md:block" />Я{' '}
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600"
                >
                    Frontend
                </motion.span>{' '}
                разработчик, <br className="hidden md:block" />
                создающий современные веб-приложения.
            </motion.h1>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-5 text-base md:text-lg text-muted-foreground max-w-screen-md block mx-auto"
            >
                На данный момент я учусь в{' '}
                <a
                    href="https://innopolis.university/"
                    target="_blank"
                    className="text-innopolis"
                >
                    Университете Иннополис
                </a>{' '}
                на 4м курсе
                {/*и работаю Frontend разработчиком в {' '}*/}
                {/*<a href="https://yandex.ru/" target="_blank" className='text-yandex'>*/}
                {/*    компания-нейм*/}
                {/*</a>*/}.
            </motion.span>
        </section>
    );
};

export default Me;
