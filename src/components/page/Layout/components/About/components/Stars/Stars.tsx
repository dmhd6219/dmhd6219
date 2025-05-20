import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { ExternalLinkIcon, Star } from 'lucide-react';
import { useStarsCount } from '@/components/page/Layout/components/About/components/Stars/hooks/useStarsCount.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { githubRepo } from '@/lib/config.tsx';

const Stars = () => {
    const { stars, isLoading } = useStarsCount();

    return (
        <a
            href={`https://github.com/${githubRepo.author}/${githubRepo.repo}`}
            className="flex-1"
            target="_blank"
        >
            <Card className="rounded-md group h-full">
                <CardHeader className="">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center">
                            <Star
                                size={20}
                                className="group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors"
                            />{' '}
                            Поставь мне звезду :3
                        </div>
                        <ExternalLinkIcon size={20} />
                    </div>
                </CardHeader>
                <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5">
                    {isLoading ? <Skeleton className="w-[64px] h-8" /> : stars}
                </CardContent>
            </Card>
        </a>
    );
};

export default Stars;
