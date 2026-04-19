import { useState } from "react";
import UserForm from "./UserForm";

export default function App() {
  const [users, setUsers] = useState([]);

  // function passed to child
  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List App</h2>

      {/* child component */}
      <UserForm addUser={addUser} />

      <hr />

      <h3>Submitted Users</h3>

      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        users.map((user, index) => (
          <div key={index}>
            <p>
              {user.name} - {user.age}
            </p>
          </div>
        ))
      )}
    </div>
  );
}