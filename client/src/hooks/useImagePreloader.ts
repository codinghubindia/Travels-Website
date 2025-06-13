import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const imageElements: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedImages += 1;
      setLoadedCount(loadedImages);
      if (loadedImages === imageUrls.length) {
        setImagesLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count failed loads too
      img.src = url;
      imageElements.push(img);
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return { imagesLoaded, loadedCount, totalImages: imageUrls.length };
};