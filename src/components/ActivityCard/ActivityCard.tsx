import { motion } from 'framer-motion';
import styles from './ActivityCard.module.css';

export interface Activity {
  id: string;
  title: string;
  author: string;
  questionCount: number;
  accuracy?: number;
  questionsLeft?: number;
  isAssigned: boolean;
  color: 'blue' | 'teal' | 'yellow' | 'red' | 'purple' | 'pink';
}

interface ActivityCardProps {
  activity: Activity;
}

const colorMap = {
  blue: 'var(--color-card-blue)',
  teal: 'var(--color-card-teal)',
  yellow: 'var(--color-card-yellow)',
  red: 'var(--color-card-red)',
  purple: 'var(--color-card-purple)',
  pink: 'var(--color-card-pink)',
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

export function ActivityCard({ activity }: ActivityCardProps) {
  const hasProgress = activity.accuracy !== undefined || activity.questionsLeft !== undefined;
  
  return (
    <motion.div
      className={styles.card}
      style={{ '--card-color': colorMap[activity.color] } as React.CSSProperties}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card Shine Effect */}
      <div className={styles.shine} />
      
      {/* Assigned Badge */}
      {activity.isAssigned && (
        <div className={styles.badge}>
          <AssignedIcon />
          <span>Assigned</span>
        </div>
      )}

      {/* Wayground Logo */}
      <div className={styles.logo}>
        <WaygroundIcon />
      </div>

      {/* Question Count */}
      <div className={styles.questionCount}>
        {activity.questionCount} Qs
      </div>

      {/* Title */}
      <h3 className={styles.title}>{activity.title}</h3>

      {/* Author */}
      {activity.author && (
        <p className={styles.author}>By: {activity.author}</p>
      )}

      {/* Progress Bar */}
      {hasProgress && (
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ 
                width: activity.accuracy 
                  ? `${activity.accuracy}%` 
                  : `${((activity.questionCount - (activity.questionsLeft || 0)) / activity.questionCount) * 100}%`
              }}
            />
          </div>
          <span className={styles.progressText}>
            {activity.accuracy !== undefined 
              ? `${activity.accuracy}% accuracy`
              : `${activity.questionsLeft} questions left`
            }
          </span>
        </div>
      )}
    </motion.div>
  );
}

function WaygroundIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
      <path 
        d="M8 14L16 34L24 22L32 34L40 14" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AssignedIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 14l2 2 4-4"/>
    </svg>
  );
}

