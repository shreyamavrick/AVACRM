// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo2.png"; 

export default function Footer() {
  return (
    <footer
      className="text-[#E6F4F7] pt-8 pb-6"
      style={{ backgroundColor: "#062F40" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="AvaOne Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            AvaOne is a simple, powerful CRM designed to help your team stay
            productive, manage leads smartly, and close deals faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#1C8ECE]">
                Home
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-[#1C8ECE]">
                Pricing
              </a>
            </li>
            <li>
              <a href="/how-to-use" className="hover:text-[#1C8ECE]">
                How To Use
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 contact@matchbestsoftware.com</li>
            <li>📞 +91 8448149419</li>
            <li>🌍 India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-[#c5dee4] mt-12 border-t border-[#0d465d] pt-4">
        © {new Date().getFullYear()} AvaOne. All rights reserved.
      </div>
    </footer>
  );
}
