import { Header } from '@/components/page/Header';
import { Footer } from '@/components/page/Footer';
import { About } from '@/components/page/Layout/components/About';
import { Me } from '@/components/page/Layout/components/Me';

const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col text-white h-full dark">
            <Header />
            <div className="flex-1">
                <Me />
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
