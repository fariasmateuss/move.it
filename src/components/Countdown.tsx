import styles from '../styles/Components/Countdown.module.css';

export function Countdown(): JSX.Element {
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <button type="button" className={styles.countdownButton}>
        Start
      </button>
    </div>
  );
}
