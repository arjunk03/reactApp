function Hello({ person }) {
  //   const { name, msg } = props;
  return (
    <div>
      <h1>
        {person.msg} {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
