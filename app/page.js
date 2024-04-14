import { Footer, Navbar } from '../components';
import { Hero } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <Footer />
  </div>
);

export default Page;
