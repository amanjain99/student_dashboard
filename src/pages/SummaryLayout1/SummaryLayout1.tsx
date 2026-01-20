import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SummaryLayout1.module.css';

// Import assets
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock data for the summary
const GAME_DATA = {
  gameType: 'Live',
  motivationalMessage: 'Kudos, keep up the motivation! 🎉',
  studentName: 'Aman',
  totalCoins: 560,
  coinsEarned: 60,
  accuracy: 90,
  rank: '1/4',
  score: 3360,
  stats: {
    correct: 5,
    incorrect: 2,
    ungraded: 1,
    timePerQuestion: '17.5 s',
    streak: 5,
    unattempted: 2,
  },
  questions: [
    {
      id: 1,
      text: 'Who is the President of USA?',
      options: ['Donald Trump', 'Joe Biden', 'Bill Clinton', 'Barack Obama'],
      status: 'correct' as const,
    },
    {
      id: 2,
      text: 'Who is the President of USA?',
      options: ['Donald Trump', 'Joe Biden', 'Bill Clinton', 'Barack Obama'],
      status: 'incorrect' as const,
    },
    {
      id: 3,
      text: 'Who is the President of USA?',
      options: ['Donald Trump', 'Joe Biden', 'Bill Clinton', 'Barack Obama'],
      status: 'partial' as const,
    },
  ],
  announcements: [
    {
      id: 1,
      icon: '💬',
      text: 'Join Wayground student forum',
      action: 'Join →',
    },
    {
      id: 2,
      icon: '🎮',
      text: 'Earn more coins by reattempting quiz',
      action: 'Play now',
    },
  ],
};

// Reaction stickers data
const REACTIONS = [
  { id: 'sus', emoji: '🤨', label: 'SUS' },
  { id: 'bigbrain', emoji: '🧠', label: 'Big Brain' },
  { id: 'op', emoji: '💪', label: 'OP' },
  { id: 'imposter', emoji: '👻', label: 'Imposter' },
  { id: 'gg', emoji: '🎮', label: 'GG' },
  { id: 'loser', emoji: '😭', label: 'Loser' },
];

export function SummaryLayout1() {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState(GAME_DATA.announcements);

  const handlePlayAgain = () => {
    console.log('Play again clicked');
  };

  const handleFindNewQuiz = () => {
    console.log('Find new quiz clicked');
  };

  const handleShopClick = () => {
    console.log('Go to shop clicked');
  };

  const handleFriendsClick = () => {
    console.log('Friends clicked');
  };

  const dismissAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter(ann => ann.id !== id));
  };

  return (
    <div className={styles.page}>
      {/* HUD - Top Bar */}
      <header className={styles.hud}>
        <div className={styles.hudLeft}>
          <button className={styles.hudButton} onClick={() => navigate('/summary-layouts')}>
            ✕
          </button>
          <button className={styles.hudButton}>
            📌
          </button>
          <div className={styles.hudDivider} />
          <button className={styles.hudButton}>
            ⚙️
          </button>
          <button className={styles.hudButton}>
            💬
          </button>
        </div>
        <div className={styles.hudRight}>
          <div className={styles.rankBadge}>
            <span className={styles.rankIcon}>🏆</span>
            <span className={styles.rankValue}>1st</span>
          </div>
          <button className={`${styles.hudButton} ${styles.fullscreenButton}`}>
            ⛶
          </button>
        </div>
      </header>

      {/* Main Layout - Unified Stage */}
      <div className={styles.mainLayout}>
        <motion.div 
          className={styles.stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Reaction Rail - Left Edge */}
          <motion.aside 
            className={styles.reactionRail}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.div 
              className={styles.onceMoreSticker}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Once More"
            >
              🔄
            </motion.div>
            <div className={styles.railDivider} />
            {REACTIONS.map((reaction, index) => (
              <motion.button
                key={reaction.id}
                className={styles.reactionSticker}
                title={reaction.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {reaction.emoji}
              </motion.button>
            ))}
          </motion.aside>

          {/* Game Report - Main Content */}
          <div className={styles.gameReport}>
            <div className={styles.gameReportContent}>
              {/* Header */}
              <motion.div 
                className={styles.header}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className={styles.title}>Summary</span>
                <div className={styles.gameTypeBadge}>
                  <span className={styles.gameTypeIcon}>👥</span>
                  <span className={styles.gameTypeText}>{GAME_DATA.gameType}</span>
                </div>
              </motion.div>

              {/* Motivational Message */}
              <motion.p 
                className={styles.motivationalMessage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                {GAME_DATA.motivationalMessage}
              </motion.p>

              {/* Stats Zone - Unified container */}
              <motion.div 
                className={styles.statsZone}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.accuracySection}>
                  <div className={styles.accuracyBar}>
                    <span className={styles.accuracyLabel}>Accuracy</span>
                    <div className={styles.progressBarContainer}>
                      <div className={styles.progressBar}>
                        <motion.div 
                          className={styles.progressCorrect} 
                          initial={{ width: 0 }}
                          animate={{ width: `${GAME_DATA.accuracy}%` }}
                          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                      <span className={styles.percentageBadge}>{GAME_DATA.accuracy}%</span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className={styles.statsRow}>
                    <motion.div 
                      className={styles.statCard}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Rank</span>
                        <span className={styles.statValue}>{GAME_DATA.rank}</span>
                      </div>
                      <div className={`${styles.statIcon} ${styles.rank}`}>🏅</div>
                    </motion.div>
                    <motion.div 
                      className={styles.statCard}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Score</span>
                        <span className={styles.statValue}>{GAME_DATA.score}</span>
                      </div>
                      <div className={`${styles.statIcon} ${styles.score}`}>⭐</div>
                    </motion.div>
                    <motion.div 
                      className={styles.statCard}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={styles.statInfo}>
                        <span className={styles.statLabel}>Coins</span>
                        <span className={styles.statValue}>+{GAME_DATA.coinsEarned}</span>
                      </div>
                      <div className={`${styles.statIcon} ${styles.coins}`}>💰</div>
                    </motion.div>
                  </div>

                  <div className={styles.refreshRankLink}>
                    <a href="#">Click here to refresh rank</a>
                  </div>
                </div>
              </motion.div>

              {/* Performance Stats */}
              <motion.div 
                className={styles.performanceSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h3 className={styles.sectionTitle}>Performance Stats</h3>
                <div className={styles.performanceGrid}>
                  <div className={styles.performanceRow}>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.correct}</span>
                      <span className={styles.performanceLabel}>Correct</span>
                      <span className={`${styles.decorIcon} ${styles.correct}`}>✓</span>
                    </motion.div>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.incorrect}</span>
                      <span className={styles.performanceLabel}>Incorrect</span>
                      <span className={`${styles.decorIcon} ${styles.incorrect}`}>✗</span>
                    </motion.div>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.ungraded}</span>
                      <span className={styles.performanceLabel}>Ungraded</span>
                      <span className={`${styles.decorIcon} ${styles.ungraded}`}>◐</span>
                    </motion.div>
                  </div>
                  <div className={styles.performanceRow}>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.timePerQuestion}</span>
                      <span className={styles.performanceLabel}>Time/ques</span>
                      <span className={`${styles.decorIcon} ${styles.time}`}>⏱</span>
                    </motion.div>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.streak}</span>
                      <span className={styles.performanceLabel}>Streak</span>
                      <span className={`${styles.decorIcon} ${styles.streak}`}>🔥</span>
                    </motion.div>
                    <motion.div className={styles.performanceCard} whileHover={{ y: -2 }}>
                      <span className={styles.performanceNumber}>{GAME_DATA.stats.unattempted}</span>
                      <span className={styles.performanceLabel}>Unattempted</span>
                      <span className={`${styles.decorIcon} ${styles.unattempted}`}>⊖</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Review Questions */}
              <motion.div 
                className={styles.reviewSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.reviewHeader}>
                  <h3 className={styles.reviewTitle}>Review Questions</h3>
                  <p className={styles.reviewSubtitle}>Click on the questions to see answers</p>
                </div>
                <div className={styles.questionsList}>
                  {GAME_DATA.questions.map((question, index) => (
                    <motion.div 
                      key={question.id}
                      className={`${styles.questionCard} ${styles[question.status]}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={styles.questionBody}>
                        <div className={styles.questionText}>
                          <span className={styles.questionNumber}>{question.id}.</span>
                          <span className={styles.questionContent}>{question.text}</span>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.optionsList}>
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} className={styles.option}>
                              <div className={styles.optionBullet} />
                              <span className={styles.optionText}>{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className={styles.ctaSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className={styles.primaryCta} 
                  onClick={handlePlayAgain}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Play again
                </motion.button>
                <motion.button 
                  className={styles.secondaryCta} 
                  onClick={handleFindNewQuiz}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Find a new quiz
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Context Panel - Right Rail (Avatar + Actions + Announcements) */}
          <motion.aside 
            className={styles.contextPanel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Qbit Avatar Zone */}
            <div className={styles.qbitZone}>
              <div className={styles.avatarGlow} />
              <div className={styles.avatarContainer}>
                <img src={qbitAvatar} alt="Qbit" className={styles.avatar} />
              </div>
              <motion.p 
                className={styles.greeting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Great job, {GAME_DATA.studentName}! 👋
              </motion.p>
              <div className={styles.coinsDisplay}>
                <div className={styles.coinsPill}>
                  <span className={styles.coinIcon}>🪙</span>
                  <span className={styles.coinAmount}>{GAME_DATA.totalCoins}</span>
                  <span className={styles.coinLabel}>coins</span>
                </div>
                <motion.div 
                  className={styles.coinsEarnedBadge}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                >
                  +{GAME_DATA.coinsEarned} earned this game!
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <motion.button 
                className={styles.shopButton} 
                onClick={handleShopClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.buttonIcon}>🛍️</span>
                Shop
              </motion.button>
              <motion.button 
                className={styles.friendsButton} 
                onClick={handleFriendsClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.buttonIcon}>👥</span>
                Friends
              </motion.button>
            </div>

            <div className={styles.contextDivider} />

            {/* Announcements Zone */}
            <AnimatePresence>
              {announcements.length > 0 && (
                <motion.div 
                  className={styles.announcementsZone}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className={styles.announcementTitle}>What's New</span>
                  {announcements.map((announcement, index) => (
                    <motion.div 
                      key={announcement.id} 
                      className={styles.announcementCard}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.55 + index * 0.1 }}
                      layout
                    >
                      <span className={styles.announcementIcon}>{announcement.icon}</span>
                      <div className={styles.announcementContent}>
                        <p className={styles.announcementText}>{announcement.text}</p>
                      </div>
                      <span className={styles.announcementAction}>{announcement.action}</span>
                      <button 
                        className={styles.announcementDismiss} 
                        onClick={() => dismissAnnouncement(announcement.id)}
                        title="Dismiss"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        </motion.div>
      </div>
    </div>
  );
}
