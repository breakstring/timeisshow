import React, { useEffect, useState } from 'react';
import { ImageData } from '../types/api';
import { fetchTimeImage } from '../utils/api';
import { getCurrentTimeFlag } from '../utils/time';
import { constructImageUrl } from '../utils/api';

const DEFAULT_IMAGE = '/404.jpg';
const CHECK_INTERVAL = 5000; // 5 seconds

export function ImageDisplay() {
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);
  const [lastTimeFlag, setLastTimeFlag] = useState('');

  const updateImage = async (timeFlag: string) => {
    const response = await fetchTimeImage(timeFlag);
    if (response.success && response.data) {
      setCurrentImage(response.data);
    } else {
      setCurrentImage(null);
    }
  };

  useEffect(() => {
    const checkAndUpdate = () => {
      const currentTimeFlag = getCurrentTimeFlag();
      if (currentTimeFlag !== lastTimeFlag) {
        setLastTimeFlag(currentTimeFlag);
        updateImage(currentTimeFlag);
      }
    };

    checkAndUpdate();
    const intervalId = setInterval(checkAndUpdate, CHECK_INTERVAL);
    return () => clearInterval(intervalId);
  }, [lastTimeFlag]);

  const imageUrl = currentImage
    ? constructImageUrl(currentImage.file_path, currentImage.file_name)
    : DEFAULT_IMAGE;

  return (
    <div className="glow-wrapper">
      <img
        src={imageUrl}
        alt="Time-based image"
        className="w-full h-auto"
        style={{
          maxHeight: '80vh',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}