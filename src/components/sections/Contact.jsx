import React, { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Card, CardContent } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Button } from '../ui/button';
import NavigationIndicator from '../ui/NavigationIndicator';

/**
 * ----------------------------------------------------------------
 * ContactInner Component
 * ----------------------------------------------------------------
 * This is the main form component that uses the useGoogleReCaptcha
 * hook to generate a token, then sends that token to Formspree.
 */
const ContactInner = ({ theme }) => {
  const contactInfo = {
    linkedin: 'https://www.linkedin.com/in/guevaraangel/',
    github: 'https://github.com/synergycodelabs',
  };

  const { executeRecaptcha } = useGoogleReCaptcha(); // <-- Hook from react-google-recaptcha-v3

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
    loading: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: null, loading: true });

    if (!executeRecaptcha) {
      setFormStatus({
        submitted: false,
        error: 'reCAPTCHA not ready',
        loading: false
      });
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form_submit');

      // Build data, remove honeypot field
      const data = {
        ...formData,
        'g-recaptcha-response': token,
      };
      delete data.website;

      const response = await fetch('https://formspree.io/f/xdkkknzd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setFormStatus({ submitted: true, error: null, loading: false });
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: error.message,
        loading: false
      });
    }
  };

  /**
   * ----------------------------------------------------------------
   * Intersection Observer for fade-in animations
   * ----------------------------------------------------------------
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });
  
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('animate-fade-in'); // Reset animation
      observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, [theme]); // <-- Add 'theme' as a dependency  

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title & Description */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Let's Connect
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            I'm always interested in discussing new opportunities and innovative
            projects. Feel free to reach out through the form below or connect with
            me on professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Professional Networks */}
          <div className="space-y-6 reveal">
            <Card
              className={`transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/50 border-gray-200'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Professional Networks</h3>
                <div className="space-y-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      theme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                    } group transition-colors`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
                      } group-hover:bg-blue-500/20 transition-colors`}
                    >
                      <Linkedin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold block">LinkedIn</span>
                      <span
                        className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        Professional Profile
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      theme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                    } group transition-colors`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
                      } group-hover:bg-blue-500/20 transition-colors`}
                    >
                      <Github className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold block">GitHub</span>
                      <span
                        className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        Project Repository
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      theme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                    } group transition-colors`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'
                      } group-hover:bg-blue-500/20 transition-colors`}
                    >
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold block">Resume</span>
                      <span
                        className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        Download PDF
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card
              className={`transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/50 border-gray-200'
              }`}
            >
              <CardContent className="p-6">
                <div
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-500" />
                    Prefer Email?
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    For professional inquiries, you can connect with me on LinkedIn or
                    use the contact form. I typically respond within 24-48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card
            className={`transform hover:scale-105 transition-all duration-300 h-[508px] reveal ${
              theme === 'dark'
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            }`}
          >
            <CardContent className="p-6 overflow-y-auto h-full scrollbar-hide">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              {formStatus.submitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p
                    className={`text-center ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      } transition-all duration-200`}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      } transition-all duration-200`}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      } transition-all duration-200`}
                      required
                    ></textarea>
                  </div>

                  {formStatus.error && (
                    <Alert className="bg-red-100 dark:bg-red-900 border-red-200 dark:border-red-800">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                      <AlertDescription className="text-red-700 dark:text-red-300">
                        {formStatus.error}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="mt-auto pt-4">
                    <Button
                      type="submit"
                      disabled={formStatus.loading}
                      className={`w-full flex items-center justify-center gap-2 py-3 text-lg ${
                        theme === 'dark' ? 'focus:ring-offset-gray-800' : ''
                      }`}
                    >
                      {formStatus.loading ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
        {/* Add this before the final closing div in your container */}
<div className="flex justify-center mt-12">
  <NavigationIndicator 
    previousSection="Resume" 
    showHome={true}
    // Note: no targetSection prop since this is the last page
  />
</div>
      </div>
    </section>
  );
};

/**
 * ----------------------------------------------------------------
 * Contact Component with Provider
 * ----------------------------------------------------------------
 * We wrap the above form in GoogleReCaptchaProvider using your
 * site key. This ensures `executeRecaptcha` is available.
 */
const Contact = ({ theme = 'dark' }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Ldoe6QqAAAAAI49NBAidae3hZ9CMqGKbb98ZZa4" // <-- Your v3 site key
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      <ContactInner theme={theme} />
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
