type ListProps = {
  courses: string[];
};

function List(props: ListProps) {
  return (
    <div id="main">
      <h3>Liste d'ingrédients à acheter</h3>
      <ul className="list">
        {props.courses.map((course, index) => (
          <li className="list__item" key={index}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
