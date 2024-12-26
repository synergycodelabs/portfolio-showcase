import React, { useEffect } from 'react';
import { Download, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { experienceData } from './experience/experienceData';
import { useNavigate } from 'react-router-dom';
import NavigationIndicator from '../ui/NavigationIndicator';

const Resume = ({ theme }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Reset animation classes
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

  const handleNavigation = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const info = {
    name: "Angel Guevara",
    title: "IT Specialist & Developer", 
    email: "angel.guevara@synergycodelabs.com",
    location: "North Jersey/New York City Area",
    linkedin: "linkedin.com/in/guevaraangel"
  };

  const skills = {
    technical: [
      "Python", "JavaScript", "React", "Node.js",
      "SQL", "Linux", "Windows Server", "Network Security"
    ],
    tools: [
      "MS Office Suite", "Docker", "Git",
      "Cisco Meraki", "VMware", "Active Directory"
    ]
  };

  const resumeSections = [
    {
      id: "experience",
      title: "Professional Experience",
      content: (
        <div className="space-y-2">
          {experienceData.slice(0, 3).map((job) => (
            <div key={job.id} className="py-2">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-blue-500">{job.company} | {job.dateRange}</p>
            </div>
          ))}
          <Button 
            onClick={() => navigate('/Experience')}
            variant="outline" 
            className="w-full mt-3 hover:bg-blue-500 hover:text-white transition-colors"
          >
            View Full Experience
          </Button>
        </div>
      )
    },
    {
      id: "skills",
      title: "Technical Skills",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-all duration-200 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-200 hover:bg-blue-500/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Tools & Software</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-all duration-200 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-200 hover:bg-blue-500/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/skills')}
            variant="outline" 
            className="w-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            View Detailed Skills
          </Button>
        </div>
      )
    }
  ];

  return (
    <section id="resume" className={`min-h-screen py-16 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-4 reveal opacity-0">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              {info.name}
            </h1>
            <p className={`text-xl mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {info.title}
            </p>
          </div>
          <Button 
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        <Card className={`mb-4 transform hover:scale-105 transition-all duration-300 reveal opacity-0 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>{info.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{info.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-500" />
                <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer" 
                   className="hover:text-blue-500">
                  {info.linkedin}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <div className={`mb-4 p-4 rounded-xl border reveal opacity-0 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            IT specialist with 10+ years of experience in technical support, system administration, and modern development practices. 
            Proven track record in implementing AI-assisted solutions and managing complex infrastructure. Skilled in user support, system updates, and cross-functional collaboration to enhance application performance and user experience. 
            Proficient in various databases, web applications, and AI-assisted tools for efficient problem-solving and code development. 
            Bilingual in English and Spanish.
          </p>
        </div>

        {/* Education Section */}
        <div className={`mb-4 p-4 rounded-xl border reveal opacity-0 ${
          theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            <h3 className="text-lg font-semibold">Associate of Applied Science</h3>
            <p className="text-blue-500">Computer Systems & Network Technology</p>
            <p className="text-sm mt-1">Inter-American University of Puerto Rico</p>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Certifications</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>CompTIA A+</li>
                <li>CompTIA Network+</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="space-y-3">
          {resumeSections.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className={`rounded-xl border reveal opacity-0 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' 
                  : 'bg-white/50 border-gray-200 hover:bg-white'
              } hover:shadow-xl transition-all duration-300`}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3">
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {section.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Add ScrollIndicator */}
        <div className="flex justify-center pb-8">
          <NavigationIndicator 
            previousSection="projects" 
            targetSection="contact" 
            showHome={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;