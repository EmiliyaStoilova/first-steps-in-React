import React from 'react';
//import './Users.css';
import { Form } from 'react-bootstrap';

const Users = ({user}) => {
    return <div>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User Id:</Form.Label>
                <Form.Control type='text' value={user.userId} disabled/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Id:</Form.Label>
                <Form.Control  type='text' value={user.id} disabled/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Title:</Form.Label><br></br>
                <Form.Control as="textarea"area className='text1' disabled value={user.title}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>Info:</Form.Label><br></br>
                <Form.Control as="textarea" className='text2' disabled value={user.body}/><br></br><br></br>
            </Form.Group> 
        </Form>
    </div>
}

export default Users;