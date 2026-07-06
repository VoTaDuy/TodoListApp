import { useEffect, useState } from "react";

function TaskForm({

    onCreate,

    onUpdate,

    selectedTask

}) {

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    useEffect(() => {

        if (selectedTask) {

            setTitle(selectedTask.title);

            setDescription(selectedTask.description);

        }

        else {

            setTitle("");

            setDescription("");

        }

    }, [selectedTask]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title.trim()) {

            alert("Title is required");

            return;

        }

        const task = {

            id: selectedTask?.id,

            title,

            description

        };

        if (selectedTask) {

            onUpdate(task);

        }

        else {

            onCreate(task);

        }

        setTitle("");

        setDescription("");

    };

    return (

        <>

            <h4 className="mb-4">

                {

                    selectedTask

                        ? "Update Task"

                        : "Create New Task"

                }

            </h4>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Title

                    </label>

                    <input
                        className="form-control"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Description

                    </label>

                    <textarea
                        rows="4"
                        className="form-control"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />

                </div>

                <button className="btn btn-success">

                    {

                        selectedTask

                            ? "Update"

                            : "Create"

                    }

                </button>

            </form>

        </>

    );

}

export default TaskForm;