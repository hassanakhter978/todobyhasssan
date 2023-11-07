import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


function NavBar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        const storedEmail = localStorage.getItem('email');

        const storedPassword = localStorage.getItem('password');

        if (storedEmail && storedPassword) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);


    function logout() {
        localStorage.removeItem('email');

        localStorage.removeItem('password');

        setIsLoggedIn(false);

        toast.success('Logout successfully');

        navigate("/")
        
    }




    return (
        <Navbar expand="lg" className="bg-body-tertiary w-100">
            <Container>
                <Navbar.Brand href="/">React Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {isLoggedIn ? (
                            <>
                                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                                <ToastContainer />
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/">Login</Nav.Link>
                                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar