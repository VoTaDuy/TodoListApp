package com.example.MyTodo.Service;

import com.example.MyTodo.DTO.Request.CreateTaskRequest;
import com.example.MyTodo.DTO.Response.TaskResponse;

import java.util.List;

public interface TaskService {

    List<TaskResponse> getAllTasks();

    TaskResponse getTaskById(Long id);

    TaskResponse createTask(CreateTaskRequest request);

    TaskResponse updateTask(Long id, CreateTaskRequest request);

    void deleteTask(Long id);

    TaskResponse updateStatus(Long id, boolean completed);

    List<TaskResponse> searchByTitle(String keyword);

    List<TaskResponse> filterByStatus(boolean completed);

}