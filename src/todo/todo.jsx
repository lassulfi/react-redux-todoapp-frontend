import React, { Component } from 'react';
import PageHeader from '../template/page-header';
import TodoForm from './todo-form'
import TodoList from './todo-list';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList />    
            </div>
        )
    }
}