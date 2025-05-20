import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { FileCodeIcon } from 'lucide-react';
import { techStack } from '@/lib/config';
import { Badge } from '@/components/ui/badge';
import { getRandomColor } from './lib/utils';

const Stack = () => {
    return (
        <Card className="rounded-md flex-1">
            <CardHeader className="text-foreground">
                <div className="flex gap-x-3 items-center">
                    <FileCodeIcon size={20} /> Технические навыки
                </div>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {techStack.map((item) => (
                    <Badge
                        key={item}
                        className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    >
                        <div
                            className={`${getRandomColor()} w-2 h-2 mr-2 rounded-full`}
                        />
                        {item}
                    </Badge>
                ))}
            </CardContent>
        </Card>
    );
};

export default Stack;
