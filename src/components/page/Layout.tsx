import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Me } from './components/Me';

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
