import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import References from '@/components/sections/References';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <References />
            </main>
            <Footer />
        </>
    );
}
