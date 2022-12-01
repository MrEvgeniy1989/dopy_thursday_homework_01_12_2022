import React from 'react';
import {TasksType} from '../App';

type PropsType = {
    tasks: TasksType []
    children: React.ReactNode
}

export const SuperTodolist: React.FC<PropsType> = (props) => {
    const {tasks, children, ...otherProps} = props

    const mappedTasks = tasks.map(el => {
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.id}</span>
                <span>{el.title}</span>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {mappedTasks}
            </ul>

            {children}
            <div>---------------------------------------------------------------------------------------------</div>

        </div>
    );
};