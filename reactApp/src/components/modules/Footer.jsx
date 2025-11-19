import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react'; // Using lucide-react for icons
import Banner from './Banner';
import banner from "../../assets/profile-pic.png";

// Note: Ensure you have lucide-react installed: npm install lucide-react

const Footer = () => {
  // Define custom colors in Tailwind config or use arbitrary values if not configured globally
  const darkBlue = 'bg-[#0A192F]';
  const darkerBlue = 'bg-[#061427]'; 
  const logoUrl = "/path-to-your-logo.png"; // Replace with the actual path to your logo

  // --- Data for easy updates ---
  const resources = [
    { name: 'Home', link: '#' },
    { name: 'Courses', link: '#' },
    { name: 'Entrance Exam', link: '#' },
    { name: 'IOE', link: '#' },
    { name: 'B.Sc.CSIT', link: '#' },
    { name: 'BCA', link: '#' },
    { name: 'BIT', link: '#' },
    { name: 'BSc', link: '#' },
    { name: 'BICTE', link: '#' },
    { name: 'M.Sc.CSIT', link: '#' },
    { name: 'MIDS', link: '#' },
    { name: 'MIT', link: '#' },
    { name: 'Live Mock Test', link: '#' },
    { name: 'Contact Us', link: '#' },
  ];

  const courses = [
    { name: 'B.Sc.CSIT', link: '#' },
    { name: 'BIT', link: '#' },
    { name: 'BCA', link: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, color: 'text-blue-600', link: 'https://facebook.com/guptatutorial' },
    { icon: Twitter, color: 'text-sky-400', link: 'https://twitter.com/guptatutorial' },
    { icon: Instagram, color: 'text-pink-500', link: 'https://instagram.com/guptatutorial' },
  ];
  
  // Custom Icon for YouTube (since lucide-react doesn't have a standard YouTube icon)
  const YouTubeIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.543 6.495c-.23-.836-.927-1.533-1.764-1.764C18.267 4 12 4 12 4s-6.267 0-7.779.731c-.837.23-1.534.927-1.764 1.764C2 7.733 2 12 2 12s0 4.267.731 5.779c.23.837.927 1.534 1.764 1.764C5.733 20 12 20 12 20s6.267 0 7.779-.731c.837-.23 1.534-.927 1.764-1.764C22 16.267 22 12 22 12s0-4.267-.457-5.505zM9.545 15.59v-7.18l6.595 3.59-6.595 3.59z" />
    </svg>
  );

  return (
    <footer className="w-full text-white">
      {/* Main Footer Content Area */}
      <div className={`${darkBlue} pt-16 pb-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Logo and Contact Info */}
          <div className="flex flex-col space-y-4">
            <img 
              src={banner} 
              alt="CodeWithPrajjwal Logo" 
              className="w-32 h-auto" // Adjust size as needed
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Your Trusted Partner for Entrance Exam Success – CodeWithPrajjwal.
            </p>
            <p className="text-white font-semibold mt-4">
              +977-9818313694
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:opacity-80 transition duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-pink-500 hover:opacity-80 transition duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 hover:opacity-80 transition duration-300">
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-transparent hover:border-blue-500 inline-block transition duration-300">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-400 transition duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-transparent hover:border-blue-500 inline-block transition duration-300">
              Courses
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {courses.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-blue-400 transition duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us (Keeping the structure similar to the image, though content is now in Col 1) */}
          <div className="md:col-span-1">
             <h4 className="text-lg font-semibold mb-6 border-b-2 border-transparent hover:border-blue-500 inline-block transition duration-300">
              Follow Us
            </h4>
            {/* The image shows the icons here, but modern design often places them under the logo (as done in Col 1). 
            I've placed the title here for structural fidelity to your image, but the icons are in Column 1 for better grouping. */}
            <p className="text-sm text-gray-400">
                Check out our social channels below to stay updated.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className={`${darkerBlue} py-4 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          
          <p className="order-2 md:order-1 text-center md:text-left mb-2 md:mb-0">
            Copyright &copy; {new Date().getFullYear()} GuptaTutorial All Rights Reserved.
            <span className="block mt-1 md:inline md:ml-4">
               Developed By <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-200 font-medium">Founder and CEO Of NepDevs Prajjwal Gautam </a>
            </span>
          </p>
          
          <div className="order-1 md:order-2 space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:text-blue-400 transition duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition duration-200">Terms & Conditions</a>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300 z-50"
            aria-label="Scroll to top"
          >
            <Globe className="w-5 h-5" /> 
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;