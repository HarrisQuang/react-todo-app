import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"

class TodoContainer extends React.Component {
    // render() {
    //     return (
    //         <div>
    //             <h1>Hello from Create React App</h1>
    //             <p>I am in a React Component!</p>
    //         </div>
    //     )
    // }
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };

    // render() {
    //     return (
    //         <ul>
    //             {this.state.todos.map(todo => (
    //                 <li>{todo.title}</li>
    //             ))}
    //         </ul>
    //     )
    // }
    // handleChange = (id) => {
    //   console.log("clicked", id);
    // }
    handleChange = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      })
    }

    render() {
        return (
            <div>
                <Header />
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange}/>
            </div>
        )
    }
}

export default TodoContainer