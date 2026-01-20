import { motion } from 'framer-motion';
import styles from './TopNav.module.css';

interface TopNavProps {
  userName: string;
}

export function TopNav({ userName }: TopNavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* WAYGROUND Logo */}
        <a href="/" className={styles.logo}>
          <div className={styles.logoGroup}>
            <WaygroundLogo />
            <span className={styles.formerlyText}>formerly Quizizz</span>
          </div>
        </a>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Dashboard Button */}
          <motion.button 
            className={styles.dashboardBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Go to Dashboard
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

function WaygroundLogo() {
  return (
    <div className={styles.logoWrapper}>
      {/* W Symbol */}
      <svg 
        className={styles.logoSymbol}
        width="31" 
        height="22" 
        viewBox="0 0 31 22" 
        fill="none"
      >
        <path 
          d="M4 4L8.5 18L15.5 7L22.5 18L27 4" 
          stroke="currentColor" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      {/* WAYGROUND Text */}
      <span className={styles.logoText}>WAYGROUND</span>
    </div>
  );
}
