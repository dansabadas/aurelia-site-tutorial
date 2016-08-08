import {Todo} from './todo';

export class App {
    heading: string;
    todoDescription: string;
    todos: Array<Todo>;
    router: any;

  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  configureRouter(config: any, router: any){
    this.router = router;
    config.title = "the this";
    config.map([
      { route: '', moduleId: 'events' }
    ]);
  }
}