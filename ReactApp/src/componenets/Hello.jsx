function Hello(props) {
  const { name, msg } = props;
  return (
    <div>
      <h1>
        {msg} {name}{" "}
      </h1>
    </div>
  );
}

export default Hello;
