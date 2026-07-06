import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

const taskService = {

    getAllTasks() {
        return axios.get(API_URL);
    },

    getTaskById(id) {
        return axios.get(`${API_URL}/${id}`);
    },

    createTask(task) {
        return axios.post(API_URL, task);
    },

    updateTask(id, task) {
        return axios.put(`${API_URL}/${id}`, task);
    },

    deleteTask(id) {
        return axios.delete(`${API_URL}/${id}`);
    },

    updateStatus(id, completed) {
        return axios.patch(`${API_URL}/${id}/status`, {
            completed
        });
    },

    searchTask(keyword) {
        return axios.get(`${API_URL}/search?keyword=${keyword}`);
    }

};

export default taskService;