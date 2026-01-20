import { motion } from 'framer-motion';
import { ActivityCard, type Activity } from '../ActivityCard';
import styles from './ActivitiesSection.module.css';

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Aman Testing',
    author: '',
    questionCount: 25,
    questionsLeft: 19,
    isAssigned: false,
    color: 'blue',
  },
  {
    id: '2',
    title: 'All Qts',
    author: 'Aman Jain',
    questionCount: 20,
    accuracy: 10,
    isAssigned: true,
    color: 'teal',
  },
  {
    id: '3',
    title: 'fib new test',
    author: '',
    questionCount: 2,
    accuracy: 50,
    isAssigned: false,
    color: 'yellow',
  },
  {
    id: '4',
    title: 'Aman Testing',
    author: 'Aman Jain',
    questionCount: 25,
    accuracy: 57,
    isAssigned: true,
    color: 'red',
  },
  {
    id: '5',
    title: 'fib testing',
    author: 'Aman Jain',
    questionCount: 2,
    accuracy: 50,
    isAssigned: true,
    color: 'purple',
  },
  {
    id: '6',
    title: 'Math Fundamentals',
    author: 'Sarah Chen',
    questionCount: 15,
    accuracy: 85,
    isAssigned: true,
    color: 'pink',
  },
];

export function ActivitiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={styles.title}>Assigned activities</h2>
          <motion.a 
            href="#activities" 
            className={styles.seeAll}
            whileHover={{ x: 4 }}
          >
            See all →
          </motion.a>
        </motion.div>

        <div className={styles.cardsContainer}>
          <motion.div 
            className={styles.cards}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Earn more coins card */}
            <motion.div 
              className={styles.coinsCard}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.coinsTitle}>Earn more coins!</span>
              <div className={styles.coinsBag}>
                <CoinsBagIcon />
              </div>
              <motion.a 
                href="#reattempt" 
                className={styles.reattemptBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reattempt now →
              </motion.a>
            </motion.div>

            {/* Activity Cards */}
            {MOCK_ACTIVITIES.map((activity) => (
              <ActivityCard 
                key={activity.id} 
                activity={activity}
              />
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button 
            className={styles.scrollBtn}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function CoinsBagIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
      {/* Bag */}
      <ellipse cx="50" cy="70" rx="35" ry="25" fill="#B8860B"/>
      <ellipse cx="50" cy="65" rx="30" ry="20" fill="#DAA520"/>
      <path d="M35 50 Q50 35 65 50" stroke="#B8860B" strokeWidth="8" strokeLinecap="round" fill="none"/>
      
      {/* Coins */}
      <circle cx="35" cy="55" r="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2"/>
      <circle cx="55" cy="50" r="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2"/>
      <circle cx="65" cy="60" r="12" fill="#FFD700" stroke="#B8860B" strokeWidth="2"/>
      <circle cx="45" cy="65" r="10" fill="#FFD700" stroke="#B8860B" strokeWidth="2"/>
      
      {/* Sparkles */}
      <circle cx="25" cy="40" r="3" fill="#FFD700"/>
      <circle cx="75" cy="45" r="2" fill="#FFD700"/>
      <circle cx="80" cy="35" r="2" fill="#FFD700"/>
    </svg>
  );
}

