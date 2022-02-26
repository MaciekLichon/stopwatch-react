import Container from './components/Container/Container'
import Options from './components/Options/Options'
import FormattedTime from './components/FormattedTime/FormattedTime'
import Button from './components/Button/Button'
import {useState, useEffect} from 'react';


const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

  const startTimer = () => {
    console.log('start');
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1000))
  };

  const stopTimer = () => {
    clearInterval(timer);
    console.log('stop');
  };

  const resetTimer = () => {
    console.log('reset');
    setTime(0);
    clearInterval(timer);
  };

  const allActions = {
    startTimer: startTimer,
    stopTimer: stopTimer,
    resetTimer: resetTimer
  };

  return (
    <Container>
      <FormattedTime time={time}/>
      <Options actions={allActions} />
    </Container>
  );
};

export default App;
