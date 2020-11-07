import React, {Component} from 'react';
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

class TodoList extends Component {

    state = {
        todos: []
    }

    createTodo = (todo) => {
        this.setState({todos: [...this.state.todos, todo]});
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    editTodo = (id, editedTodo) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: editedTodo};
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo key={todo.id}
                         id={todo.id}
                         task={todo.task}
                         editTodo={this.editTodo}
                         deleteTodo={this.deleteTodo}/>
        })
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    <NewTodoForm createTodo={this.createTodo}/>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;
