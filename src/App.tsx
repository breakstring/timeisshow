import React from 'react';
import { ImageDisplay } from './components/ImageDisplay';
import { Content } from './components/Content';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="container mx-auto flex gap-12 items-start">
        <div className="w-1/2 flex justify-end">
          <div className="max-w-[600px]">
            <ImageDisplay />
          </div>
        </div>
        <div className="w-1/2">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;