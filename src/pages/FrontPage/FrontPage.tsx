import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './FrontPage.module.css';

export function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Background elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGlow3} />
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className={styles.header}>
          <motion.div 
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.logoIcon}>W</span>
            <span className={styles.logoText}>WAYGROUND</span>
          </motion.div>
          <p className={styles.subtitle}>Student Experience</p>
        </div>

        {/* Main Selection */}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What would you like to explore?
        </motion.h1>
        
        <p className={styles.description}>
          Choose a section to view its layout options
        </p>

        {/* Selection Cards */}
        <div className={styles.cardGrid}>
          {/* Student Dashboard Card */}
          <motion.button
            className={styles.selectionCard}
            onClick={() => navigate('/dashboard-layouts')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Student Dashboard</h2>
              <p className={styles.cardDescription}>
                Interactive dashboard layouts with activities, Qbit companion, and gamification elements
              </p>
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.layoutCount}>6 Layouts</span>
              <span className={styles.cardArrow}>→</span>
            </div>
          </motion.button>

          {/* Student Summary Card */}
          <motion.button
            className={`${styles.selectionCard} ${styles.summaryCard}`}
            onClick={() => navigate('/summary-layouts')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Student Summary</h2>
              <p className={styles.cardDescription}>
                Summary views displaying student progress, achievements, and performance analytics
              </p>
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.summaryLayoutCount}>2 Layouts</span>
              <span className={styles.cardArrow}>→</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

