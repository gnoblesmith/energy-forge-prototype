import { useState } from "react";
import MainWorkbenchArea from './MainWorkbenchArea';
import WorkbenchHandle from './WorkbenchHandle';

function Workbench(props) {
  const [open, setOpen] = useState(false);

  const style = {
    display: "flex",
    flexDirection: "row",

    position: "fixed",
    top: "30vh",
    left: open ? "0vh" : "-75vh",
    width: "80vh",
    height: "30vh",

    transitionProperty: "left",
    transitionDuration: "1s",

    backgroundColor: "brown",
    borderStyle: "solid",
    borderColor: "white",
  };

  const onClick = () => {
    console.log("workbench handle clicked");
    setOpen(!open);
  }

  return (
    <div style={style}>
      <MainWorkbenchArea />
      <WorkbenchHandle onClick={onClick} />
    </div>
  );
}

export default Workbench;