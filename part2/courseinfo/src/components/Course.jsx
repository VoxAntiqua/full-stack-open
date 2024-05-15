const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) =>
  parts.map((part) => <Part part={part} key={part.id} />);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
);

export default Course;
