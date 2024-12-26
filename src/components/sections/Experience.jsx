import React, { useEffect } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import NavigationIndicator from '../ui/NavigationIndicator';
import { experienceData } from './experience/experienceData';

const Experience = ({ theme }) => {
  useEffect(() => {
    // First remove animation classes
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('animate-fade-in');
      el.style.opacity = '0';
    });
  
    // Short delay to ensure reset happens
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
          }
        });
      });
  
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);
  }, [theme]);

  const midPoint = Math.ceil(experienceData.length / 2);
  const leftColumnExperiences = experienceData.slice(0, midPoint);
  const rightColumnExperiences = experienceData.slice(midPoint);

  const ExperienceItem = ({ id, title, company, dateRange, responsibilities }) => (
    <AccordionItem
      value={id}
      className={`reveal opacity-0 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80' 
          : 'bg-white border-gray-200 hover:bg-gray-50'
      } transition-all duration-300 overflow-hidden group`}
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline w-full">
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4">
          <div className={`p-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
          } group-hover:bg-blue-500/10 transition-colors duration-300`}>
            <Briefcase className="w-5 h-5 text-blue-500" />
          </div>
          
          <div className="flex-1 text-left">
            <h3 className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
              <div className="flex items-center text-blue-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{company}</span>
              </div>
              <div className={`flex items-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{dateRange}</span>
              </div>
            </div>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-6 pb-4">
      <ul className={`space-y-3 ml-4 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 flex-shrink-0 rounded-full bg-blue-500" />
            <span className="leading-relaxed">{responsibility}</span>
          </li>
        ))}
      </ul>
    </AccordionContent>
    </AccordionItem>
  );

  return (
    <section id="experience" className={`py-20 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 to-blue-700 reveal opacity-0`}>
          Experience
        </h2>

        <div className={`mb-12 rounded-xl overflow-hidden relative ${
          theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'
        } group hover:scale-[1.02] transition-all duration-300 reveal opacity-0`}>
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 
            group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300`} />
          <div className="relative p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/10'
              } group-hover:scale-110 transition-transform duration-300`}>
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Open to New Opportunities
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } max-w-2xl`}>
                  I am currently seeking new challenges in IT leadership, system administration, or technical roles.
                  Let's connect and discuss how I can bring value to your team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 reveal opacity-0">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumnExperiences.map((job) => (
                <ExperienceItem key={job.id} {...job} />
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumnExperiences.map((job) => (
                <ExperienceItem key={job.id} {...job} />
              ))}
            </Accordion>
          </div>
        </div>

        <div className="flex justify-center">
          <NavigationIndicator 
            previousSection="about" 
            targetSection="skills" 
            showHome={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;