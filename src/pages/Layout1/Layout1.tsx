import { Link } from 'react-router-dom';
import { TopNav } from '../../components/TopNav';
import { HeroSection } from '../../components/HeroSection';
import { ActivitiesSection } from '../../components/ActivitiesSection';
import { QbitSidebar } from '../../components/QbitSidebar';
import { FloatingParticles } from '../../components/FloatingParticles';
import styles from './Layout1.module.css';

// Import Qbit avatar
import qbitAvatar from '../../../assets/sigma-boi.png';

// Mock user data
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  streak: 5,
};

export function Layout1() {
  const handleCustomize = () => {
    console.log('Opening Qbit customization...');
  };

  const handleShopClick = () => {
    console.log('Opening shop...');
  };

  const handleFriendsClick = () => {
    console.log('Opening friends - see classmates Qbits...');
  };

  return (
    <div className={styles.layout}>
      <FloatingParticles />
      
      {/* Back to Entry */}
      <Link to="/" className={styles.backLink}>
        ← Back to Layouts
      </Link>
      
      <div className={styles.appLayout}>
        <div className={styles.leftSection}>
          <TopNav userName={USER.name} />
          
          <main className={styles.main}>
            <HeroSection userName={USER.name} />
            <ActivitiesSection />
          </main>
        </div>

        <QbitSidebar
          avatarUrl={qbitAvatar}
          userName={USER.name}
          coinBalance={USER.coinBalance}
          level={USER.level}
          xp={USER.xp}
          xpToNextLevel={USER.xpToNextLevel}
          streak={USER.streak}
          onCustomize={handleCustomize}
          onShopClick={handleShopClick}
          onFriendsClick={handleFriendsClick}
        />
      </div>
    </div>
  );
}

