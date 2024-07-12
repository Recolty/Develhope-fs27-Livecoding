import { useEffect, useState } from "react";

const defaultFormData = () => {
  return { name: "", date: "", reminder: false };
};

export default function TaskTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState(defaultFormData());

  function handleOpening() {
    setIsOpen(!isOpen);
  }

  function updateFormData(name, value) {
    setFormData((prev) => {
      prev[name] = value;

      return { ...prev };
    });
  }

  function saveTask() {
    setTasks([...tasks, { ...formData }]);
    setFormData(defaultFormData());
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="task-tracker">
      <div className="tt-header">
        <h2>Task Tracker</h2>
        <button
          className={`${isOpen ? "close" : "open"}`}
          onClick={handleOpening}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      {isOpen && (
        <div className="tt-form">
          <h6 className="tt-title">Task</h6>
          <input
            type="text"
            value={formData.name || ""}
            name="name"
            onChange={(e) => {
              updateFormData(e.target.name, e.target.value);
            }}
          />
          <h6 className="tt-title">Date & Time</h6>
          <input
            type="datetime-local"
            value={formData.date || ""}
            name="date"
            onChange={(e) => {
              updateFormData(e.target.name, e.target.value);
            }}
          />
          <label className="tt-title" style={{ display: "flex" }}>
            {" "}
            Reminder
            <input
              type="checkbox"
              style={{ marginLeft: "20px" }}
              name="reminder"
              onChange={(e) => {
                updateFormData(e.target.name, e.target.checked);
              }}
            />
          </label>
          <button onClick={saveTask}>Save Task</button>
        </div>
      )}
      <div className="tt-card">
        {tasks.map((task, i) => (
          <div key={i} className="tt-container">
            {task.reminder && <div className="tt-bar"></div>}
            <div className="tt-info">
              <div className="tt-task-title">
                <p>{task.name}</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FF271B"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                    stroke="#FF271B"
                    stroke-width="1"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div className="tt-task-date">
                <p>{task.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
