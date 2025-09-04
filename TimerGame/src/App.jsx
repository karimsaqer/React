import Header from './components/Header.jsx';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} TargetTime={1} />
        <TimerChallenge title={'not Easy'} TargetTime={5} />
        <TimerChallenge title={'Getting Tough'} TargetTime={10} />
        <TimerChallenge title={'Pro'} TargetTime={15} />
      </div>
    </>
  );
}

export default App;
