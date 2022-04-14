import { useState } from "react";
import MainEnemyInfoArea from './MainEnemyInfoArea';
import EnemyInfoHandle from './EnemyInfoHandle';

function EnemyInfo(props) {
  const [open, setOpen] = useState(false);

  const style = {
    display: "flex",
    flexDirection: "row",

    position: "fixed",
    top: "30vh",
    right: open ? "0vh" : "-75vh",
    width: "80vh",
    height: "30vh",

    transitionProperty: "right",
    transitionDuration: "1s",

    backgroundColor: "brown",
    borderStyle: "solid",
    borderColor: "white",
  };

  const onClick = () => {
    console.log("enemy info  handle clicked");
    setOpen(!open);
  }

  return (
    <div style={style}>
      <EnemyInfoHandle onClick={onClick} />
      <MainEnemyInfoArea />
    </div>
  );
}

export default EnemyInfo;