import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Registration() {
  return (
    <div>
        <center><h1>Registration</h1></center>
        
        <Form>
            <Row className="mb-3">

            <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="Enter Last Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formMiddleInitial">
                <Form.Label>Middle Initial</Form.Label>
                <Form.Control type="middleinitial" placeholder="Enter Middle Intial" />
              </Form.Group>      
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

            <Form.Group className= "mb-3" controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>

              <Form.Group className= "mb-3" controlId="formConfirmGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="confirmpassword" placeholder="Confirm Password" />
              </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Street Address/Barangay/Province/City/Country" />

              <Button variant="primary" type="submit">
              Submit
            </Button>
            
            </Form.Group>

            
          </Form>
    </div>
  )
}

export default Registration