import { motion } from 'framer-motion';
import styles from './NewDropsTeaser.module.css';

const CHARACTERS = [
  { icon: '🦌', label: 'Reindeer' },
  { icon: '🎄', label: 'Festive' },
  { icon: '⛄', label: 'Snowman' },
  { icon: '🎊', label: 'Party' },
];

export function NewDropsTeaser() {
  return (
    <div className={styles.teaser}>
      {/* Subtle snowflakes */}
      <div className={styles.snowflakes}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={styles.snowflake}
            style={{ 
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>New Skins until Jan 09!</span>
        <a href="#shop" className={styles.shopLink}>
          Shop now
        </a>
      </div>

      {/* Character Cards */}
      <div className={styles.carousel}>
        {CHARACTERS.map((char) => (
          <motion.div 
            key={char.label}
            className={styles.characterCard}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.characterIcon}>{char.icon}</span>
          </motion.div>
        ))}
      </div>

      <div className={styles.gradientOverlay} />
    </div>
  );
}
