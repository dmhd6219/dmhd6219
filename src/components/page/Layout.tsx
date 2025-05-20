import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Me } from './components/Me';
import { Projects } from '@/components/Projects.tsx';
import { Hackathons } from '@/components/Hackathons.tsx';
import { experiences } from '@/lib/config/expirience';
import { InfoBlock } from '@/components/page/components/InfoBlock';
import { education } from '@/lib/config/education';

const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col text-white h-full dark">
            <Header />
            <div className="flex-1">
                <Me />
                <About />
                <InfoBlock title="Коммерческий опыт" entries={experiences} />
                <InfoBlock title="Образование" entries={education} />
                <Hackathons />
                <Projects />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
