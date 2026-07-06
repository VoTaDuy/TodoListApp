package com.example.MyTodo.Repository;

import com.example.MyTodo.Entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Tasks, Long> {

    List<Tasks> findByTitleContainingIgnoreCase(String keyword);

    List<Tasks> findByIsCompleted(boolean completed);

}