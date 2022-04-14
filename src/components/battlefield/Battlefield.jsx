import EnemyBattlefield from './enemy-battlefield/EnemyBattlefield';
import FriendlyBattlefield from './friendly-battlefield/FriendlyBattlefield';

function Battlefield(props) {
  const style = {
    position: "absolute",
    top: "10vh",
    left: 0,
    right: 0,
    width: "80%",
    margin: "auto",
  };

  return <div style={style}>
    <EnemyBattlefield />
    <FriendlyBattlefield />
  </div>
}

export default Battlefield;