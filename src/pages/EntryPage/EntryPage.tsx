import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './EntryPage.module.css';

export function EntryPage() {
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
          <p className={styles.subtitle}>Student Dashboard Layouts</p>
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

        {/* Layout Selection */}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose a Layout
        </motion.h1>
        
        <p className={styles.description}>
          Select your preferred dashboard experience
        </p>

        {/* Layout Cards */}
        <div className={styles.layoutGrid}>
          {/* Layout 1 Card */}
          <motion.button
            className={styles.layoutCard}
            onClick={() => navigate('/layout-1')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout1}>
                <div className={styles.previewMain}>
                  <div className={styles.previewNav} />
                  <div className={styles.previewHero} />
                  <div className={styles.previewCards}>
                    <div className={styles.previewCard} />
                    <div className={styles.previewCard} />
                    <div className={styles.previewCard} />
                  </div>
                </div>
                <div className={styles.previewSidebar}>
                  <div className={styles.previewAvatar} />
                  <div className={styles.previewLine} />
                  <div className={styles.previewLine} />
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 1</h3>
              <p className={styles.cardDescription}>
                Classic sidebar layout with Qbit companion panel
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 2 Card */}
          <motion.button
            className={styles.layoutCard}
            onClick={() => navigate('/layout-2')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout2}>
                <div className={styles.previewTopBarFull}>
                  <div className={styles.previewTopBarLogo} />
                  <div className={styles.previewTopBarQbit} />
                  <div className={styles.previewTopBarBtns} />
                </div>
                <div className={styles.previewHeroFull} />
                <div className={styles.previewCardsFull}>
                  <div className={styles.previewCardFull} />
                  <div className={styles.previewCardFull} />
                  <div className={styles.previewCardFull} />
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 2</h3>
              <p className={styles.cardDescription}>
                Top bar layout with full-width content
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 3 Card */}
          <motion.button
            className={styles.layoutCard}
            onClick={() => navigate('/layout-3')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout3}>
                <div className={styles.previewBentoGrid}>
                  <div className={styles.previewBentoQbit}>
                    <div className={styles.previewBentoAvatar} />
                  </div>
                  <div className={styles.previewBentoJoin}>
                    <div className={styles.previewBentoInput} />
                  </div>
                </div>
                <div className={styles.previewBentoCards}>
                  <div className={styles.previewCard} />
                  <div className={styles.previewCard} />
                  <div className={styles.previewCard} />
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 3</h3>
              <p className={styles.cardDescription}>
                Bento box layout with Qbit front and center
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 4 Card - Game Inspired */}
          <motion.button
            className={`${styles.layoutCard} ${styles.layoutCardGame}`}
            onClick={() => navigate('/layout-4')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout4}>
                <div className={styles.previewGameLeft}>
                  <div className={styles.previewGameChar} />
                </div>
                <div className={styles.previewGameCenter}>
                  <div className={styles.previewGameStats} />
                  <div className={styles.previewGameQuest} />
                  <div className={styles.previewGameCards}>
                    <div className={styles.previewCard} />
                    <div className={styles.previewCard} />
                  </div>
                </div>
                <div className={styles.previewGameRight}>
                  <div className={styles.previewGameStat} />
                  <div className={styles.previewGameStat} />
                  <div className={styles.previewGameStat} />
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 4</h3>
              <p className={styles.cardDescription}>
                Game-inspired HUD with character showcase
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 5 Card - Premium */}
          <motion.button
            className={`${styles.layoutCard} ${styles.layoutCardPremium}`}
            onClick={() => navigate('/layout-5')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout5}>
                <div className={styles.previewPremiumHero}>
                  <div className={styles.previewPremiumQbit} />
                  <div className={styles.previewPremiumWelcome}>
                    <div className={styles.previewPremiumTitle} />
                    <div className={styles.previewPremiumLevel} />
                  </div>
                </div>
                <div className={styles.previewPremiumActions}>
                  <div className={styles.previewPremiumJoin} />
                  <div className={styles.previewPremiumBtn} />
                  <div className={styles.previewPremiumBtn} />
                  <div className={styles.previewPremiumBtn} />
                </div>
                <div className={styles.previewPremiumCards}>
                  <div className={styles.previewCard} />
                  <div className={styles.previewCard} />
                  <div className={styles.previewCard} />
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 5</h3>
              <p className={styles.cardDescription}>
                Premium experience with Qbit hero & quick actions
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>

          {/* Layout 6 Card - Qbit Centric (Full Width) */}
          <motion.button
            className={`${styles.layoutCard} ${styles.layoutCardQbitCentric}`}
            onClick={() => navigate('/layout-6')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.qbitCentricBadge}>🤖 AI FIRST</div>
            <div className={styles.cardPreview}>
              <div className={styles.previewLayout6}>
                <div className={styles.previewQbitCenter}>
                  <div className={styles.previewQbitRing} />
                  <div className={styles.previewQbitAvatar} />
                  <div className={styles.previewQuickAction} style={{ transform: 'rotate(-60deg) translateY(-40px) rotate(60deg)' }} />
                  <div className={styles.previewQuickAction} style={{ transform: 'rotate(-20deg) translateY(-40px) rotate(20deg)' }} />
                  <div className={styles.previewQuickAction} style={{ transform: 'rotate(20deg) translateY(-40px) rotate(-20deg)' }} />
                  <div className={styles.previewQuickAction} style={{ transform: 'rotate(60deg) translateY(-40px) rotate(-60deg)' }} />
                </div>
                <div className={styles.previewChatBubble}>
                  <div className={styles.previewChatLine} />
                </div>
                <div className={styles.previewJoinBar} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Layout 6</h3>
              <p className={styles.cardDescription}>
                Qbit-centric experience with AI companion as the central hub
              </p>
            </div>
            <div className={styles.cardArrow}>→</div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

