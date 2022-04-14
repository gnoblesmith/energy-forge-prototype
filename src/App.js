import Workbench from './components/workbench/Workbench';
import EnemyInfo from './components/enemy-info/EnemyInfo';
import Hand from './components/hand/Hand';
import Battlefield from './components/battlefield/Battlefield';

function App() {
  const style = {
    background: "black",
    color: "white",
    width: "100%",
    height: "100vh",
    userSelect: "none",
  };
  
  return (<div style={style}>
    <Battlefield />
    <Workbench />
    <EnemyInfo />
    <Hand />
  </div>);
}

export default App;
