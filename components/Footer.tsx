// components/Footer.tsx - Site footer component
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-green-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        © {currentYear} Alicia Green. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
