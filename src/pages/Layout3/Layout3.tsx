import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import { FloatingParticles } from '../../components/FloatingParticles';
import styles from './Layout3.module.css';

// Import Qbit avatar
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock user data
const USER = {
  name: 'Aman',
  coinBalance: 2998,
};

export function Layout3() {
  const [joinCode, setJoinCode] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCode.trim()) {
      console.log('Joining with code:', joinCode);
    }
  };

  const handleShopClick = () => {
    console.log('Opening shop...');
  };

  const handleFriendsClick = () => {
    console.log('Opening friends...');
  };

  return (
    <div className={styles.layout}>
      <FloatingParticles />
      
      {/* Minimal Header */}
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>
          ← Layouts
        </Link>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>W</span>
          <span className={styles.logoText}>WAYGROUND</span>
        </div>
        <div className={styles.spacer} />
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Bento Grid - Hero Section */}
        <div className={styles.bentoGrid}>
          {/* Qbit Bento Box */}
          <motion.div 
            className={styles.qbitBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.qbitGlow} />
            
            <motion.div 
              className={styles.qbitAvatar}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={qbitAvatar} alt="Your Qbit" />
            </motion.div>
            
            <div className={styles.qbitInfo}>
              <h2 className={styles.greeting}>
                Hey, {USER.name}!
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
              </h2>
              
              <div className={styles.coinsBadge}>
                <span className={styles.coinIcon}>🪙</span>
                <span className={styles.coinsAmount}>{USER.coinBalance.toLocaleString()}</span>
                <span className={styles.coinsLabel}>coins</span>
              </div>
            </div>

            <div className={styles.qbitActions}>
              <button className={styles.primaryBtn} onClick={handleShopClick}>
                🛒 Shop
              </button>
              <button className={styles.secondaryBtn} onClick={handleFriendsClick}>
                👥 Friends
              </button>
            </div>
          </motion.div>

          {/* Join Code Bento Box */}
          <motion.div 
            className={styles.joinBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className={styles.joinContent}>
              <h2 className={styles.joinTitle}>Join an Activity</h2>
              <p className={styles.joinSubtitle}>Enter the code shared by your teacher</p>
              
              <form className={styles.joinForm} onSubmit={handleJoin}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.joinInput}
                    placeholder="Enter a join code"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                  />
                </div>
                <motion.button 
                  type="submit" 
                  className={styles.joinBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </motion.button>
              </form>
            </div>
            
            <div className={styles.joinDecor}>
              <span className={styles.decorIcon}>🎯</span>
            </div>
          </motion.div>
        </div>

        {/* Activities Section - Same component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ActivitiesSection />
        </motion.div>
      </main>
    </div>
  );
}

