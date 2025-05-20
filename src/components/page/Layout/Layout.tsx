import { Header } from '@/components/page/Header';
import { Footer } from '@/components/page/Footer';

const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col text-white h-full">
            <Header />
            <div className="flex-1">content</div>
            <Footer />
        </div>
    );
};

export default Layout;
