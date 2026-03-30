'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skillsLayout = [
  { category: "Languages", value: "Python, C, Java, R" },
  { category: "CS Foundations", value: "Data Structures, Algorithms" },
  { category: "Tools", value: "Git, GitHub, VS Code, Jupyter Notebook" },
  { category: "Data & ML", value: "NumPy, Pandas, RStudio" },
  { category: "Web", value: "HTML, CSS, JavaScript, Flask" }
];

const achievementsList = [
  "Solved 100+ DSA problems on LeetCode: https://leetcode.com/u/anchalthakur7239/",
  "Completed job simulations by Deloitte and AWS (Forage)",
  "Completed Generative AI training via Microsoft & LinkedIn Learning",
  "Content Writing Intern at Inamigos Foundation (NGO)",
  "Volunteer at NSS, HITK"
];

export default function SkillsAchievements() {
  const { ref: skillsRef, isVisible: isSkillsVisible } = useIntersectionObserver({ threshold: 0.1, once: true, rootMargin: "-50px" });
  const { ref: achievesRef, isVisible: isAchievesVisible } = useIntersectionObserver({ threshold: 0.1, once: true, rootMargin: "-50px" });

  return (
    <section className="relative w-full bg-[#121212] pt-16 pb-32 px-6 md:px-12 lg:px-24 text-[#EAEAEA] z-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Skills */}
        <div
          ref={skillsRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Technical <span className="text-[#C8A96A]">Skills</span>
          </h2>
          <div className="space-y-6">
            {skillsLayout.map((skill, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 0.1}s`, transitionProperty: 'opacity, transform, background-color', transitionDuration: '0.5s, 0.5s, 0.2s', transitionTimingFunction: 'ease' }}
                className={`flex flex-col border-b border-[#C8A96A]/10 pb-4 p-2 -mx-2 rounded-lg last:border-0 last:pb-2 cursor-default hover:bg-white/5 ${isSkillsVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <span className="text-[#C8A96A] font-medium tracking-wide uppercase text-sm mb-1">{skill.category}</span>
                <span className="text-[#EAEAEA] font-light text-lg">{skill.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          ref={achievesRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Notable <span className="text-[#C8A96A]">Achievements</span>
          </h2>
          <ul className="space-y-4 font-light text-lg text-[#EAEAEA]/90">
            {achievementsList.map((achieve, i) => (
              <li
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
                className={`flex items-start ${isAchievesVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <span className="text-[#C8A96A] mr-3 mt-1">•</span>
                <span className="leading-relaxed">
                  {achieve.includes('http') ? (
                    <span dangerouslySetInnerHTML={{__html: achieve.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#C8A96A] hover:underline break-all">$1</a>')}} />
                  ) : (
                    achieve
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
