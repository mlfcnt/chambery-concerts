import React from "react";
import { IconButton } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
export default function IncrementButton({
  switchNumber,
  displayButtons,
  iconSize,
  padding,
}) {
  return (
    <IconButton
      onClick={() => {
        switchNumber("add");
      }}
      style={{
        backgroundColor: "transparent",
        color: "#0000004d",
        visibility: !displayButtons && "hidden",
        padding: padding,
      }}
    >
      <ExpandLessIcon
        style={{ fontSize: iconSize }}
        className={"incrementBtn"}
      />
    </IconButton>
  );
}
