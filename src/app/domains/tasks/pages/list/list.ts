import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../../../core/models/tasks';
import { TasksService } from '../../../../core/services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export default class List implements OnInit {
  tasks: Task[] = [{
    id: 0,
    text: 'Example',
    status: ''
  }]
  editingTaskId: number | null = null;
  editedText: string = '';

  private tasksService = inject(TasksService)

  ngOnInit(): void {
  }

  getTasks() {
    this.tasksService.getAll().subscribe({
      next: (data) => {
        this.tasks = data
      },
      error: () => { },
    })
  }

  startEditing(task: Task) {
    this.editingTaskId = task.id;
    this.editedText = task.text;
  }

  saveTask(task: Task) {
    const updated = { ...task, text: this.editedText };
    this.tasksService.update(task.id, updated).subscribe(() => {
      this.editingTaskId = null;
      this.getTasks();
    });
  }

  deleteTask(id: number) {
    this.tasksService.delete(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    });
  }
}
