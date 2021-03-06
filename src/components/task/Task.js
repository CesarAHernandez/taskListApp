import React from "react";

const Task = ({ task, deleteTask, editTask, index }) => {
  /**
   * Setting up the optios for the color of the background based on the priority color
   */
  const optionColors = {
    HIGH: "border-danger",
    MED: "border-warning",
    LOW: "border-success",
  };
  return (
    <div
      className={`card mb-3 border rounded ${optionColors[task.priority]}`}
      style={{ borderWidth: "2px" }}
    >
      <div className="card-body">
        <div className="row">
          <h3 className="col-md-9 col-12">
            {task.title} -{" "}
            <small>{new Date(task.dueDate).toDateString()}</small>
          </h3>
          <div className="btn-group col-md-3 col-6 ml-auto" role="group">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              <i className="fa fa-minus-circle"></i> Remove
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={() => editTask(task, index)}
            >
              <i className="fa fa-pencil"></i> Edit
            </button>
          </div>
        </div>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default Task;
