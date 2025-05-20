import { Separator } from '@/components/ui/separator.tsx';
import { me } from '@/lib/config/me.tsx';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="py-4 px-4 md:px-0 flex justify-between items-center">
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    href="/public"
                    className="font-bold text-xl md:text-2xl"
                >
                    {me.default}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600"
                    >
                        {me.colored}
                    </motion.span>
                </motion.a>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block"
                >
                    <ul className="flex items-center gap-x-6">
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <a href="#home">Привет!</a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a href="#about">Про меня</a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a href="#experience">Опыт</a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <a href="#education">Образование</a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <a href="#additional-education">Доп. Образование</a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a href="#projects">Проекты</a>
                        </motion.li>
                    </ul>
                </motion.nav>

                {/* Мобильное меню (выпадающее) */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden"
                    >
                        <nav className="px-4 py-2">
                            <ul className="flex flex-col gap-y-4">
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href="#home"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Привет!
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <a
                                        href="#about"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Про меня
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    <a
                                        href="#experience"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Опыт
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <a
                                        href="#education"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Образование
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <a
                                        href="#additional-education"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Доп. Образование
                                    </a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                >
                                    <a
                                        href="#projects"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Проекты
                                    </a>
                                </motion.li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </div>
            <Separator className="bg-zinc-800" />
        </header>
    );
};

export default Header;
