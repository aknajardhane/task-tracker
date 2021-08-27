import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      
      <form className="add-form" onSubmit={onSubmit}>
        <div className="from-control">
          <label className="form-control-label">Task</label>
          <input className="form-control-input"
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="from-control">
          <label className="form-control-label" >Day and Time </label>
          <input className="form-control-input"
            type="text"
            placeholder="Add Day and Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="from-control form-control-check">
          <label className="form-control-label">Set Reminder</label>
          <input className="form-control-input"
            type="checkbox"
            checked={reminder}
            placeholder="Set Reminder"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
