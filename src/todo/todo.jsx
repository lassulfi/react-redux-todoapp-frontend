import React from 'react';
import PageHeader from '../template/page-header';
import TodoForm from './todo-form'
import TodoList from './todo-list';

// const URL = 'http://localhost:3003/api/todos';

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />    
    </div>
)