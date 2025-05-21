import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { ExternalLinkIcon, FileIcon } from 'lucide-react';
import { ym } from 'react-metrika';
import { COUNTER_NUMBER } from '@/lib/config/ym';

const CV = () => {
    return (
        <a
            href="https://disk.yandex.ru/i/vh6DISpynbIHPA"
            className="flex-1"
            target="_blank"
            onClick={() => {
                ym(COUNTER_NUMBER, 'reachGoal', 'download_cv');
            }}
        >
            <Card className="rounded-md group h-full">
                <CardHeader className="">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center">
                            <FileIcon />
                            Моё резюме
                        </div>
                        <ExternalLinkIcon size={20} />
                    </div>
                </CardHeader>
                <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5">
                    cv.pdf
                </CardContent>
            </Card>
        </a>
    );
};

export default CV;
