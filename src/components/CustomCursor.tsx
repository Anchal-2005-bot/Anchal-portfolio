'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  // Mouse coords
  const mouse = useRef({ x: 0, y: 0 });
  const outerMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    setIsFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!isMounted || !isFinePointer) return;

    const inner = innerCursorRef.current;
    const outer = outerCursorRef.current;
    if (!inner || !outer) return;

    // Track mouse
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Inner cursor has no lag
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    // Lerp loop for outer cursor
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      outerMouse.current.x = lerp(outerMouse.current.x, mouse.current.x, 0.12);
      outerMouse.current.y = lerp(outerMouse.current.y, mouse.current.y, 0.12);

      if (outerCursorRef.current) {
        // Keep the transform applied (note we inject scale via CSS vars or classes below, 
        // but here we just manage the position translation)
        outerCursorRef.current.style.transform = `translate(${outerMouse.current.x}px, ${outerMouse.current.y}px) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Interaction states
    const onMouseDown = () => {
      inner.classList.add('cursor-click');
      outer.classList.add('cursor-click');
    };

    const onMouseUp = () => {
      inner.classList.remove('cursor-click');
      outer.classList.remove('cursor-click');
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive element
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
      
      if (isInteractive) {
        inner.classList.add('cursor-hover');
        outer.classList.add('cursor-hover');
      } else {
        inner.classList.remove('cursor-hover');
        outer.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    // Initial position jump
    outerMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMounted, isFinePointer]);

  if (!isMounted) {
    return null;
  }

  if (!isFinePointer) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-cursor-inner {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffffff;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
          /* We don't transition transform because we update it rapidly via JS */
          will-change: transform;
        }

        .custom-cursor-outer {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.6);
          background: transparent;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%) scale(0.6);
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        /* Default state scales down outer to 0.6x via width/height pseudo-scaling 
           Wait, it's easier to just use width/height classes rather than transform scale,
           since JS overrides the transform property. */

        /* Inner hover state: scale 1.5x (8 * 1.5 = 12px) */
        .custom-cursor-inner.cursor-hover {
          width: 12px;
          height: 12px;
        }

        /* Outer default state: scale 0.6x (36 * 0.6 = 21.6px) */
        .custom-cursor-outer {
          width: 22px;
          height: 22px;
        }

        /* Outer hover state: scale 1.8x (36 * 1.8 = 64.8px) */
        .custom-cursor-outer.cursor-hover {
          width: 65px;
          height: 65px;
          background: rgba(255,255,255,0.08);
          border-color: transparent;
        }

        /* Click state scales both to 0.8x of their current size */
        .custom-cursor-inner.cursor-click {
          width: 6px;
          height: 6px;
        }
        .custom-cursor-outer.cursor-click {
          width: 18px;
          height: 18px;
        }
        .custom-cursor-outer.cursor-hover.cursor-click {
          width: 52px;
          height: 52px;
        }
      `}} />
      
      {/* Suppress hydration warning because we conditional render based on window */}
      <div suppressHydrationWarning>
        <div ref={outerCursorRef} className="custom-cursor-outer hidden lg:block" />
        <div ref={innerCursorRef} className="custom-cursor-inner hidden lg:block" />
      </div>
    </>
  );
}
