import "./index.css";
import AddLocation from "../AddLocation";
import List from "../List";
import { initialTasks } from "./data.js";
import { useState } from "react";

export default function App() {
  const [locations, setLocations] = useState(initialTasks);

  let nextId = 3;

  function handleAddLocation(location) {
    const nextList = [
      ...locations,
      {
        id: nextId++,
        text: location,
        done: false,
      },
    ];
    setLocations(nextList);
  }

  function handleCheckedChange(id) {
    const nextList = locations.map((location) => {
      if (location.id === id) {
        return {
          ...location,
          done: !location.done,
        };
      } else {
        return location;
      }
    });

    setLocations(nextList);
  }

  function handleEdit(location) {
    const id = location.id;
    const nextLocations = locations.map((loc) => {
      if (loc.id === id) {
        return {
          ...location,
        };
      } else {
        return loc;
      }
    });

    setLocations(nextLocations);
  }

  function handleDelete(id) {
    const nextLocations = locations.filter((location) => location.id !== id);
    setLocations(nextLocations);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "1.5rem" }}>Prague itinerary</h1>
      <AddLocation onAddLocation={handleAddLocation} />
      <List
        initialTasks={locations}
        onCheckedChange={handleCheckedChange}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
