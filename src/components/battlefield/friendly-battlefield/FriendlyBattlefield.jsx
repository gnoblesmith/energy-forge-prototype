import Card from '../../card/Card';

function FriendlyBattlefield(props) {
  const style = {
    position: "absolute",
    top: "20vh",
    left: 0,
    right: 0,
    height: "15vh",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    background: "brown",
    borderStyle: "solid",
    borderColor: "white",
  };

  const cards = [1,2,3,4,5];

  return (<div style={style}>
    { cards.map((card, index) => <Card key={index} />)}
  </div>);
}

export default FriendlyBattlefield;