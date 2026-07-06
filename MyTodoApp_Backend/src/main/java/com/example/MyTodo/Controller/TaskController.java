package com.example.MyTodo.Controller;

import com.example.MyTodo.DTO.Request.CreateTaskRequest;
import com.example.MyTodo.DTO.Response.TaskResponse;
import com.example.MyTodo.Service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<TaskResponse> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public TaskResponse getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public TaskResponse createTask(
            @RequestBody CreateTaskRequest request) {

        return taskService.createTask(request);
    }

    @PutMapping("/{id}")
    public TaskResponse updateTask(
            @PathVariable Long id,
            @RequestBody CreateTaskRequest request) {

        return taskService.updateTask(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {

        taskService.deleteTask(id);
    }

    @PatchMapping("/{id}/status")
    public TaskResponse updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, Boolean> body) {

        return taskService.updateStatus(id, body.get("completed"));
    }

    @GetMapping("/search")
    public List<TaskResponse> searchTask(
            @RequestParam String keyword) {

        return taskService.searchByTitle(keyword);
    }

    @GetMapping("/status")
    public List<TaskResponse> filterStatus(
            @RequestParam boolean completed) {

        return taskService.filterByStatus(completed);
    }
}