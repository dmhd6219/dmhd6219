import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { links } from '@/lib/config/me.tsx';
import { LinkIcon } from 'lucide-react';

const Contacts = () => {
    return (
        <Card className="rounded-md">
            <CardHeader className="text-foreground">
                <div className="flex gap-x-3 items-center">
                    <LinkIcon size={20} /> Связь со мной
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col gap-y-1.5">
                {links.map((link) => (
                    <div key={link.title} className="flex gap-x-3 items-center">
                        {link.icon}
                        <a href={link.href} target="_blank">
                            {link.title}
                        </a>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default Contacts;
