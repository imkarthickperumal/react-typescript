// Basics Props Types

type GreetProps = {
  name: string;
  yearsCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `Hi this is React ${props.name} course ${props.yearsCount}`
          : "Welcome to React Js Course"}
      </h3>
    </div>
  );
};
