function TaskItem({

    task,

    onDelete,

    onEdit,

    onStatus

}) {

    return (

        <div className="task-card">

            <div className="d-flex justify-content-between">

                <div>

                    <div className="d-flex align-items-center mb-3">

                        <input

                            type="checkbox"

                            className="form-check-input me-3"

                            style={{
                                width: "20px",
                                height: "20px"
                            }}

                            checked={task.completed}

                            onChange={(e) =>
                                onStatus(
                                    task.id,
                                    e.target.checked
                                )
                            }

                        />

                        <h5 className="mb-0 fw-bold">

                            {task.title}

                        </h5>

                    </div>

                    <p className="text-secondary">

                        {task.description}

                    </p>

                    <span
                        className={`badge ${
                            task.completed
                                ? "bg-success"
                                : "bg-warning text-dark"
                        }`}
                    >

                        {

                            task.completed

                                ? "Completed"

                                : "Pending"

                        }

                    </span>

                    <div className="mt-3">

                        <small className="text-muted">

                            📅 Created:

                            {" "}

                            {

                                new Date(task.createdAt)

                                    .toLocaleString()

                            }

                        </small>

                        <br />

                        <small className="text-muted">

                            🕒 Updated:

                            {" "}

                            {

                                new Date(task.updatedAt)

                                    .toLocaleString()

                            }

                        </small>

                    </div>

                </div>

                <div>

                    <button

                        className="btn btn-outline-primary me-2"

                        onClick={() =>
                            onEdit(task)
                        }

                    >

                        ✏ Edit

                    </button>

                    <button

                        className="btn btn-outline-danger"

                        onClick={() =>
                            onDelete(task.id)
                        }

                    >

                        🗑 Delete

                    </button>

                </div>

            </div>

        </div>

    );

}

export default TaskItem;