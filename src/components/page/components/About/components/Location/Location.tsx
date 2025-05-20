import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { PinIcon } from 'lucide-react';
import { city } from '@/lib/config.tsx';

const Layout = () => {
    return (
        <Card className="w-1/2 rounded-md">
            <CardHeader className="">
                <div className="flex gap-x-3 items-center">
                    <PinIcon size={20} /> Локация
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
                <a href={city.href} target="_blank">
                    {city.name}
                </a>
            </CardContent>
        </Card>
    );
};

export default Layout;
