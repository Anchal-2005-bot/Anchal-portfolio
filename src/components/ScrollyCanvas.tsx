'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 168;

const currentFrameIndex = (index: number) => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.047s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const preloadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrameIndex(i);
      preloadedImages.push(img);
    }
    
    setImages(preloadedImages);
  }, []);

  const renderFrame = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    if (canvas.width !== image.width || canvas.height !== image.height) {
      canvas.width = image.width;
      canvas.height = image.height;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === 0) return;
    
    const index = Math.round(latest);
    const image = images[index];
    
    if (image && image.complete) {
      requestAnimationFrame(() => renderFrame(image));
    }
  });

  useEffect(() => {
    if (images.length > 0) {
      const firstImage = images[0];
      if (firstImage.complete) {
        renderFrame(firstImage);
      } else {
        firstImage.onload = () => {
          renderFrame(firstImage);
        };
      }
    }
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
