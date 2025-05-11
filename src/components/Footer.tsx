
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-bold text-primary mb-6">
            <span className="text-white">QA</span>Portfolio
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:john.doe@example.com" 
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; {currentYear} John Doe. All rights reserved.</p>
            <p className="mt-1">QA Automation Engineer Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
