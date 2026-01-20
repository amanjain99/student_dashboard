import { JoinCodeInput } from '../JoinCodeInput';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const handleJoin = (code: string) => {
    console.log('Joining with code:', code);
    // In a real app, this would navigate to the activity
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Content - Join Code */}
          <div className={styles.mainColumn}>
            <JoinCodeInput 
              onJoin={handleJoin}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
