import { useEffect, useState } from 'react';
import './todoHome.css';
import { CreateTask } from './modals/createTask';

const TodoHome = () => {
    const [show, setShow] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('taskList');
        if (arr) {
            let jsonObj = JSON.parse(arr);
            setTaskList(jsonObj);
        }
    }, [])

    const saveTask = (data) => {
        let tempObj = taskList;
        tempObj.push(data);
        localStorage.setItem('taskList', JSON.stringify(tempObj));
        setTaskList(tempObj);
        console.log("Saved Task", data);
        handleClose();
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const todoCard = taskList.map((taskData) => {
        return (
            <div className='card m-3 border border-secondary' style={{ width: '18rem' }}>
                <div className='card-body'>
                    <h4 className='card-title display-5'>{taskData.title}</h4>
                    <hr/>
                    <p className='lead'>{taskData.description}</p>
                    <p className='lead text-success'>{taskData.status}</p>
                </div>
            </div>
        )
    }) 
    return (
        <div>
            <div className="container d-flex  py-2 header-container">
                <h4>TO-DO</h4>
                <button onClick={handleShow} className="btn btn-outline-primary btn-sm rounded "><b>Create Task</b></button>
            </div>
            <div className='container d-flex flex-wrap todoCard-container'>
                {todoCard}
            </div>
            <CreateTask show={show} handleClose={handleClose} save={saveTask} />
        </div>

    )

}
export default TodoHome;