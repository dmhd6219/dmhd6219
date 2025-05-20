import { Separator } from '@/components/ui/separator.tsx';
import { me } from '@/lib/config.tsx';

export default function Footer() {
    return (
        <footer className="mt-6">
            <Separator className="bg-zinc-800" />
            <div className="py-4 flex justify-between items-center">
                <a href="/public">{me.default + me.colored}</a>
            </div>
        </footer>
    );
}
