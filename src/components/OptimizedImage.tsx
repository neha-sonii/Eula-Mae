import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, ...props }) => {
  // Always add /public prefix for assets
  const normalizedSrc = src.startsWith('/') ? `/public${src}` : src;
  const hasExtension = /\.(png|jpg|jpeg|webp)$/.test(normalizedSrc);
  
  // Ensure width and height are always set to prevent layout shifts
  const finalProps = {
    width: 800,
    height: 600,
    ...props
  };

  // If it already has an extension, just pass it through normally
  if (hasExtension) {
    return <img src={normalizedSrc} {...finalProps} />;
  }

  // For src without extension, add the appropriate extensions
  return (
    <picture>
      <source srcSet={`${normalizedSrc}.webp`} type="image/webp" />
      <source srcSet={`${normalizedSrc}.jpg`} type="image/jpeg" />
      <img src={`${normalizedSrc}.jpg`} {...finalProps} />
    </picture>
  );
};

export default OptimizedImage;