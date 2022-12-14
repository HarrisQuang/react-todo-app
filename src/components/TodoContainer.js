import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

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
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
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
      // this.setState(({
      //   todos: this.state.todos.map(todo => {
      //     if (todo.id === id) {
      //       todo.completed = !todo.completed;
      //     }
      //     return todo;
      //   })
      // }))

      // this.setState(prevState => ({
      //   todos: prevState.todos.map(todo => {
      //     if (todo.id === id) {
      //       return {
      //         ...todo,
      //         completed: !todo.completed,
      //       };
      //     }
      //     return todo;
      //   })
      // }))

      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        }
      })
    }

    // delTodo = id => {
    //   console.log("deleted", id);
    // }

    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          }
          )
        ]
      }
      )
    }

    addTodoItem = title => {
      // console.log(title);
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }

    render() {
        return (
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo}/>
              </div>
            </div>
        )
    }
}

export default TodoContainer