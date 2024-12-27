import React, { useEffect } from 'react';
import { Download, Mail, MapPin, Code2, Database, Globe, Shield, Server, Monitor, 
         Calendar, Building, GraduationCap, Briefcase, Bot, Wrench, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import NavigationIndicator from '../ui/NavigationIndicator';
import { workExperience, education, additionalSkills } from './resume/resumeData';

// 1) Import your SEO component
import SEO from '../common/SEO';

const Resume = ({ theme }) => {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('animate-fade-in');
      el.style.opacity = '0';
    });
  
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

  const contactInfo = {
    name: "Angel Guevara",
    address: "48 Hancox Avenue Floor 1st, Nutley, NJ 07110",
    phone: "215-692-0265",
    email: "angel.guevara@synergycodelabs.com"
  };

  const certifications = [
    { name: "CompTIA A+ Certification", status: "Completed" },
    { name: "CompTIA Network+ Certification", status: "Completed" }
  ];

  return (
    <>
      {/* 2) Use the SEO component at the top of the return block */}
      <SEO 
        path="/resume"
        title="Resume - Angel Guevara | IT Specialist & Developer"
        description="Detailed overview of my work experience, certifications, and professional skills. Explore how my expertise in IT and development can benefit your team."
      />

      <section className={`min-h-screen py-16 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
      }`}>
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header with Contact Info */}
          <div className="flex justify-between items-start mb-8 reveal opacity-0">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                {contactInfo.name}
              </h1>
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {contactInfo.address}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {contactInfo.email}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => window.open('/portfolio-showcase/resume.pdf', '_blank')}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              } px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 
                hover:scale-105 hover:shadow-lg focus:outline-none`}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* Professional Summary */}
          <Card className={`mb-8 reveal opacity-0 transform hover:scale-105 transition-all duration-300 ${
            theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
          }`}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Versatile IT specialist with 10+ years of experience in technical support, system administration, 
                and application management. Proven expertise in troubleshooting complex issues, providing excellent 
                customer service, and leveraging analytical thinking to solve technical challenges. Skilled in user 
                support, system updates, and cross-functional collaboration to enhance application performance and 
                user experience.
              </p>
            </CardContent>
          </Card>

          {/* Certifications and Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Certifications Card */}
            <Card className={`reveal opacity-0 transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
            }`}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-7 h-7 text-blue-500" />
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{cert.name}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        cert.status === 'Completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className={`reveal opacity-0 transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-7 h-7 text-blue-500" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-blue-500">{education.school}</p>
                  <p>{education.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Work Experience Section */}
          <div className="mb-8 reveal opacity-0">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-7 h-7 text-blue-500" />
              Professional Experience
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {workExperience.map((job, index) => (
                <AccordionItem
                  key={index}
                  value={`job-${index}`}
                  className={`rounded-lg border ${
                    theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex flex-col items-start text-left w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-blue-500" />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <span className="text-blue-500">{job.company}</span>
                        {job.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 flex-shrink-0 rounded-full bg-blue-500" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 reveal opacity-0">
            {/* AI Development */}
            <Card className={`transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold">AI Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.aiDev.map((skill, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Tools */}
            <Card className={`transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold">Support Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.support.map((skill, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Skills */}
            <Card className={`transform hover:scale-105 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold">Professional Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.professional.map((skill, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pb-8">
            <NavigationIndicator 
              previousSection="projects" 
              targetSection="contact" 
              showHome={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;