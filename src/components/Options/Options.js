import styles from './Options.module.scss';
import Button from '../Button/Button';

const Options = props => {

  const {startTimer, stopTimer, resetTimer} = props.actions;

  return (
    <div className={styles.options}>
      <Button action={startTimer}>START</Button>
      <Button action={stopTimer}>STOP</Button>
      <Button action={resetTimer}>RESET</Button>
    </div>
  );
}

export default Options;
