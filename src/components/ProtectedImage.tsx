import React, { useEffect, useState, useRef } from 'react';
import { Shield } from 'lucide-react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  showWatermark?: boolean;
  watermarkText?: string;
  roundedClassName?: string;
  caption?: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  showWatermark = true,
  watermarkText = 'Yasirah Sabreen F · Protected Asset',
  roundedClassName = 'rounded-xl',
  caption,
}) => {
  const [isProtectedActive, setIsProtectedActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intercept keyboard shortcuts for PrintScreen or screenshot shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        setIsProtectedActive(true);
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('');
          }
        } catch {
          // Ignore clipboard permission errors
        }
        setTimeout(() => setIsProtectedActive(false), 1200);
      }

      // Windows Snipping Tool (Win + Shift + S) or Mac Screenshot (Cmd + Shift + 3 / 4 / 5)
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && ['3', '4', '5', 's', 'S'].includes(e.key)) {
        setIsProtectedActive(true);
        setTimeout(() => setIsProtectedActive(false), 1200);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        setIsProtectedActive(true);
        setTimeout(() => setIsProtectedActive(false), 1200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden isolate ${roundedClassName} ${className}`}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
      style={{
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {/* Actual Image with pointer events completely disabled */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className={`w-full h-full object-cover object-top pointer-events-none select-none no-copy-image transition-all duration-300 ${
          isProtectedActive ? 'blur-md opacity-20' : 'filter contrast-[1.02] brightness-[1.01]'
        } ${imgClassName}`}
        style={{
          WebkitTouchCallout: 'none',
          userSelect: 'none',
        }}
      />

      {/* Transparent Click-Trap Shield Layer: sits directly above the image */}
      <div
        className="absolute inset-0 z-20 cursor-default select-none bg-transparent"
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }}
        onDragStart={(e) => {
          e.preventDefault();
          return false;
        }}
        aria-hidden="true"
      />

      {/* Subtle Micro-Watermark Pattern to deter and protect against screen captures */}
      {showWatermark && (
        <div
          className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden opacity-30 mix-blend-overlay flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="rotate-[-28deg] whitespace-nowrap text-[9px] font-mono tracking-widest text-white/80 uppercase font-semibold">
            {watermarkText} · {watermarkText}
          </div>
        </div>
      )}

      {/* Screen Capture Blurring Flash Warning */}
      {isProtectedActive && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/80 text-white p-3 text-center text-xs animate-in fade-in duration-100">
          <Shield className="w-5 h-5 text-teal-400 mb-1" />
          <span className="font-semibold">Protected Asset</span>
          <span className="text-[10px] text-slate-300">Screen capture restricted</span>
        </div>
      )}

      {/* Optional Caption */}
      {caption && (
        <div className="absolute inset-x-0 bottom-0 z-15 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-2.5 text-white pointer-events-none select-none">
          <div className="font-semibold text-xs leading-tight">{caption}</div>
        </div>
      )}
    </div>
  );
};
