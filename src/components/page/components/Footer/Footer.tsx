import { Separator } from '@/components/ui/separator.tsx';
import { me } from '@/lib/config/me.tsx';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="mt-6">
            <Separator className="bg-zinc-800" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-4 px-4 md:px-0 flex justify-between items-center"
            >
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#home"
                    className="text-lg md:text-xl"
                >
                    {me.default}
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600"
                    >
                        {me.colored}
                    </motion.span>
                </motion.a>
            </motion.div>
        </footer>
    );
}
