import React from 'react';
import SimpleCounter from './components/SimpleCounter';
import TaskList from './components/TaskList';
import './App.css';
import TaskListSummary from './components/TaskListSummary';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    
    return (

        <div className="App">
                    <div className="taskListSum" style={{ width:"50%", float:"left" }}>
                        <TaskListSummary />
                    </div>
                    <div className="taskList" style={{ width:"50%", float:"left" }}>
                        <TaskList />
                    </div>  

        </div>

            //Tried this For getting Columns to work, but it broke :(
            //     <Container style={{width:"100vw"}}>
            //     <div className="App">
            //         <Col>
            //             <Row>
            //                 <div className="taskListSum">
            //                     <TaskListSummary />
            //                  </div>
            //             </Row>
            //         </Col>
            //         <Col>
            //             <Row> 
            //                 <div className="taskList">
            //                     <TaskList />
            //                  </div> 
            //             </Row>
            //         </Col>
    
            //     </div> 
            // </Container>

    );
}

export default App;
