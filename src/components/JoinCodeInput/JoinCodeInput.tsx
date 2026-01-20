import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './JoinCodeInput.module.css';

interface JoinCodeInputProps {
  userName: string;
  onJoin?: (code: string) => void;
}

export function JoinCodeInput({ userName, onJoin }: JoinCodeInputProps) {
  const [code, setCode] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onJoin?.(code.trim());
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Join Code Form - Centered */}
      <motion.form 
        className={styles.form} 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={`${styles.inputWrapper} ${isFocused ? styles.focused : ''}`}>
          <div className={styles.inputContainer}>
            {!code && !isFocused && (
              <span className={styles.placeholder}>Enter a join code</span>
            )}
            <input
              type="text"
              className={styles.input}
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={10}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <motion.button
            type="submit"
            className={styles.joinBtn}
            disabled={!code.trim()}
            whileHover={{ scale: code.trim() ? 1.02 : 1 }}
            whileTap={{ scale: code.trim() ? 0.98 : 1 }}
          >
            <span className={styles.joinBtnInner}>Join</span>
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
}
