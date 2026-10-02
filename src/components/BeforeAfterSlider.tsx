import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[3/4] overflow-hidden select-none cursor-ew-resize group bg-[#111]"
      onMouseDown={(e: ReactMouseEvent) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e: ReactTouchEvent) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt="Before retouching" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* After Image (Foreground, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full clip-path-slider pointer-events-none"
        style={{ '--clip-percent': `${sliderPosition}%` } as React.CSSProperties}
      >
        <img 
          src={afterImage} 
          alt="After retouching" 
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* Slider Divider */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white/50 cursor-ew-resize z-10 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 group-hover:scale-110">
          <ArrowLeftRight size={16} className="text-black" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/50 backdrop-blur-sm text-white text-xs tracking-widest px-3 py-1 rounded-sm uppercase">Before</span>
      </div>
      <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/50 backdrop-blur-sm text-white text-xs tracking-widest px-3 py-1 rounded-sm uppercase">After</span>
      </div>
    </div>
  );
}
