import { useState } from 'react'
import { motion } from 'framer-motion'

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  imgClassName, 
  initial, 
  animate, 
  exit, 
  transition,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        initial={initial || { opacity: 0 }}
        animate={isLoaded ? (animate || { opacity: 1 }) : (initial || { opacity: 0 })}
        exit={exit}
        transition={transition || { duration: 0.5 }}
        className={`w-full h-full object-cover ${imgClassName || ''}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
    </div>
  )
}

export default LazyImage
