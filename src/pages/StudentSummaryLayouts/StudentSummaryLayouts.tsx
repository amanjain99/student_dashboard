import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './StudentSummaryLayouts.module.css';

export function StudentSummaryLayouts() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Background elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      
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
          <p className={styles.subtitle}>Student Summary Layouts</p>
        </div>

        {/* Back Button */}
        <motion.button
          className={styles.backButton}
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ x: -4 }}
        >
          <span className={styles.backArrow}>←</span>
          Back to Home
        </motion.button>

        {/* Title */}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose a Layout
        </motion.h1>
        
        <p className={styles.description}>
          Select your preferred summary experience
        </p>

        {/* Layout Cards */}
        <div className={styles.layoutGrid}>
          {/* Layout 1 Card - Game Summary */}
          <motion.button
            className={styles.layoutCard}
            onClick={() => navigate('/summary-layout-1')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout1}>
                {/* Reaction Rail */}
                <div className={styles.previewReactionRail}>
                  <div className={styles.previewReactionDot} />
                  <div className={styles.previewReactionDot} />
                  <div className={styles.previewReactionDot} />
                </div>
                {/* Main Content */}
                <div className={styles.previewMainContent}>
                  <div className={styles.previewHeader} />
                  <div className={styles.previewStatsZone}>
                    <div className={styles.previewAccuracyBar} />
                    <div className={styles.previewStatCards}>
                      <div className={styles.previewStatCard} />
                      <div className={styles.previewStatCard} />
                      <div className={styles.previewStatCard} />
                    </div>
                  </div>
                  <div className={styles.previewPerfGrid}>
                    <div className={styles.previewPerfCard} />
                    <div className={styles.previewPerfCard} />
                    <div className={styles.previewPerfCard} />
                  </div>
                  <div className={styles.previewQuestionCards}>
                    <div className={styles.previewQuestionCard} />
                    <div className={styles.previewQuestionCard} />
                  </div>
                </div>
                {/* Context Panel */}
                <div className={styles.previewContextPanel}>
                  <div className={styles.previewAvatar} />
                  <div className={styles.previewCoinPill} />
                  <div className={styles.previewActions}>
                    <div className={styles.previewActionBtn} />
                    <div className={styles.previewActionBtn} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 1</h3>
              <p className={styles.cardDescription}>
                Classic game summary with stats zone, performance metrics, and Qbit sidebar
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 2 Card - Centered Qbit */}
          <motion.button
            className={`${styles.layoutCard} ${styles.layoutCardHero}`}
            onClick={() => navigate('/summary-layout-2')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.heroBadge}>Recommended</div>
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout2}>
                {/* Hero Row */}
                <div className={styles.previewHeroRow}>
                  {/* Summary Stats */}
                  <div className={styles.previewSummaryCard}>
                    <div className={styles.previewSummaryHeader} />
                    <div className={styles.previewBigStats}>
                      <div className={styles.previewBigStat} />
                      <div className={styles.previewBigStat} />
                      <div className={styles.previewBigStat} />
                    </div>
                    <div className={styles.previewCtaButtons}>
                      <div className={styles.previewCtaBtn} />
                      <div className={styles.previewCtaBtn} />
                    </div>
                  </div>
                  {/* Qbit Showcase */}
                  <div className={styles.previewQbitShowcase}>
                    <div className={styles.previewQbitAvatar} />
                    <div className={styles.previewQbitCoins} />
                  </div>
                  {/* Drop Banner */}
                  <div className={styles.previewDropBanner}>
                    <div className={styles.previewDropBadge} />
                    <div className={styles.previewDropTitle} />
                  </div>
                </div>
                {/* Split Section */}
                <div className={styles.previewSplitSection}>
                  <div className={styles.previewQuestionsCol}>
                    <div className={styles.previewQCard} />
                    <div className={styles.previewQCard} />
                    <div className={styles.previewQCard} />
                  </div>
                  <div className={styles.previewSidebarCol}>
                    <div className={styles.previewAnnouncement} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 2</h3>
              <p className={styles.cardDescription}>
                Qbit-centric hero layout with drop announcements and horizontal stats
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
