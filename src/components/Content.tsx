import React, { useState } from 'react';
import { Language } from '../App';

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

interface ContentProps {
  language: Language;
}

const content = {
  en: {
    title: '"Time Is Show" - Where Every Moment Becomes an Artistic Performance',
    intro1: "Time is life's most precious gift. Now, through the magic of artificial intelligence, we transform each moment into a unique visual feast.",
    intro2: "Every minute, you'll receive an AI-generated artwork exclusively created for that specific moment. Watch as clock hands, chalkboard numbers, or playful doodles blend perfectly with elegant figures, interpreting time in the most creative and poetic way.",
    exhibition: "This is more than just a time-display app - it's an ongoing art exhibition:",
    features: [
      'AI-generated original artwork updated every minute',
      'Harmonious integration of time elements with artistic subjects',
      'Transform mundane time-keeping into a delightful visual experience'
    ],
    description1: 'Open "Time Is Show" and witness how AI artistry turns ordinary moments into eternal aesthetic memories. Every moment deserves to be beautiful; every second is worth appreciating.',
    description2: 'Every Time is a Show of Beauty - let AI creativity illuminate each moment of your life with artistic brilliance.',
    download: 'Download now and step into your personal gallery of time-inspired art.',
    experience: 'Experience time like never before - where technology meets artistry in a continuous celebration of beauty.',
    comingSoon: {
      appStore: 'Coming soon to App Store - Stay tuned!',
      playStore: 'Coming soon to Play Store - Stay tuned!'
    }
  },
  zh: {
    title: '"Time Is Show" - 让每一刻都成为艺术的展演',
    intro1: '时间，是生命中最珍贵的礼物。而现在，通过人工智能的魔力，我们将每一个时刻转化为独特的视觉盛宴。',
    intro2: '每一分钟，您都能收到一幅专属于当下的AI艺术创作。时钟的指针，黑板上的数字，或是随意的涂鸦，都以最富创意的方式与优雅的人物形象完美融合，诠释着时间的诗意。',
    exhibition: '这不仅仅是一个显示时间的应用，更是一场持续不断的艺术展览：',
    features: [
      '每分钟更新的AI原创画作',
      '独特的时间元素与主题人物的和谐统一',
      '让枯燥的时间计数变成充满惊喜的视觉享受'
    ],
    description1: '打开"Time Is Show"，让我们一起见证AI艺术如何将平凡的时光转化为永恒的美学记忆。每一刻，都是美的瞬间；每一秒，都值得欣赏。',
    description2: 'Every Time is a Show of Beauty，让生活中的每一刻都闪耀着艺术的光芒。',
    download: '下载体验，开启您的专属时光艺术馆。',
    experience: '在这里，科技与艺术交汇，让每一个瞬间都成为美的庆典。',
    comingSoon: {
      appStore: '即将登陆 App Store - 敬请期待！',
      playStore: '即将登陆 Play Store - 敬请期待！'
    }
  }
};

export function Content({ language }: ContentProps) {
  const t = content[language];

  return (
    <div className="text-white space-y-6 md:space-y-8">
      {/* 内容介绍 */}
      <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
        <h3 className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
          {t.title}
        </h3>
        
        <p>{t.intro1}</p>
        <p>{t.intro2}</p>

        <div className="space-y-2">
          <p className="font-medium text-white">
            {t.exhibition}
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            {t.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <p>{t.description1}</p>
        <p className="font-medium text-white">{t.description2}</p>
        <p>{t.download}</p>
        <p>{t.experience}</p>
      </div>

      {/* 下载按钮 */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
        <Tooltip text={t.comingSoon.appStore}>
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            <img src="/apple-brands-solid.svg" alt="App Store" className="w-6 h-6" />
            App Store
          </a>
        </Tooltip>
        <Tooltip text={t.comingSoon.playStore}>
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            <img src="/google-play-brands-solid.svg" alt="Play Store" className="w-6 h-6" />
            Play Store
          </a>
        </Tooltip>
      </div>
    </div>
  );
} 