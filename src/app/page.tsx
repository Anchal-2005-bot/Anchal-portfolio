import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import SkillsAchievements from '@/components/SkillsAchievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#121212] flex flex-col min-h-screen">
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Projects />
      <Experience />
      <Education />
      <SkillsAchievements />
      <Contact />
    </main>
  );
}
