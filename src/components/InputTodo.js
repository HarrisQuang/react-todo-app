import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ''
    }

    onChange = e => {
        // console.log("hello");
        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.title);
        // this.props.addTodoProps(this.state.title);
        // this.setState({
        //     title: ""
        // })
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title.trim());
            this.setState({
                title: ""
            })
        } else {
            alert("Please write item")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Todo..." value={this.state.title} 
                name="title" onChange={this.onChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo
