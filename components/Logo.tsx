import React, { useState } from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  const [imageError, setImageError] = useState(false);

  // Fallback visual identity if the image fails to load
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Simple geometric logo mark */}
        <div className="h-full aspect-square bg-gradient-to-br from-brand-primary to-brand-accent rounded-tr-lg rounded-bl-lg flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-white font-black text-lg leading-none select-none">G</span>
        </div>
        {/* Text */}
        <span className="text-white font-bold text-lg md:text-xl tracking-widest uppercase text-shadow-sm">
          Genns
        </span>
      </div>
    );
  }

  return (
    <img 
      src="https://i.imgur.com/ydTWYCd.png" 
      alt="Genns Desenvolvimento Logo" 
      className={`${className} w-auto object-contain`}
      onError={() => setImageError(true)}
    />
  );
};

export default Logo;