import React from "react";

export const getHighlightedText = (filtredValue: string, text: string) => {
  const parts = filtredValue.split(new RegExp(`(${text})`, "gi"));

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === text.toLowerCase() ? <mark>{part}</mark> : part}
    </React.Fragment>
  ));
};
