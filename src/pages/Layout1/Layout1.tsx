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
  streak: 5,
};

export function Layout1() {
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
          <TopNav />
          
          <main className={styles.main}>
            <HeroSection />
            <ActivitiesSection />
          </main>
        </div>

        <QbitSidebar
          avatarUrl={qbitAvatar}
          userName={USER.name}
          coinBalance={USER.coinBalance}
          streak={USER.streak}
          onShopClick={handleShopClick}
          onFriendsClick={handleFriendsClick}
        />
      </div>
    </div>
  );
}

