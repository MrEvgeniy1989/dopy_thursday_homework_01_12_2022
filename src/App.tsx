import React, {useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton';
import {SuperTodolist} from './components/SuperTodolist';

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {
    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ]


    return (
        <div style={{display: 'flex'}}>
            <SuperTodolist tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
            </SuperTodolist>
            <SuperTodolist tasks={tasks}>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>
                <div>News</div>

                <SuperButton callBack={() => {
                }} color={'red'}>RED SuperButton</SuperButton>
                <SuperButton callBack={() => {
                }}>DEFAULT SuperButton</SuperButton>
                <SuperButton callBack={() => {
                }} color={'secondary'} disabled>SECONDARY-DISABLED SuperButton</SuperButton>
            </SuperTodolist>
            <SuperTodolist tasks={tasks}>XXX</SuperTodolist>


        </div>
    )
}


export default App;
