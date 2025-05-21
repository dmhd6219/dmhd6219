import { Layout } from '@/components/page';
import { MetrikaCounter } from 'react-metrika';
import { COUNTER_NUMBER } from '@/lib/config/ym';

function App() {
    return (
        <>
            <Layout />
            <MetrikaCounter
                id={COUNTER_NUMBER}
                options={{
                    trackHash: true,
                    webvisor: true,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                }}
            />
        </>
    );
}

export default App;
