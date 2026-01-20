import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { QbitSidebar } from './components/QbitSidebar';
import { FloatingParticles } from './components/FloatingParticles';
import './App.css';

// Import Qbit avatar
import qbitAvatar from '../assets/sigma-boi.png';

// Mock user data - in a real app this would come from auth/API
const USER = {
  name: 'Aman',
  coinBalance: 2998,
  streak: 5,
};

function App() {
  const handleShopClick = () => {
    console.log('Opening shop...');
  };

  const handleFriendsClick = () => {
    console.log('Opening friends - see classmates Qbits...');
  };

  return (
    <div className="app">
      <FloatingParticles />
      <div className="app-layout">
        <div className="left-section">
          <TopNav />
          
          <main className="main">
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

export default App;
