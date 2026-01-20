import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './StudentSummaryLayouts.module.css';

// Layout configurations
const LAYOUTS = [
  {
    id: 'summary-layout-1',
    name: 'Game Summary',
    description: 'Quiz performance summary with stats, review, and rewards',
    icon: '📊',
    path: '/summary-layout-1',
    status: 'available' as const,
  },
  {
    id: 'summary-layout-2',
    name: 'Centered Qbit',
    description: 'Qbit as the central hero with stats around',
    icon: '✨',
    path: '/summary-layout-2',
    status: 'available' as const,
  },
  {
    id: 'summary-layout-3',
    name: 'Analytics Dashboard',
    description: 'Performance trends and learning insights',
    icon: '📈',
    path: '/summary-layout-3',
    status: 'coming-soon' as const,
  },
];

export function StudentSummaryLayouts() {
  const navigate = useNavigate();

  const handleLayoutClick = (layout: typeof LAYOUTS[0]) => {
    if (layout.status === 'available') {
      navigate(layout.path);
    }
  };

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
          transition={{ delay: 0.2 }}
          whileHover={{ x: -4 }}
        >
          <span className={styles.backArrow}>←</span>
          Back to Home
        </motion.button>

        {/* Layout Cards */}
        <motion.div 
          className={styles.layoutGrid}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          {LAYOUTS.map((layout, index) => (
            <motion.div
              key={layout.id}
              className={`${styles.layoutCard} ${layout.status === 'coming-soon' ? styles.comingSoon : ''}`}
              onClick={() => handleLayoutClick(layout)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={layout.status === 'available' ? { scale: 1.02, y: -4 } : {}}
            >
              <div className={styles.cardIcon}>{layout.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{layout.name}</h3>
                <p className={styles.cardDescription}>{layout.description}</p>
              </div>
              {layout.status === 'available' ? (
                <span className={styles.viewButton}>View →</span>
              ) : (
                <span className={styles.comingSoonBadge}>Coming Soon</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
