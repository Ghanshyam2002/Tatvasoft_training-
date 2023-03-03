// task 2
// const Title = (props) => {
//     return <h1>Hello {props.name}</h1>
// }

// this is for task 3:

const Title = (props) => {
  // return <h1>{props.title}</h1>
  const { name, title, Desctription } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{Desctription}</h2>
    </div>
  );
};
export default Title;
