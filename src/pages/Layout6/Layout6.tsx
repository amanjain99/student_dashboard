import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import styles from './Layout6.module.css';

// Import Qbit avatar
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock user data
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  streak: 5,
  rank: 'Scholar',
};

// Qbit conversation messages
const QBIT_MESSAGES = [
  { text: "Hey there, {name}! Ready to learn something awesome today? 🚀", type: 'greeting' },
  { text: "I've got some exciting activities lined up for you!", type: 'info' },
  { text: "Got a join code? Type it below and let's go! ✨", type: 'action' },
  { text: "Your streak is looking strong! Keep it up! 🔥", type: 'motivation' },
];

export function Layout6() {
  const [joinCode, setJoinCode] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [qbitMood, setQbitMood] = useState<'happy' | 'excited' | 'thinking'>('happy');

  // Cycle through Qbit messages
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuickActions(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle message cycling
  useEffect(() => {
    const cycleMessages = () => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % QBIT_MESSAGES.length);
        setIsTyping(false);
      }, 500);
    };

    const interval = setInterval(cycleMessages, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCode.trim()) {
      setQbitMood('excited');
      console.log('Joining:', joinCode);
      setTimeout(() => setQbitMood('happy'), 2000);
    }
  };

  const handleInputFocus = () => {
    setQbitMood('thinking');
  };

  const handleInputBlur = () => {
    setQbitMood('happy');
  };

  const currentMessage = QBIT_MESSAGES[currentMessageIndex].text.replace('{name}', USER.name);

  const quickActions = [
    { icon: '🛒', label: 'Shop', position: 'topLeft' },
    { icon: '👥', label: 'Friends', position: 'topRight' },
    { icon: '🎨', label: 'Customize', position: 'bottomLeft' },
    { icon: '📊', label: 'Progress', position: 'bottomRight' },
  ];

  return (
    <div className={styles.layout}>
      {/* Premium Background */}
      <div className={styles.bgLayer}>
        <div className={styles.bgGradient1} />
        <div className={styles.bgGradient2} />
        <div className={styles.bgGradient3} />
        <div className={styles.bgNoise} />
        {/* Animated orbs */}
        {[...Array(25)].map((_, i) => (
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

      {/* Main Content - Qbit Centric */}
      <main className={styles.main}>
        {/* Qbit Central Hub */}
        <motion.section 
          className={styles.qbitHub}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Qbit Character - Large & Central */}
          <div className={styles.qbitStage}>
            {/* Background Glow */}
            <motion.div 
              className={styles.qbitGlowOuter}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className={styles.qbitGlowInner}
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Rotating Ring */}
            <motion.div 
              className={styles.qbitRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className={styles.qbitRingInner}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Quick Action Buttons - Positioned Around Qbit */}
            <AnimatePresence>
              {showQuickActions && quickActions.map((action, index) => (
                <motion.button
                  key={action.label}
                  className={`${styles.quickActionBtn} ${styles[`quickAction${action.position.charAt(0).toUpperCase() + action.position.slice(1)}`]}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.quickActionIcon}>{action.icon}</span>
                  <span className={styles.quickActionLabel}>{action.label}</span>
                </motion.button>
              ))}
            </AnimatePresence>

            {/* The Qbit Avatar */}
            <motion.div 
              className={`${styles.qbitContainer} ${styles[`qbit${qbitMood.charAt(0).toUpperCase() + qbitMood.slice(1)}`]}`}
              animate={{ 
                y: qbitMood === 'excited' ? [0, -15, 0, -10, 0] : [0, -10, 0],
                rotate: qbitMood === 'excited' ? [0, -3, 3, -2, 0] : 0,
              }}
              transition={{ 
                y: { duration: qbitMood === 'excited' ? 0.6 : 4, repeat: qbitMood === 'excited' ? 0 : Infinity, ease: 'easeInOut' },
                rotate: { duration: 0.5 },
              }}
            >
              <img
                src={qbitAvatar}
                alt="Qbit - Your AI Companion"
                className={styles.qbitImage}
              />
              
              {/* Mood Indicator */}
              <motion.div 
                className={styles.moodIndicator}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {qbitMood === 'happy' && '😊'}
                {qbitMood === 'excited' && '🤩'}
                {qbitMood === 'thinking' && '🤔'}
              </motion.div>
            </motion.div>
          </div>

          {/* Chat Bubble / Message Area */}
          <motion.div 
            className={styles.chatBubbleContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.chatBubble}>
              <div className={styles.chatBubbleArrow} />
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMessageIndex}
                  className={styles.chatMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {isTyping ? (
                    <span className={styles.typingDots}>
                      <span>.</span><span>.</span><span>.</span>
                    </span>
                  ) : currentMessage}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* User Rank Badge */}
            <motion.div 
              className={styles.rankBadgeFloat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className={styles.rankIcon}>⚔️</span>
              <span className={styles.rankText}>{USER.rank}</span>
            </motion.div>
          </motion.div>

          {/* Join Code Input - Conversational Style */}
          <motion.form 
            className={styles.joinForm}
            onSubmit={handleJoin}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.joinInputWrapper}>
              <span className={styles.joinPrefix}>🎯</span>
              <input
                type="text"
                className={styles.joinInput}
                placeholder="Enter activity code..."
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <motion.button 
                type="submit" 
                className={styles.joinBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!joinCode.trim()}
              >
                Join
                <span className={styles.joinBtnArrow}>→</span>
              </motion.button>
            </div>
          </motion.form>
        </motion.section>

        {/* Activities Section - Below Qbit */}
        <motion.section 
          className={styles.activitiesSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Activities</h2>
            <p className={styles.sectionSubtitle}>Continue where you left off</p>
          </div>
          <ActivitiesSection />
        </motion.section>
      </main>
    </div>
  );
}

