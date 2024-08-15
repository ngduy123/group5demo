import axios from 'axios';
import { Row, Col, Table, Form, Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <Container className="container-custom">
            <Row className="my-4">
                <Col md={4}>
                    <h2>Departments</h2>
                    <Form.Select 
                        className="form-select-custom" 
                        aria-label="Select department" 
                        value="">
                        <option value=''>All Departments</option>
                    </Form.Select>
                    <Button variant='outline-success' className='mt-3' >
                        Add
                    </Button>
                </Col>

                <Col md={8}>
                    <h2>List Employees</h2>
                    <Form.Control 
                        type="text" 
                        placeholder="Search by name" 
                        value=""
                        className="mb-3"
                    />
                    <Table hover className="table-custom">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Position</th>
                                <th>Department</th>
                                <th>Project</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
