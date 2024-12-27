import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Terminal,
  Database,
  Network,
  Shield,
  Wrench,
  Code2,
  Server,
  Globe,
  LifeBuoy,
  Cloud,
  Monitor,
  Laptop,
  Download,
  Briefcase,
  FileSpreadsheet,
  // 1) Import Bot here
  Bot,
} from 'lucide-react';

import NavigationIndicator from '../ui/NavigationIndicator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// 1) Import your SEO component
import SEO from '../common/SEO';

const Skills = ({ theme }) => {
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

  const skillCategories = [
    {
      id: "development",
      title: "Programming & Web Technologies",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "React", level: 70 },
        { name: "Flask/FastAPI", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "WebSocket", level: 70 },
        { name: "Bash", level: 80 },
        { name: "VBA (Excel)", level: 85 }
      ]
    },
    {
      id: "ai-engineering",
      title: "AI & Prompt Engineering",
      icon: <Terminal className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "Claude (Anthropic)", level: 90 },
        { name: "ChatGPT (OpenAI)", level: 85 },
        { name: "Windows Copilot", level: 80 },
        { name: "Google Gemini", level: 75 },
        { name: "Prompt Design", level: 85 },
        { name: "AI Integration", level: 80 },
        { name: "Custom Chatbot Development", level: 85 },
        { name: "AI API Implementation", level: 80 }
      ]
    },
    {
      id: "databases",
      title: "Databases & Data Management",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "MSSQL", level: 85 },
        { name: "MS Access", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "EDI Transactions", level: 85 }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud & Development Tools",
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "Microsoft 365 Admin", level: 85 },
        { name: "Azure", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 85 }
      ]
    },
    {
      id: "support-tools",
      title: "Support & Monitoring",
      icon: <LifeBuoy className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "Zendesk", level: 90 },
        { name: "Jira/Trello", level: 85 },
        { name: "ContentCatcher", level: 80 },
        { name: "N-Able", level: 80 },
        { name: "Remote Support Tools", level: 90 }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Systems",
      icon: <Server className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "Windows Server", level: 90 },
        { name: "Linux (Ubuntu)", level: 80 },
        { name: "VMware", level: 85 },
        { name: "Hyper-V", level: 80 },
        { name: "Active Directory", level: 85 }
      ]
    },
    {
      id: "networking",
      title: "Networking & Security",
      icon: <Network className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: "TCP/IP", level: 90 },
        { name: "DNS/Firewalls", level: 85 },
        { name: "VPN", level: 80 },
        { name: "Cisco Meraki", level: 85 },
        { name: "Network Security", level: 85 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Fluent" }
  ];

  const certifications = [
    { name: "CompTIA A+", status: "Verified", icon: <Shield className="h-5 w-5 text-green-500" /> },
    { name: "CompTIA Network+", status: "Verified", icon: <Shield className="h-5 w-5 text-green-500" /> }
  ];

  const tools = {
    AI: [
      "AI-Assisted Development",
      "Workflow Automation", 
      "Code Generation",
      "Technical Documentation"
    ],
    office: [
      "Advanced Excel",
      "PowerShell Scripting",
      "SharePoint Admin",
      "Exchange Management"
    ],
    deployment: [
      "Microsoft Deployment Toolkit",
      "Windows Deployment Services",
      "Group Policy Management",
      "System Center"
    ],
    specialized: [
      "Power Platform",
      "Crystal Reports",
      "Enterprise Software",
      "Business Intelligence"
    ],
    security: [
      "Endpoint Protection",
      "Network Security",
      "Access Management",
      "Security Compliance"
    ]
  };

  const SkillBar = ({ skill, theme, isExpanded }) => (
    <div className={`mb-3 ${isExpanded ? 'ml-14' : ''}`}>
      <div className="mb-1">
        <span className={`text-base font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {skill.name}
        </span>
      </div>
      <div className={`relative ${isExpanded ? 'w-[88.2%]' : 'w-11/12'}`}>
        <div className="bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000"
            style={{
              width: `${isExpanded ? Math.min(skill.level - 2, 93) : Math.min(skill.level, 95)}%`
            }}
          />
        </div>
        <span className={`absolute right-0 -top-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {isExpanded ? Math.min(skill.level - 2, 93) : Math.min(skill.level, 95)}%
        </span>
      </div>
    </div>
  );

  const SkillCard = ({ category }) => (
    <AccordionItem
      value={category.id}
      className={`rounded-xl border reveal opacity-0 ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' 
          : 'bg-white/50 border-gray-200 hover:bg-white'
      } hover:shadow-xl transition-all duration-300`}
    >
      <AccordionTrigger className="w-full px-6 py-4 hover:no-underline">
        <div className="flex items-start w-full">
          <div className={`p-2 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
          }`}>
            {category.icon}
          </div>
          <div className="ml-4 text-left flex-1">
            <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
            {category.skills.slice(0, 2).map((skill, index) => (
              <SkillBar key={index} skill={skill} theme={theme} isExpanded={false} />
            ))}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4">
        {category.skills.slice(2).map((skill, index) => (
          <SkillBar key={index} skill={skill} theme={theme} isExpanded={true} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <>
      {/* 2) Use the SEO component at the top of the return */}
      <SEO
        path="/skills"
        title="Skills - Angel Guevara | IT Specialist & Developer"
        description="Explore my technical skills, programming expertise, and experience in network administration, cloud technologies, and more."
      />

      <section 
        id="skills"
        className={`min-h-screen py-16 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 reveal opacity-0">
            Skills & Expertise
          </h2>

          {/* Certifications & Languages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 reveal opacity-0">
            {/* Certifications Card */}
            <Card
              className={`transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {cert.icon}
                        <span className="font-medium">{cert.name}</span>
                      </div>
                      <span className="text-green-500 text-sm">{cert.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card
              className={`transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-blue-500">{lang.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 reveal opacity-0">
            <Accordion type="single" collapsible className="space-y-4">
              {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((category) => (
                <SkillCard key={category.id} category={category} />
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((category) => (
                <SkillCard key={category.id} category={category} />
              ))}
            </Accordion>
          </div>

          {/* Additional Tools Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal opacity-0">
            {Object.entries(tools).map(([category, toolList]) => (
              <Card
                key={category}
                className={`transform hover:scale-105 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white/50 border-gray-200'
                }`}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    {category === 'office' && <FileSpreadsheet className="h-5 w-5 text-blue-500" />}
                    {category === 'deployment' && <Download className="h-5 w-5 text-blue-500" />}
                    {category === 'specialized' && <Briefcase className="h-5 w-5 text-blue-500" />}
                    {category === 'security' && <Shield className="h-5 w-5 text-blue-500" />}
                    {category === 'AI' && <Bot className="h-5 w-5 text-blue-500" />}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {toolList.map((tool, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 
                          hover:scale-105 ${
                          theme === 'dark'
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-blue-500/20'
                            : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <NavigationIndicator 
              previousSection="experience" 
              targetSection="projects" 
              showHome={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;