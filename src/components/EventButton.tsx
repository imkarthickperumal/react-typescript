import React from "react";

type EventButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const EventButton = (props: EventButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click!</button>
    </div>
  );
};
