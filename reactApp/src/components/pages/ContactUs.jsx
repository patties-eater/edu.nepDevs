import React from 'react';
import { MessageCircle, Mail, X, Phone, Globe } from 'lucide-react';
import { useState } from "react";
import PhoneInput from '../modules/PhoneNumber';
const ContactUs = () => {
    


  return (
    <div className="min-h-screen bg-white relative font-sans text-gray-900 selection:bg-gray-100 selection:text-black">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        {/* Fade out at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Talk to our friendly tutors team
          </h1>
          <p className="text-lg text-gray-600">
            We'll help you find the perfect plan, no matter your Study Level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: The Form */}
          <div className="lg:col-span-7 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
            <form className="space-y-6">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="first-name"
                      placeholder="First name"
                      className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                      className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Phone */}
              <PhoneInput/>


              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Leave us a message..."
                    className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 resize-none"
                  />
                </div>
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900 mb-4">
                  Services
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Website design', 'Content creation', 'UX design', 'Strategy & consulting', 'User research', 'Other'].map((service) => (
                    <div key={service} className="flex items-center gap-x-3">
                      <input
                        id={service}
                        name="services"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                      />
                      <label htmlFor={service} className="text-sm leading-6 text-gray-600">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-white border border-gray-300 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Info & Social Proof */}
          <div className="lg:col-span-5 space-y-12 lg:pl-12 pt-4">
            
            {/* Chat Section */}
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Chat with us</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Speak to our friendly team via live chat.
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 hover:underline decoration-gray-400 underline-offset-4">
                    <MessageCircle className="h-5 w-5 text-gray-900" />
                    Start a live chat
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 hover:underline decoration-gray-400 underline-offset-4">
                    <Mail className="h-5 w-5 text-gray-900" />
                    Shoot us an email
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 hover:underline decoration-gray-400 underline-offset-4">
                    <X className="h-5 w-5 text-gray-900" />
                    Message us on X
                  </a>
                </li>
              </ul>
            </div>

            {/* Call Section */}
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Call us</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 hover:underline decoration-gray-400 underline-offset-4">
                    <Phone className="h-5 w-5 text-gray-900" />
                    +977 9818313694
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-3 text-sm font-semibold leading-6 text-gray-900 hover:underline decoration-gray-400 underline-offset-4">
                    <Phone className="h-5 w-5 text-gray-900" />
                    +977 9761346008
                  </a>
                </li>
              </ul>
            </div>

             {/* Logos Section */}
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">Trusted by 100,000+ Students</h3>
              <p className="mt-2 text-sm text-gray-600 mb-6">
                Chat to us in person at our Melbourne HQ.
              </p>
              
              {/* Logo Grid Placeholder */}
              <div className="grid grid-cols-3 gap-x-8 gap-y-6 opacity-60 grayscale">
                 {/* Replace these SVGs with actual brand assets */}
                 <LogoPlaceholder name="BSC CSIT" />
                 <LogoPlaceholder name="BCA" />
                 <LogoPlaceholder name="BIT" />
                 <LogoPlaceholder name="BBS" />
                 <LogoPlaceholder name="BIM" />
                 <LogoPlaceholder name="BHM" />
                 <LogoPlaceholder name="BTT" />
                 <LogoPlaceholder name="BSc" />
                 <LogoPlaceholder name="BEd" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Simple placeholder component for logos since we can't load external branded SVGs
const LogoPlaceholder = ({ name }) => (
  <div className="flex items-center justify-center">
      <span className="font-bold text-lg text-gray-400 hover:text-gray-600 transition-colors cursor-default select-none">{name}</span>
  </div>
);

export default ContactUs;