import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const Navigate = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='md'>
			<Navbar.Brand as={Link} to='/'>
				ClientTemp
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbarScroll' />
			<Navbar.Collapse id='navbarScroll'>
				<Nav className='mr-auto my-2 my-lg-0' style={{maxHeight: '200px'}} navbarScroll>
					<Nav.Link as={Link} to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='/about'>
						About
					</Nav.Link>
					<Nav.Link as={Link} to='/overview'>
						Overview
					</Nav.Link>
					<Nav.Link as={Link} to='/contact'>
						Contact
					</Nav.Link>
				</Nav>
				<Form className='d-flex'>
					<FormControl type='search' placeholder='Search' className='mr-2' aria-label='Search' />
					<Button variant='outline-success'>Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigate;
