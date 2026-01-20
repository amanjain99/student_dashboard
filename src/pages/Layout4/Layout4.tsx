import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import styles from './Layout4.module.css';

// Import Qbit avatars
import qbitAvatar from '../../../assets/sigma-boi.png';
import newDrop1 from '../../../assets/bat-catgirl.png';
import newDrop2 from '../../../assets/anime-coolgirl.png';
import newDrop3 from '../../../assets/otaku-boi.png';

// New drops data
const NEW_DROPS = [
  { id: 1, name: 'Shadow Cat', image: newDrop1, rarity: 'legendary', price: 1200 },
  { id: 2, name: 'Cyber Girl', image: newDrop2, rarity: 'epic', price: 800 },
  { id: 3, name: 'Otaku', image: newDrop3, rarity: 'rare', price: 500 },
];

// Mock user data
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  streak: 5,
  rank: 'Scholar',
  questsCompleted: 47,
  accuracy: 78,
};

export function Layout4() {
  const [joinCode, setJoinCode] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCode.trim()) {
      console.log('Joining quest:', joinCode);
    }
  };

  return (
    <div className={styles.layout}>
      {/* Animated Background Elements */}
      <div className={styles.bgEffects}>
        <div className={styles.gridOverlay} />
        <div className={styles.scanline} />
        <div className={styles.vignette} />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Top HUD */}
      <header className={styles.hud}>
        <Link to="/" className={styles.backBtn}>
          <span className={styles.backIcon}>◀</span>
          <span>LAYOUTS</span>
        </Link>
        
        <div className={styles.logoSection}>
          <span className={styles.logoMark}>W</span>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>WAYGROUND</span>
            <span className={styles.logoSub}>QUEST DASHBOARD</span>
          </div>
        </div>

        <div className={styles.resourceBar}>
          <div className={styles.coinDisplay}>
            <span className={styles.coinIcon}>🪙</span>
            <span className={styles.coinValue}>{USER.coinBalance.toLocaleString()}</span>
          </div>
        </div>
      </header>

      {/* Main Game Layout */}
      <main className={styles.gameMain}>
        {/* Left: Character Showcase */}
        <section className={styles.characterPanel}>
          <div className={styles.characterFrame}>
            <div className={styles.frameCorner} data-pos="tl" />
            <div className={styles.frameCorner} data-pos="tr" />
            <div className={styles.frameCorner} data-pos="bl" />
            <div className={styles.frameCorner} data-pos="br" />
            
            <motion.div 
              className={styles.characterGlow}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.img
              src={qbitAvatar}
              alt="Your Qbit"
              className={styles.characterAvatar}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <div className={styles.characterName}>
              <span className={styles.nameLabel}>COMPANION</span>
              <span className={styles.nameValue}>QBIT</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <motion.button 
              className={styles.primaryAction}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.actionIcon}>🛒</span>
              <span>SHOP</span>
            </motion.button>
            <motion.button 
              className={styles.secondaryAction}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.actionIcon}>👥</span>
              <span>FRIENDS</span>
            </motion.button>
            <motion.button 
              className={styles.dailyReward}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.actionIcon}>🎁</span>
              <span>DAILY REWARD</span>
            </motion.button>
          </div>
        </section>

        {/* Center: Main Content */}
        <section className={styles.centerContent}>
          {/* Player Stats Bar */}
          <div className={styles.playerStats}>
            <div className={styles.playerInfo}>
              <div className={styles.playerRank}>
                <span className={styles.rankBadge}>⚔️</span>
                <span className={styles.rankTitle}>{USER.rank}</span>
              </div>
              <h1 className={styles.playerName}>{USER.name}</h1>
            </div>
            
          </div>

          {/* New Drops Announcement Banner */}
          <div className={styles.newDropsBanner}>
            <div className={styles.newDropsHeader}>
              <div className={styles.newDropsTitleRow}>
                <span className={styles.newDropsIcon}>✨</span>
                <h2 className={styles.newDropsTitle}>NEW DROPS</h2>
                <span className={styles.newBadge}>HOT</span>
              </div>
              <motion.button 
                className={styles.viewAllDrops}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View All</span>
                <span className={styles.arrowIcon}>→</span>
              </motion.button>
            </div>
            
            <div className={styles.dropsCarousel}>
              {NEW_DROPS.map((drop, index) => (
                <motion.div
                  key={drop.id}
                  className={styles.dropCard}
                  data-rarity={drop.rarity}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <div className={styles.dropImageWrap}>
                    <div className={styles.dropGlow} data-rarity={drop.rarity} />
                    <img src={drop.image} alt={drop.name} className={styles.dropImage} />
                    <span className={styles.rarityTag} data-rarity={drop.rarity}>
                      {drop.rarity}
                    </span>
                  </div>
                  <div className={styles.dropInfo}>
                    <span className={styles.dropName}>{drop.name}</span>
                    <span className={styles.dropPrice}>
                      <span className={styles.priceIcon}>🪙</span>
                      {drop.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quest Join Section */}
          <div className={styles.questJoin}>
            <div className={styles.questHeader}>
              <span className={styles.questIcon}>📜</span>
              <h2 className={styles.questTitle}>JOIN QUEST</h2>
            </div>
            <form className={styles.questForm} onSubmit={handleJoin}>
              <input
                type="text"
                className={styles.questInput}
                placeholder="Enter quest code..."
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
              />
              <motion.button 
                type="submit" 
                className={styles.questBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>EMBARK</span>
                <span className={styles.btnArrow}>▶</span>
              </motion.button>
            </form>
          </div>

          {/* Activities as Quests */}
          <div className={styles.questLog}>
            <div className={styles.questLogHeader}>
              <span className={styles.questLogIcon}>⚡</span>
              <h2 className={styles.questLogTitle}>ACTIVE QUESTS</h2>
            </div>
            <ActivitiesSection />
          </div>
        </section>

      </main>
    </div>
  );
}

