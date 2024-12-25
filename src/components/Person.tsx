// Object Props type
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
export const Person = (props: PersonProps) => {
  return (
    <div>
      <h4>
        {props.name.first} {props.name.last}
      </h4>
    </div>
  );
};
