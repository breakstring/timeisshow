import React, { useState } from 'react';
import { ImageDisplay } from './components/ImageDisplay';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export type Language = 'en' | 'zh';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="hidden md:flex w-full md:w-2/5 justify-center">
            <div className="w-full max-w-[800px]">
              <ImageDisplay />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-8">
            <div className="text-white space-y-4 px-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center md:text-left">
                Time Is Show
              </h1>
              <h2 className="text-xl md:text-2xl font-light italic text-gray-300 text-center md:text-left">
                Every time is a show of beauty.
              </h2>
            </div>

            <div className="md:hidden px-4 sm:px-8 md:px-0 w-full">
              <div className="mx-auto" style={{ maxWidth: '400px' }}>
                <ImageDisplay />
              </div>
            </div>

            <div className="px-4">
              <Content language={language} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;