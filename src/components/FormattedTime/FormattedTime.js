import styles from './FormattedTime.module.scss';

const FormattedTime = props => {

  const formatTime = value => {
    const minutes = ("0" + Math.floor(value / 60) % 60).slice(-2); // 60000
    const seconds = ("0" + Math.floor(value % 60)).slice(-2); // 1000
    // const thousandths = ("00" + Math.floor(millseconds % 1000)).slice(-3);

    return `${minutes} : ${seconds}`;
  };

  return (
    <h1 className={styles.formatTimer}>
      {formatTime(props.time)}
    </h1>
  );
}

export default FormattedTime;
