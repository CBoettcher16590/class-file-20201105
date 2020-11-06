import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { completedTaskListState, remainingTaskListState, taskListState } from '../data/TaskList.recoil';
import './style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TaskListSummary(){

    const taskList = useRecoilValue(taskListState);
    const completedTaskList = useRecoilValue(completedTaskListState);
    const remainingTaskList = useRecoilValue(remainingTaskListState);
    let now = (completedTaskList.length / taskList.length) * 100;
    
    return (
        <div className="listed-tasks">
            {completedTaskList.length} / {taskList.length} Complete
            <ProgressBar now={now} />

            <div className="remainingTasks">
                Remaining Tasks:
                <ListGroup > 
                    { remainingTaskList.map( task => <ListGroup.Item className="list-item" variant="info">{task.description}</ListGroup.Item>)}
               </ListGroup>
            </div>
        </div>
    );

}

export default TaskListSummary;