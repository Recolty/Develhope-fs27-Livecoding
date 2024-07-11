import { useEffect, useState } from "react";

export default function TaskTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({});

  function handleOpening() {
    setIsOpen(!isOpen);
  }

  function updateFormData(name, value) {
    setFormData((prev) => {
      prev[name] = value;

      return { ...prev };
    });
  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="task-tracker">
      <div className="tt-header">
        <h3>Task Tracker</h3>
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
            Set Time
            <input type="checkbox" style={{ marginLeft: "20px" }} />
          </label>
          <button>Save Task</button>
        </div>
      )}
    </div>
  );
}
