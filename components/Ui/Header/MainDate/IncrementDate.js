import React from "react";
import ActualDate from "./ActualDate";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

export default function IncrementDate({
  date,
  type,
  typeOfFormat,
  iconSize,
  displayButtons,
  dateSize,
  padding,
}) {
  const switchNumber = (operation) => {
    // return operation === 'add'
    //   ? history.push({
    //       pathname: '/concerts',
    //       search: `${moment(date).add(1, type).format('DD-MM-YYYY')}`,
    //     })
    //   : history.push({
    //       pathname: '/concerts',
    //       search: `${moment(date)
    //         .subtract(1, type)
    //         .format('DD-MM-YYYY')}`,
    //     });
  };
  const getWidth = () => {
    switch (typeOfFormat) {
      case "dddd":
        return "19vw";
      case "ddd":
        return "8vw";
      case "DD":
        return "5vw";
      case "MMMM":
        return "20vw";
      case "MM":
        return "5vw";
      case "YYYY":
        return "9vw";

      default:
        return "18vw";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "3vw",
        textAlign: "center",
        width: getWidth(),
      }}
    >
      <IncrementButton
        switchNumber={switchNumber}
        displayButtons={displayButtons}
        iconSize={iconSize}
        padding={padding}
      />
      <ActualDate dateSize={dateSize} date={date} typeOfFormat={typeOfFormat} />
      <DecrementButton
        switchNumber={switchNumber}
        displayButtons={displayButtons}
        iconSize={iconSize}
        type={type}
        date={date}
        padding={padding}
      />
    </div>
  );
}
