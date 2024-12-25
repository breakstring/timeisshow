import React, { useState } from 'react';

function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg whitespace-nowrap border border-purple-400/30 backdrop-blur-sm">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-[6px] border-transparent border-t-pink-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Content() {
  return (
    <div className="text-white space-y-8">
      {/* 网站标题 */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Time Is Show
      </h1>

      {/* Slogan */}
      <h2 className="text-2xl font-light italic text-gray-300">
        Every time is a show of beauty.
      </h2>

      {/* 内容介绍 */}
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-semibold text-white">
          "Time Is Show" - Where Every Moment Becomes an Artistic Performance
        </h3>
        
        <p>
          Time is life's most precious gift. Now, through the magic of artificial intelligence, 
          we transform each moment into a unique visual feast.
        </p>

        <p>
          Every minute, you'll receive an AI-generated artwork exclusively created for that 
          specific moment. Watch as clock hands, chalkboard numbers, or playful doodles blend 
          perfectly with elegant figures, interpreting time in the most creative and poetic way.
        </p>

        <div className="space-y-2">
          <p className="font-medium text-white">
            This is more than just a time-display app - it's an ongoing art exhibition:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>AI-generated original artwork updated every minute</li>
            <li>Harmonious integration of time elements with artistic subjects</li>
            <li>Transform mundane time-keeping into a delightful visual experience</li>
          </ul>
        </div>

        <p>
          Open "Time Is Show" and witness how AI artistry turns ordinary moments into eternal 
          aesthetic memories. Every moment deserves to be beautiful; every second is worth appreciating.
        </p>

        <p className="font-medium text-white">
          Every Time is a Show of Beauty - let AI creativity illuminate each moment of your life 
          with artistic brilliance.
        </p>

        <p>
          Download now and step into your personal gallery of time-inspired art.
        </p>

        <p>
          Experience time like never before - where technology meets artistry in a continuous 
          celebration of beauty.
        </p>
      </div>

      {/* 下载按钮 */}
      <div className="flex gap-4 pt-4">
        <Tooltip text="Coming soon to App Store - Stay tuned!">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <img src="/app-store-icon.svg" alt="App Store" className="w-9 h-9" />
            App Store
          </a>
        </Tooltip>
        <Tooltip text="Coming soon to Play Store - Stay tuned!">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <img src="/play-store-icon.svg" alt="Play Store" className="w-7 h-7" />
            Play Store
          </a>
        </Tooltip>
      </div>
    </div>
  );
} 