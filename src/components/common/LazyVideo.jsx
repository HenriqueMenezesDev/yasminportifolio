import { useState, useEffect, useRef, forwardRef } from 'react'

const LazyVideo = forwardRef(({ src, className, videoClassName, posterColor, ...props }, ref) => {
  const [inView, setInView] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Load slightly before it enters the viewport
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Combine parent ref and internal ref for the video element
  const videoRef = ref || useRef(null)

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ backgroundColor: posterColor || 'transparent' }}
    >
      {inView && (
        <video
          ref={videoRef}
          src={`${src}#t=0.1`} // Media Fragments to show the first frame efficiently
          preload={props.preload || "metadata"}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover ${videoClassName || ''}`}
          {...props}
        />
      )}
      {!inView && (
        <div className="absolute inset-0 bg-neutral-100 animate-pulse transition-opacity duration-500" />
      )}
    </div>
  )
})

LazyVideo.displayName = 'LazyVideo'

export default LazyVideo
