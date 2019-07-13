import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from '../template/page-header';
import TodoForm from './todo-form'
import TodoList from './todo-list';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(response => 
            this.setState({...this.state, description: '', list: response.data}));
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, {description}).then(response => this.refresh());
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(response => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove} />    
            </div>
        )
    }
}