import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

export const CreateTask = ({ show, handleClose, save }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: '', description: '', status: ''
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        save(data);
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className='form-group my-1'>
                            <label className='ps-2'>TITLE</label>
                            <input {...register('title')} className='form-control' type='text' name='title' placeholder='Enter Title' />
                        </div>
                        <div className='form-group my-3'>
                            <label className='ps-2'>DESCRIPTION</label>
                            <textarea {...register('description')} className='form-control' rows='3' name='description' placeholder='Enter Description' />
                        </div>
                        <select {...register('status')} class="form-select" aria-label="Default select example">

                            <option defaultValue="Pending">Pending</option>
                            <option defaultValue="InProgress">In Progress</option>
                            <option defaultValue="Completed">Completed</option>
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleSubmit(onSubmit)}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}