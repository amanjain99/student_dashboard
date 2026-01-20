import { motion } from 'framer-motion';
import styles from './FloatingParticles.module.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'glow' | 'star' | 'sparkle';
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 6,
    type: ['glow', 'star', 'sparkle'][Math.floor(Math.random() * 3)] as Particle['type'],
  }));
};

const PARTICLES = generateParticles(20);

export function FloatingParticles() {
  return (
    <div className={styles.container} aria-hidden="true">
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          className={`${styles.particle} ${styles[particle.type]}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, -10, -30, 0],
            x: [0, 8, -4, 12, 0],
            opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
            scale: [1, 1.3, 0.9, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Ambient glow effects */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />
    </div>
  );
}
