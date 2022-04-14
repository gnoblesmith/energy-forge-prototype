function WorkbenchHandle(props) {
  const { onClick } = props;
  const style = {
    width: "5vh",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textAlign: "center",
    borderStyle: "dotted",
  };

  return (
    <div style={style} onClick={onClick}>WORKBENCH</div>
  );
}

export default WorkbenchHandle;