import TaskItem from "./TaskItem";

function TaskList({

    tasks,

    onDelete,

    onEdit,

    onStatus

}) {

    if (tasks.length === 0) {

        return (

            <div className="alert alert-info">

                No tasks found.

            </div>

        );

    }

    return (

        <>

            {

                tasks.map(task => (

                    <TaskItem

                        key={task.id}

                        task={task}

                        onDelete={onDelete}

                        onEdit={onEdit}

                        onStatus={onStatus}

                    />

                ))

            }

        </>

    );

}

export default TaskList;