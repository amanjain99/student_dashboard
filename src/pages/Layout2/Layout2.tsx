import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSection } from '../../components/HeroSection';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import { FloatingParticles } from '../../components/FloatingParticles';
import styles from './Layout2.module.css';

// Import Qbit avatar
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock user data - same as Layout 1
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  streak: 5,
};

export function Layout2() {
  const handleShopClick = () => {
    console.log('Opening shop...');
  };

  const handleFriendsClick = () => {
    console.log('Opening friends - see classmates Qbits...');
  };

  return (
    <div className={styles.layout}>
      <FloatingParticles />
      
      {/* Top Bar with User Info */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to="/" className={styles.backLink}>
            ← Layouts
          </Link>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>W</span>
            <span className={styles.logoText}>WAYGROUND</span>
          </div>
        </div>

        {/* Qbit + User Info in Header */}
        <div className={styles.headerCenter}>
          <motion.div 
            className={styles.qbitMini}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={qbitAvatar} alt="Your Qbit" />
          </motion.div>
          <div className={styles.userGreeting}>
            <span className={styles.greetingText}>
              Hey, {USER.name}! 
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
              >
                👋
              </motion.span>
            </span>
            <div className={styles.coinsBadge}>
              <span>🪙</span>
              <span className={styles.coinsAmount}>{USER.coinBalance.toLocaleString()}</span>
              <span className={styles.coinsLabel}>coins</span>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.headerBtn} onClick={handleShopClick}>
            🛒 Shop
          </button>
          <button className={styles.headerBtnSecondary} onClick={handleFriendsClick}>
            👥 Friends
          </button>
        </div>
      </header>

      {/* Main Content - Full Width, No Sidebar */}
      <main className={styles.main}>
        {/* Hero Section - Same component */}
        <HeroSection />
        
        {/* Activities Section - Same component */}
        <ActivitiesSection />
      </main>
    </div>
  );
}
