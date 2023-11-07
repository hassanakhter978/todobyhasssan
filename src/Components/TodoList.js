// import React from 'react'
// import Button from 'react-bootstrap/Button';
// function TodoList({ list }) {


//     return (
//         <>
//             <div className='lielements'>
//                 <ul>
//                     {list.map(item => <li key={item.id}>{item.todo}
//                     <div className='ButtonDiv'>
//                     <Button id='edit' variant="primary" >Edit</Button>
//                     <Button id='delete' variant="primary" >delete</Button>
//                     </div>
//                 </li>)}</ul>
//             </div>

//         </>
//     )
// }

// export default TodoList


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TodoList({ list, onEdit, onDelete }) {
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleEditClick = (item) => {
        setEditId(item.id);
        setEditText(item.todo);
    };

    const handleSaveClick = () => {
        onEdit(editId, editText);
        setEditId(null);
        setEditText('');
    };

    const handleCancelClick = () => {
        setEditId(null);
        setEditText('');
    };

    return (
        <div className='lielements'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {editId === item.id ? (
                            <>
                                <input
                                    id='editInput'
                                    type='text'
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <Button variant='primary' onClick={handleSaveClick}>
                                    Save
                                </Button>
                                <Button variant='secondary' style={{ marginLeft: '10px' }} onClick={handleCancelClick}>
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <>
                                {item.todo}
                                <div className='buttons'>
                                    <Button
                                        className='btn btn-warning'
                                        onClick={() => handleEditClick(item)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        className='btn btn-danger'
                                        onClick={() => onDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
