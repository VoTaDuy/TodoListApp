package com.example.MyTodo.DTO.Request;

public class UpdateStatusRequest {

    private boolean completed;

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
