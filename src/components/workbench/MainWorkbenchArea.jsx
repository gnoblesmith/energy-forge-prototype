import Card from "../card/Card";

function WorkMainWorkBenchArea(props) {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    height: "100%",
    width: "75vh",
  };
  
  const cards = [1,2,3,4,5];

  return (<div style={style}>
    { cards.map((card, index) => <Card key={index} />)}
  </div>);
}

export default WorkMainWorkBenchArea;