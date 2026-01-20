import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewDropsTeaser } from '../NewDropsTeaser';
import styles from './QbitSidebar.module.css';

interface QbitSidebarProps {
  avatarUrl?: string;
  userName?: string;
  coinBalance: number;
  coinsEarned?: number;
  streak?: number;
  onCustomize?: () => void;
  onShopClick?: () => void;
  onFriendsClick?: () => void;
}

export function QbitSidebar({ 
  avatarUrl, 
  userName = 'Aman',
  coinBalance,
  coinsEarned,
  onShopClick,
  onFriendsClick 
}: QbitSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        className={styles.mobileToggle}
        onClick={() => setIsCollapsed(!isCollapsed)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Qbit sidebar"
      >
        <div className={styles.miniAvatar}>
          {avatarUrl ? (
            <img src={avatarUrl} alt="" />
          ) : (
            <DefaultQbitMini />
          )}
        </div>
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.aside
            className={styles.sidebar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Close button for mobile */}
            <button 
              className={styles.closeBtn}
              onClick={() => setIsCollapsed(true)}
              aria-label="Close sidebar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Avatar Section */}
            <div className={styles.qbitSection}>
              <div className={styles.avatarGlow} />
              
              <motion.div 
                className={styles.avatarContainer}
                animate={{ y: [0, -4, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Your Qbit" className={styles.avatar} />
                ) : (
                  <DefaultQbit />
                )}
              </motion.div>
            </div>

            {/* User Section */}
            <div className={styles.userSection}>
              {/* Greeting */}
              <motion.h2 
                className={styles.greeting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Hey, {userName}!
                <motion.span
                  className={styles.wave}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    repeatDelay: 4,
                    ease: 'easeInOut'
                  }}
                >
                  👋
                </motion.span>
              </motion.h2>

              {/* Coins */}
              <div className={styles.coinsSection}>
                <motion.div 
                  className={styles.coinsPill}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <span className={styles.coinIcon}>🪙</span>
                  <span className={styles.coinAmount}>{coinBalance.toLocaleString()}</span>
                  <span className={styles.coinLabel}>coins</span>
                </motion.div>

                {/* Coins Earned Badge */}
                {coinsEarned && coinsEarned > 0 && (
                  <motion.div 
                    className={styles.coinsEarnedBadge}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.25, type: 'spring', stiffness: 200 }}
                  >
                    +{coinsEarned} earned this game!
                  </motion.div>
                )}
              </div>

              {/* Action Buttons */}
              <motion.div 
                className={styles.buttonGroup}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  className={styles.shopButton}
                  onClick={onShopClick}
                >
                  <span className={styles.buttonIcon}>🛒</span>
                  Shop
                </button>

                <button
                  className={styles.friendsButton}
                  onClick={onFriendsClick}
                >
                  <span className={styles.buttonIcon}>👥</span>
                  Friends
                </button>
              </motion.div>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Promotional Section */}
            <motion.div 
              className={styles.bottomSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <NewDropsTeaser />
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsCollapsed(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function DefaultQbit() {
  return (
    <svg className={styles.defaultQbit} viewBox="0 0 120 140" fill="none">
      <defs>
        <linearGradient id="bodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A"/>
          <stop offset="100%" stopColor="#43A047"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="95" rx="40" ry="35" fill="#4CAF50"/>
      <ellipse cx="60" cy="95" rx="35" ry="30" fill="url(#bodyGrad)"/>
      <circle cx="60" cy="50" r="38" fill="#4CAF50"/>
      <circle cx="60" cy="50" r="33" fill="url(#bodyGrad)"/>
      <ellipse cx="45" cy="48" rx="10" ry="12" fill="white"/>
      <ellipse cx="75" cy="48" rx="10" ry="12" fill="white"/>
      <circle cx="47" cy="50" r="5" fill="#333"/>
      <circle cx="77" cy="50" r="5" fill="#333"/>
      <circle cx="49" cy="48" r="2" fill="white"/>
      <circle cx="79" cy="48" r="2" fill="white"/>
      <path d="M45 65 Q60 78 75 65" stroke="#333" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <ellipse cx="60" cy="18" rx="20" ry="8" fill="#FF9800"/>
      <rect x="45" y="10" width="30" height="10" rx="2" fill="#FF9800"/>
      <rect x="50" y="5" width="20" height="8" rx="2" fill="#FFB74D"/>
      <ellipse cx="32" cy="58" rx="6" ry="4" fill="#FF8A80" opacity="0.5"/>
      <ellipse cx="88" cy="58" rx="6" ry="4" fill="#FF8A80" opacity="0.5"/>
    </svg>
  );
}

function DefaultQbitMini() {
  return (
    <svg viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="miniBodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A"/>
          <stop offset="100%" stopColor="#43A047"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="38" fill="#4CAF50"/>
      <circle cx="60" cy="60" r="33" fill="url(#miniBodyGrad)"/>
      <ellipse cx="45" cy="58" rx="10" ry="12" fill="white"/>
      <ellipse cx="75" cy="58" rx="10" ry="12" fill="white"/>
      <circle cx="47" cy="60" r="5" fill="#333"/>
      <circle cx="77" cy="60" r="5" fill="#333"/>
      <circle cx="49" cy="58" r="2" fill="white"/>
      <circle cx="79" cy="58" r="2" fill="white"/>
      <path d="M45 75 Q60 88 75 75" stroke="#333" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
