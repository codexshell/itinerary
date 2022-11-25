import ListItem from "../ListItem";

export default function List({ initialTasks, ...props }) {
  return (
    <section style={{ marginTop: "1em" }}>
      {initialTasks.map((location) => (
        <ListItem {...props} key={location.id} location={location} />
      ))}
    </section>
  );
}
