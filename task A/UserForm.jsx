import { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (name.trim() === "") {
      alert("Name is required");
      return;
    }

    if (Number(age) <= 18 || isNaN(age)) {
      alert("Age must be a number greater than 18");
      return;
    }

    // send data to parent
    addUser({ name, age });

    // reset form (twist requirement)
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Form</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}