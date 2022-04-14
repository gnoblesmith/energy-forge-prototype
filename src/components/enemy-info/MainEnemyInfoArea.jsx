
function MainEnemyInfoArea(props) {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    
    height: "100%",
    width: "75vh",
  };

  return (<div style={style}>
    The enemy is doing well and/or poorly.
  </div>);
}

export default MainEnemyInfoArea;