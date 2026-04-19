import { useState } from "react";

export default function TodoApp() {
  // State for input, tasks, and error message
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Validate input
  const isValid = task.trim().length >= 3;

  const handleAddTask = () => {
    const trimmed = task.trim();

    if (trimmed.length === 0) {
      setError("Task cannot be empty");
      return;
    }

    if (trimmed.length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }

    setTasks([...tasks, trimmed]);
    setTask("");
    setError("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Smart To-Do List</h1>

      {/* Input + Button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
          className="border p-2 flex-1 rounded"
          placeholder="Enter a task"
        />

        <button
          onClick={handleAddTask}
          disabled={!isValid}
          className={`px-4 py-2 rounded text-white ${
            isValid ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          Add
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Task Count */}
      <p className="mt-4">Total Tasks: {tasks.length}</p>

      {/* Task List */}
      <ul className="mt-2 space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{t}</span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
