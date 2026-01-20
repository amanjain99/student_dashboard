import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import styles from './Layout5.module.css';

// Import Qbit avatar
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock user data
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  streak: 5,
  rank: 'Scholar',
};

export function Layout5() {
  const [joinCode, setJoinCode] = useState('');
  const [isHoveringQbit, setIsHoveringQbit] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCode.trim()) {
      console.log('Joining:', joinCode);
    }
  };

  return (
    <div className={styles.layout}>
      {/* Premium Background */}
      <div className={styles.bgLayer}>
        <div className={styles.bgGradient1} />
        <div className={styles.bgGradient2} />
        <div className={styles.bgGradient3} />
        <div className={styles.bgNoise} />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingOrb}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Minimal Header */}
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>
          <motion.span whileHover={{ x: -3 }} className={styles.backArrow}>←</motion.span>
          <span>Layouts</span>
        </Link>
        
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.logoMark}>W</span>
          <span className={styles.logoText}>WAYGROUND</span>
        </motion.div>

        <div className={styles.headerRight}>
          <motion.div 
            className={styles.streakBadge}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.streakIcon}>🔥</span>
            <span className={styles.streakValue}>{USER.streak}</span>
          </motion.div>
          <motion.div 
            className={styles.coinBadge}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.coinIcon}>🪙</span>
            <span className={styles.coinValue}>{USER.coinBalance.toLocaleString()}</span>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section - Qbit + User Welcome */}
        <motion.section 
          className={styles.heroSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Qbit Character */}
          <motion.div 
            className={styles.qbitContainer}
            onHoverStart={() => setIsHoveringQbit(true)}
            onHoverEnd={() => setIsHoveringQbit(false)}
          >
            <motion.div 
              className={styles.qbitGlow}
              animate={{ 
                scale: isHoveringQbit ? [1, 1.2, 1] : [1, 1.1, 1],
                opacity: isHoveringQbit ? [0.4, 0.6, 0.4] : [0.2, 0.35, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className={styles.qbitRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src={qbitAvatar}
              alt="Your Qbit"
              className={styles.qbitImage}
              animate={{ 
                y: [0, -8, 0],
                rotate: isHoveringQbit ? [0, -5, 5, 0] : 0,
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 0.5 },
              }}
            />
            <AnimatePresence>
              {isHoveringQbit && (
                <motion.div
                  className={styles.qbitSpeech}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                >
                  Let's learn! ✨
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Welcome + Stats */}
          <div className={styles.welcomeSection}>
            <motion.div 
              className={styles.rankBadge}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={styles.rankIcon}>⚔️</span>
              <span className={styles.rankText}>{USER.rank}</span>
            </motion.div>
            
            <motion.h1 
              className={styles.welcomeTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome back, <span className={styles.userName}>{USER.name}</span>
              <motion.span
                className={styles.waveEmoji}
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
            </motion.h1>
          </div>
        </motion.section>

        {/* Action Cards Row */}
        <motion.section 
          className={styles.actionRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Join Activity Card */}
          <motion.div 
            className={styles.joinCard}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
          >
            <div className={styles.joinCardHeader}>
              <span className={styles.joinIcon}>🎯</span>
              <h3 className={styles.joinTitle}>Join Activity</h3>
            </div>
            <form className={styles.joinForm} onSubmit={handleJoin}>
              <input
                type="text"
                className={styles.joinInput}
                placeholder="Enter code..."
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
              />
              <motion.button 
                type="submit" 
                className={styles.joinBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Actions */}
          <motion.button 
            className={styles.actionCard}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.actionIcon}>🛒</span>
            <span className={styles.actionLabel}>Shop</span>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.actionIcon}>👥</span>
            <span className={styles.actionLabel}>Friends</span>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.actionIcon}>🎨</span>
            <span className={styles.actionLabel}>Customize</span>
          </motion.button>
        </motion.section>

        {/* Activities Section */}
        <motion.section 
          className={styles.activitiesSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ActivitiesSection />
        </motion.section>
      </main>
    </div>
  );
}

