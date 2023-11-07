import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function FormInputs() {
    const [inputTask, setInputTask] = useState("");
    const [list, setList] = useState([]);

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };
    const unique_id = uuidv4();


    const handleAddTodo = (todo) => {
        if (todo.trim() === '') {
            // Check if the input is empty or only contains whitespace
            toast.warning('Please enter a valid task.');
            return; // Exit the function without adding an empty task
        }

        const newTask = {
            id: unique_id,
            todo: todo
        };

        setList([...list, newTask]);
        setInputTask('');
        toast.success('Item added successfully');
    };

    console.log(list)



    const handleEdit = (id, newText) => {
        setList((prevList) =>
            prevList.map((item) =>
                item.id === id ? { id: item.id, todo: newText } : item
            )
        );
        toast.success('Item updated successfully');
    };

    const handleDelete = (id) => {
        setList(list.filter((item) => item.id !== id));
        toast.error('Item deleted');
    };

    return (
        <>
            <Header />
            <div className='formInput'>
                <input
                    type='text'
                    id='inputText'
                    placeholder='write here'
                    value={inputTask}
                    onChange={handleInputChange}

                />
                <Button variant="primary" onClick={() => handleAddTodo(inputTask)}>Add</Button>
            </div>

            <TodoList list={list} onEdit={handleEdit} onDelete={handleDelete} />
            <ToastContainer />

        </>
    )
}

export default FormInputs