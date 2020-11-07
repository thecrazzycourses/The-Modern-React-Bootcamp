import React, {Component} from 'react';
import uuid from 'uuid/dist/v4';

class NewTodoForm extends Component {

    state = {
        task: ""
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuid()});
        this.setState({task: ""})
    }

    onChangeHandler = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="task">Task</label>
                    <input id="task"
                           onChange={this.onChangeHandler}
                           type="text"
                           placeholder="Add Todo"
                           name="task"
                           value={this.state.task} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
