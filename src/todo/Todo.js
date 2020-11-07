import React, {Component} from 'react';

class Todo extends Component {

    state = {
        isEditing: false,
        task: this.props.task
    }

    deleteHandler = () => {
        this.props.deleteTodo(this.props.id);
    }

    editHandler = (evt) => {
        evt.preventDefault()
        this.props.editTodo(this.props.id, this.state.task);
        this.setState({isEditing: false})
    }

    toggleForm = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    onChangeHandler = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.editHandler}>
                        <input id="task"
                               onChange={this.onChangeHandler}
                               type="text"
                               placeholder="Add Todo"
                               name="task"
                               value={this.state.task} />
                        <button>Save</button>
                    </form>
                </div>
            );
        }else {
            result = (
                <div>
                    <li>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.deleteHandler}>Delete</button>
                </div>
            );
        }

        return (
            result
        );
    }
}

export default Todo;
