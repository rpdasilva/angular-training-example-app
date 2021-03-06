import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rio-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() tasksToDisplay: any[];
  @Output() onItemDeleted = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  completeTask(index) {
  }

  deleteTask(index) {
    this.onItemDeleted.emit(index);
  }

  getCompleteButtonText(task) {
    if (task.isComplete) {
      return 'Redo';
    }
    return 'Complete';
  }

}
