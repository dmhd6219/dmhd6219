import { Separator } from '@/components/ui/separator.tsx';
import { me } from '@/lib/config.tsx';

const Header = () => {
    return (
        <header>
            <div className="py-4 flex justify-between items-center">
                <a href="/" className="font-bold text-2xl">
                    {me.default}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                        {me.colored}
                    </span>
                </a>
                <nav>
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Separator className="bg-zinc-800" />
        </header>
    );
};

export default Header;
