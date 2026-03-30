import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import WhatIDo from '@/components/WhatIDo';
import Arsenal from '@/components/Arsenal';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="bg-[#121212] flex flex-col min-h-screen">
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <WhatIDo />
      <Arsenal />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
