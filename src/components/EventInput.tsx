
type EventInputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EventInput = (props: EventInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(event); // Invoke the parent's handleChange function
  };

  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
