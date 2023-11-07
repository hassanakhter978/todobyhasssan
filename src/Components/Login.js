import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("email", JSON.stringify(email))
        localStorage.setItem("password", JSON.stringify(password))
        setEmail('');
        setPassword('');
        navigate("/home")
        toast.success('Login successfully');
        window.location.reload();
    }
    

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Form onSubmit={handleSubmit}>
                        <h1 className="mb-3 mt-5 text-white">Login</h1>
                        <Form.Group controlId="email">
                            <Form.Label className='text-white mt-5'>Email</Form.Label>
                            <Form.Control
                                className='w-150'
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className='text-white mt-3'>Password</Form.Label>
                            <Form.Control
                                className='inp'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-4'>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
