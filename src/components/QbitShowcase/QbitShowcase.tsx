import { motion } from 'framer-motion';
import styles from './QbitShowcase.module.css';

interface QbitShowcaseProps {
  avatarUrl?: string;
  coinBalance: number;
  onCustomize?: () => void;
}

export function QbitShowcase({ avatarUrl, coinBalance, onCustomize }: QbitShowcaseProps) {
  return (
    <motion.div 
      className={styles.showcase}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Glow Background */}
      <div className={styles.glowBackground} />
      
      {/* Avatar Container */}
      <motion.div 
        className={styles.avatarContainer}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt="Your Qbit avatar" 
            className={styles.avatar}
          />
        ) : (
          <DefaultQbit />
        )}
      </motion.div>

      {/* Coin Badge */}
      <motion.div 
        className={styles.coinBadge}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 15 }}
      >
        <span className={styles.coinIcon}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" fill="url(#coinGradient2)" stroke="#B8860B" strokeWidth="1"/>
            <text x="10" y="14" textAnchor="middle" fill="#B8860B" fontSize="9" fontWeight="bold">W</text>
            <defs>
              <linearGradient id="coinGradient2" x1="0" y1="0" x2="20" y2="20">
                <stop offset="0%" stopColor="#FFD700"/>
                <stop offset="50%" stopColor="#FFC107"/>
                <stop offset="100%" stopColor="#FFB300"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className={styles.coinCount}>{coinBalance.toLocaleString()}</span>
      </motion.div>

      {/* Customize Button */}
      <motion.button
        className={styles.customizeBtn}
        onClick={onCustomize}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className={styles.customizeIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </span>
        Customize
      </motion.button>
    </motion.div>
  );
}

function DefaultQbit() {
  return (
    <svg 
      className={styles.defaultQbit} 
      viewBox="0 0 120 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="60" cy="95" rx="40" ry="35" fill="#4CAF50"/>
      <ellipse cx="60" cy="95" rx="35" ry="30" fill="#66BB6A"/>
      
      {/* Head */}
      <circle cx="60" cy="50" r="38" fill="#4CAF50"/>
      <circle cx="60" cy="50" r="33" fill="#66BB6A"/>
      
      {/* Eyes */}
      <ellipse cx="45" cy="48" rx="10" ry="12" fill="white"/>
      <ellipse cx="75" cy="48" rx="10" ry="12" fill="white"/>
      <circle cx="47" cy="50" r="5" fill="#333"/>
      <circle cx="77" cy="50" r="5" fill="#333"/>
      <circle cx="49" cy="48" r="2" fill="white"/>
      <circle cx="79" cy="48" r="2" fill="white"/>
      
      {/* Smile */}
      <path 
        d="M45 65 Q60 78 75 65" 
        stroke="#333" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Accessories - Small hat */}
      <ellipse cx="60" cy="18" rx="20" ry="8" fill="#FF9800"/>
      <rect x="45" y="10" width="30" height="10" rx="2" fill="#FF9800"/>
      <rect x="50" y="5" width="20" height="8" rx="2" fill="#FFB74D"/>
      
      {/* Cheeks */}
      <ellipse cx="32" cy="58" rx="6" ry="4" fill="#FF8A80" opacity="0.5"/>
      <ellipse cx="88" cy="58" rx="6" ry="4" fill="#FF8A80" opacity="0.5"/>
    </svg>
  );
}

