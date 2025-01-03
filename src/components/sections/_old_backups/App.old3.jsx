import React from 'react';
import { Monitor, Code, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ThemeToggle from '../../ThemeToggle';
import { useTheme } from '../../../hooks/useTheme';
import About from '../About';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      {/* Header/Navigation */}
      <header className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 p-4`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Angel Guevara</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Monitor className="w-16 h-16 mx-auto mb-6 text-blue-500" />
          <h1 className="text-5xl font-bold mb-6">IT Specialist & Developer</h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            10+ years of IT expertise combined with modern development capabilities.
            Specializing in system administration, network security, and AI-assisted development.
          </p>
        </div>
      </section>

      {/* Featured Skills */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-200'}>
              <CardContent className="p-6">
                <Monitor className="h-8 w-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Expert in troubleshooting, system administration, and user support across multiple platforms.
                </p>
              </CardContent>
            </Card>
            <Card className={theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-200'}>
              <CardContent className="p-6">
                <Code className="h-8 w-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">AI Development</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Leveraging modern AI tools for efficient code development and problem-solving.
                </p>
              </CardContent>
            </Card>
            <Card className={theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-200'}>
              <CardContent className="p-6">
                <Shield className="h-8 w-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">Network Security</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Proficient in implementing and maintaining secure network infrastructure and protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About theme={theme} />
    </div>
  );
};

export default App;