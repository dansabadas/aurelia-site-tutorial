System.register(['./todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_1;
    var App;
    return {
        setters:[
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.heading = "Todos";
                    this.todos = [];
                    this.todoDescription = '';
                }
                App.prototype.addTodo = function () {
                    if (this.todoDescription) {
                        this.todos.push(new todo_1.Todo(this.todoDescription));
                        this.todoDescription = '';
                    }
                };
                App.prototype.removeTodo = function (todo) {
                    var index = this.todos.indexOf(todo);
                    if (index !== -1) {
                        this.todos.splice(index, 1);
                    }
                };
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map