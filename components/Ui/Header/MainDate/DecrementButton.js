import React from "react";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function DecrementButton({
  switchNumber,
  displayButtons,
  iconSize,
  padding,
}) {
  return (
    <IconButton
      onClick={() => switchNumber("subtract")}
      style={{
        backgroundColor: "transparent",
        color: "#0000004d",
        visibility: !displayButtons && "hidden",
        padding: padding,
      }}
    >
      <ExpandMoreIcon
        style={{ fontSize: iconSize }}
        className={"incrementBtn"}
      />
    </IconButton>
  );
}
