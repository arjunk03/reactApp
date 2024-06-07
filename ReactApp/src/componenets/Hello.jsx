function Hello(props) {
  //   const { name, msg } = props;
  return (
    <div>
      <h1>
        {props.person.msg} {props.person.name}
        {props.person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
