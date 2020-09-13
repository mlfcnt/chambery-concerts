import React from "react";
import IncrementDate from "./IncrementDate";

export default function MainDate({ date }) {
  const iconSize = 40;
  const spaceBetween = "5vw";
  const dateSize = "5vw";
  const arrowPadding = 0;
  return (
    <div
      className={"mainDate"}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem",
      }}
    >
      <div style={{ marginRight: spaceBetween, marginBottom: "1rem" }}>
        <IncrementDate
          date={date}
          type={"d"}
          typeOfFormat={"ccc"}
          iconSize={iconSize}
          displayButtons={false}
          dateSize={dateSize}
          padding={arrowPadding}
        />
      </div>
      <div style={{ marginRight: spaceBetween }}>
        <IncrementDate
          date={date}
          type={"d"}
          typeOfFormat={"dd"}
          iconSize={iconSize}
          displayButtons
          dateSize={dateSize}
          padding={arrowPadding}
        />
      </div>
      <div style={{ marginRight: spaceBetween }}>
        <IncrementDate
          date={date}
          type={"M"}
          typeOfFormat={"LL"}
          iconSize={iconSize}
          displayButtons
          dateSize={dateSize}
          padding={arrowPadding}
        />
      </div>
      <IncrementDate
        date={date}
        type={"y"}
        typeOfFormat={"yyyy"}
        iconSize={iconSize}
        displayButtons
        dateSize={dateSize}
        padding={arrowPadding}
      />
    </div>
  );
}
