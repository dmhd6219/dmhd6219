import { Header } from '@/components/page/Header';
import { Footer } from '@/components/page/Footer';
import { About } from '@/components/page/Layout/components/About';

const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col text-white h-full dark">
            <Header />
            <div className="flex-1">
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
