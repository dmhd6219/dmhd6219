import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Me } from './components/Me';
import { Projects } from './components/Projects';
import { experiences } from '@/lib/config/expirience.ts';
import { InfoBlock } from '@/components/page/components/InfoBlock';
import { additionalEducation, education } from '@/lib/config/education';
import { hackathons } from '@/lib/config/hackathons';

const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col text-white h-full dark">
            <Header />
            <div className="flex-1">
                <Me />
                <About />
                <InfoBlock
                    title="Коммерческий опыт"
                    entries={experiences}
                    id="experience"
                />
                <InfoBlock
                    title="Образование"
                    entries={education}
                    id="education"
                />
                <InfoBlock
                    title="Дополнительное образование"
                    entries={additionalEducation}
                    id="additional-education"
                />
                <InfoBlock
                    title="Хакатоны"
                    entries={hackathons}
                    id="hackathons"
                />
                <Projects />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
