import React from 'react';

export function Footer() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
          <span>© 2024 KZ AI Lab</span>
          <a
            href="/privacy.2024.12.25.txt"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms.txt"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="mailto:kz.ai.lab@outlook.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
} 