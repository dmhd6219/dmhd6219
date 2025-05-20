import { useEffect, useState } from 'react';
import axios from 'axios';
import { githubRepo } from '@/lib/config/me.tsx';

export function useStarsCount() {
    const [stars, setStars] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchGithubStars(): Promise<number> {
        const response = await axios.get(
            `https://api.github.com/repos/${githubRepo.author}/${githubRepo.repo}`,
        );

        if (
            response.status !== 200 ||
            !response.data ||
            !response.data.stargazers_count
        ) {
            return 0;
        }

        return response.data.stargazers_count;
    }

    useEffect(() => {
        fetchGithubStars()
            .then((r) => setStars(r))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        stars,
    };
}
