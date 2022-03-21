import React from 'react';
import Navigate from '../components/Navigate';
import {Container, Button} from 'react-bootstrap';

const Contact = () => {
	return (
		<>
			<Navigate />
			<Container className='jumbotron'>
				<h1>Contact Page</h1>
				<p>This is a simple hero unit, a simple Container-style component for calling extra attention to featured content or information.</p>
				<p>
					<Button variant='primary'>Learn more</Button>
				</p>
			</Container>
		</>
	);
};

export default Contact;
