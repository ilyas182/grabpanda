import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollAnimation - A reusable component for scroll-triggered animations
 * 
 * @param {string} animation - Animation type: 'fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scale', 'rotate'
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {string} start - ScrollTrigger start position (default: "top 80%")
 * @param {string} end - ScrollTrigger end position
 * @param {boolean} once - Whether to animate only once (default: true)
 * @param {React.ReactNode} children - Child elements to animate
 * @param {string} className - Additional CSS classes
 */
export default function ScrollAnimation({
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  start = 'top 80%',
  end,
  once = true,
  children,
  className = '',
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const initialStyles = getInitialStyles(animation);
    gsap.set(element, initialStyles);

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        // markers: true, // Uncomment for debugging
      },
    });

    // Add delay if specified
    if (delay > 0) {
      tl.delay(delay);
    }

    // Add animation based on type
    const animationProps = getAnimationProps(animation, duration);
    tl.to(element, animationProps);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, start, end, once]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
}

/**
 * Get initial styles based on animation type
 */
function getInitialStyles(animation) {
  const styles = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotation: 0,
  };

  switch (animation) {
    case 'fadeIn':
      styles.opacity = 0;
      break;
    case 'slideUp':
      styles.opacity = 0;
      styles.y = 50;
      break;
    case 'slideDown':
      styles.opacity = 0;
      styles.y = -50;
      break;
    case 'slideLeft':
      styles.opacity = 0;
      styles.x = 50;
      break;
    case 'slideRight':
      styles.opacity = 0;
      styles.x = -50;
      break;
    case 'scale':
      styles.opacity = 0;
      styles.scale = 0.8;
      break;
    case 'rotate':
      styles.opacity = 0;
      styles.rotation = -10;
      break;
    default:
      styles.opacity = 0;
  }

  return styles;
}

/**
 * Get animation properties based on animation type
 */
function getAnimationProps(animation, duration) {
  const baseProps = {
    duration: duration,
    ease: 'power2.out',
  };

  switch (animation) {
    case 'fadeIn':
      return { ...baseProps, opacity: 1 };
    case 'slideUp':
      return { ...baseProps, opacity: 1, y: 0 };
    case 'slideDown':
      return { ...baseProps, opacity: 1, y: 0 };
    case 'slideLeft':
      return { ...baseProps, opacity: 1, x: 0 };
    case 'slideRight':
      return { ...baseProps, opacity: 1, x: 0 };
    case 'scale':
      return { ...baseProps, opacity: 1, scale: 1 };
    case 'rotate':
      return { ...baseProps, opacity: 1, rotation: 0 };
    default:
      return { ...baseProps, opacity: 1 };
  }
}

