import { useEffect, useState } from "react";

import "./App.css";

import taskService from "./services/taskService";

import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Pagination from "./components/Pagination";

function App() {

    const [tasks, setTasks] = useState([]);

    const [selectedTask, setSelectedTask] = useState(null);

    const [filter, setFilter] = useState("ALL");

    const [currentPage, setCurrentPage] = useState(1);

    const tasksPerPage = 5;

    const loadTasks = async () => {

        try {

            const response = await taskService.getAllTasks();

            setTasks(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadTasks();

    }, []);

    const handleCreate = async (task) => {

        await taskService.createTask(task);

        loadTasks();

    };

    const handleUpdate = async (task) => {

        await taskService.updateTask(task.id, task);

        setSelectedTask(null);

        loadTasks();

    };

    const handleDelete = async (id) => {

        if (window.confirm("Delete this task?")) {

            await taskService.deleteTask(id);

            loadTasks();

        }

    };

    const handleStatus = async (id, completed) => {

        await taskService.updateStatus(id, completed);

        loadTasks();

    };

    const handleSearch = async (keyword) => {

        setCurrentPage(1);

        if (keyword === "") {

            loadTasks();

            return;

        }

        const response = await taskService.searchTask(keyword);

        setTasks(response.data);

    };

    const filteredTasks = tasks.filter(task => {

        if (filter === "COMPLETED")
            return task.completed;

        if (filter === "PENDING")
            return !task.completed;

        return true;

    });

    const indexOfLastTask = currentPage * tasksPerPage;

    const indexOfFirstTask = indexOfLastTask - tasksPerPage;

    const currentTasks = filteredTasks.slice(
        indexOfFirstTask,
        indexOfLastTask
    );

    const totalPages = Math.ceil(
        filteredTasks.length / tasksPerPage
    );

    return (

        <div className="container mt-5">

            <div className="header">

                <h1>📝 Todo Manager</h1>

                <p>

                    Organize your daily tasks efficiently

                </p>

            </div>

            <div className="search-box">

                <SearchBar

                    onSearch={handleSearch}

                    filter={filter}

                    setFilter={setFilter}

                    setCurrentPage={setCurrentPage}

                />

            </div>

            <div className="form-card">

                <TaskForm

                    onCreate={handleCreate}

                    onUpdate={handleUpdate}

                    selectedTask={selectedTask}

                />

            </div>

            <TaskList

                tasks={currentTasks}

                onDelete={handleDelete}

                onEdit={setSelectedTask}

                onStatus={handleStatus}

            />

            <Pagination

                currentPage={currentPage}

                totalPages={totalPages}

                setCurrentPage={setCurrentPage}

            />

        </div>

    );

}

export default App;