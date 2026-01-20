import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './SummaryLayout2.module.css';

// Import assets
import qbitAvatar from '../../../assets/sigma-boi.png';

// Import banner image
import strangerBanner from '../../../assets/strangerthings.png';

// Mock data
const GAME_DATA = {
  gameType: 'Live',
  studentName: 'Aman',
  totalCoins: 560,
  coinsEarned: 60,
  accuracy: 90,
  rank: '1/4',
  score: 3360,
  stats: {
    correct: 5,
    incorrect: 2,
    streak: 5,
    avgTime: '17.5s',
  },
  questions: [
    { 
      id: 1, 
      text: 'Who is the President of USA?', 
      options: ['Donald Trump', 'Joe Biden', 'Bill Clinton', 'Barack Obama'],
      correctAnswer: 0,
      userAnswer: 0,
      status: 'correct' as const 
    },
    { 
      id: 2, 
      text: 'What is the capital of France?', 
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
      userAnswer: 1,
      status: 'incorrect' as const 
    },
    { 
      id: 3, 
      text: 'Which planet is known as the Red Planet?', 
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      userAnswer: 1,
      status: 'correct' as const 
    },
    { 
      id: 4, 
      text: 'What is the largest ocean on Earth?', 
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correctAnswer: 3,
      userAnswer: 3,
      status: 'correct' as const 
    },
    { 
      id: 5, 
      text: 'Who wrote Romeo and Juliet?', 
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1,
      userAnswer: 1,
      status: 'partial' as const 
    },
    { 
      id: 6, 
      text: 'What is the chemical symbol for Gold?', 
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correctAnswer: 2,
      userAnswer: 2,
      status: 'correct' as const 
    },
    { 
      id: 7, 
      text: 'Which country has the largest population?', 
      options: ['USA', 'India', 'China', 'Russia'],
      correctAnswer: 2,
      userAnswer: 1,
      status: 'incorrect' as const 
    },
    { 
      id: 8, 
      text: 'What year did World War II end?', 
      options: ['1943', '1944', '1945', '1946'],
      correctAnswer: 2,
      userAnswer: 2,
      status: 'correct' as const 
    },
    { 
      id: 9, 
      text: 'What is the speed of light?', 
      options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '1,000,000 km/s'],
      correctAnswer: 0,
      userAnswer: 0,
      status: 'partial' as const 
    },
    { 
      id: 10, 
      text: 'Who painted the Mona Lisa?', 
      options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
      correctAnswer: 1,
      userAnswer: 1,
      status: 'correct' as const 
    },
  ],
  announcements: [
    { id: 1, icon: '💬', text: 'Join Wayground student forum', action: 'Join →' },
    { id: 2, icon: '🎮', text: 'Earn more coins by reattempting', action: 'Play now' },
  ],
};

// Reactions
const REACTIONS = [
  { id: 'sus', emoji: '🤨' },
  { id: 'bigbrain', emoji: '🧠' },
  { id: 'op', emoji: '💪' },
  { id: 'imposter', emoji: '👻' },
  { id: 'gg', emoji: '🎮' },
  { id: 'loser', emoji: '😭' },
];

export function SummaryLayout2() {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState(GAME_DATA.announcements);

  const dismissAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter(ann => ann.id !== id));
  };

  return (
    <div className={styles.page}>
      {/* HUD */}
      <header className={styles.hud}>
        <div className={styles.hudLeft}>
          <button className={styles.hudButton} onClick={() => navigate('/summary-layouts')}>✕</button>
          <button className={styles.hudButton}>📌</button>
          <div className={styles.hudDivider} />
          <button className={styles.hudButton}>⚙️</button>
        </div>
        <div className={styles.hudRight}>
          <div className={styles.rankBadge}>
            <span>🏆</span>
            <span className={styles.rankValue}>1st</span>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className={styles.mainLayout}>
        {/* Reaction Rail */}
        <aside className={styles.reactionRail}>
          <div className={styles.onceMoreSticker}>🔄</div>
          <div className={styles.railDivider} />
          {REACTIONS.map((r) => (
            <button key={r.id} className={styles.reactionSticker}>{r.emoji}</button>
          ))}
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.contentInner}>
            
            {/* HERO ROW: Summary Card + Drop Announcement */}
            <div className={styles.heroRow}>
              {/* Left: Game Summary Card */}
              <motion.div 
                className={styles.heroSection}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Summary Stats */}
                <div className={styles.summaryStats}>
                  <div className={styles.summaryHeader}>
                    <span className={styles.summaryLabel}>GAME SUMMARY</span>
                    <span className={styles.liveTag}>👥 {GAME_DATA.gameType}</span>
                  </div>
                  <div className={styles.bigStats}>
                    <div className={styles.bigStat}>
                      <span className={styles.bigValue}>{GAME_DATA.rank}</span>
                      <span className={styles.bigLabel}>Rank</span>
                    </div>
                    <div className={styles.bigStat}>
                      <span className={styles.bigValue}>{GAME_DATA.score}</span>
                      <span className={styles.bigLabel}>Score</span>
                    </div>
                    <div className={styles.bigStat}>
                      <span className={styles.bigValue}>{GAME_DATA.accuracy}%</span>
                      <span className={styles.bigLabel}>Accuracy</span>
                    </div>
                  </div>
                  <div className={styles.smallStats}>
                    <span>{GAME_DATA.stats.correct} correct</span>
                    <span>•</span>
                    <span>{GAME_DATA.stats.incorrect} wrong</span>
                    <span>•</span>
                    <span>{GAME_DATA.stats.streak} streak</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className={styles.heroActions}>
                    <motion.button 
                      className={styles.primaryCta}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Play Again
                    </motion.button>
                    <motion.button 
                      className={styles.secondaryCta}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Find New Quiz
                    </motion.button>
                  </div>
                </div>

                {/* Qbit Showcase */}
                <div className={styles.qbitShowcase}>
                  <div className={styles.avatarWrapper}>
                    <img src={qbitAvatar} alt="Qbit" className={styles.avatar} />
                  </div>
                  <div className={styles.qbitActions}>
                    <div className={styles.coinsDisplay}>
                      <span className={styles.coinIcon}>🪙</span>
                      <span className={styles.coinAmount}>{GAME_DATA.totalCoins}</span>
                      <span className={styles.coinEarned}>+{GAME_DATA.coinsEarned}</span>
                    </div>
                    <Link to="/shop" className={styles.qbitShopBtn}>
                      🛍️ Shop
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Right: Drop Announcement */}
              <motion.div
                className={styles.dropAnnouncement}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/drops" className={styles.dropLink}>
                  <img src={strangerBanner} alt="Stranger Qbits" className={styles.dropBannerImage} />
                  <div className={styles.dropOverlay}>
                    <div className={styles.dropContent}>
                      <span className={styles.dropSubtitle}>Limited Edition Collection</span>
                      <span className={styles.dropCta}>Shop Now →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* SPLIT: Questions Left, Sidebar Right */}
            <div className={styles.splitSection}>
              {/* Questions with Options */}
              <div className={styles.questionsColumn}>
                <div className={styles.questionsHeader}>
                  <span className={styles.questionsTitle}>Review Questions</span>
                  <span className={styles.questionsCount}>{GAME_DATA.questions.length} questions</span>
                </div>
                <div className={styles.questionsList}>
                  {GAME_DATA.questions.map((q, index) => (
                    <motion.div
                      key={q.id}
                      className={`${styles.questionCard} ${styles[q.status]}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.03 }}
                    >
                      <div className={styles.questionHeader}>
                        <span className={styles.qNumber}>{q.id}.</span>
                        <span className={styles.qText}>{q.text}</span>
                        <span className={styles.qStatus}>
                          {q.status === 'correct' ? '✓' : q.status === 'incorrect' ? '✗' : '~'}
                        </span>
                      </div>
                      <div className={styles.optionsGrid}>
                        {q.options.map((option, optIdx) => (
                          <div 
                            key={optIdx} 
                            className={`${styles.optionItem} 
                              ${optIdx === q.correctAnswer ? styles.correctOption : ''} 
                              ${optIdx === q.userAnswer && optIdx !== q.correctAnswer ? styles.wrongOption : ''}`}
                          >
                            <span className={styles.optionBullet}>
                              {optIdx === q.correctAnswer ? '✓' : optIdx === q.userAnswer ? '•' : '○'}
                            </span>
                            <span className={styles.optionText}>{option}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className={styles.sidebarColumn}>
                <div className={styles.announcementsCard}>
                  <span className={styles.promoTitle}>What's New</span>
                  {announcements.map((ann) => (
                    <div key={ann.id} className={styles.announcementItem}>
                      <span className={styles.annIcon}>{ann.icon}</span>
                      <span className={styles.annText}>{ann.text}</span>
                      <button 
                        className={styles.annAction}
                        onClick={() => dismissAnnouncement(ann.id)}
                      >
                        {ann.action}
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
