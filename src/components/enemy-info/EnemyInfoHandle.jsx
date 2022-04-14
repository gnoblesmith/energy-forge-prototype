function EnemyInfoHandle(props) {
  const { onClick } = props;
  const style = {
    width: "5vh",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    transform: "rotate(180deg)",
    textAlign: "center",
    borderStyle: "dotted",
  };

  return (
    <div style={style} onClick={onClick}>ENEMY</div>
  );
}

export default EnemyInfoHandle;