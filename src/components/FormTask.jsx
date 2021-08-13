import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import List from "./List";

const FormTask = () => {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])

    const inputTextHandler = (text) => {
        setInputText(text)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {text: inputText,
            completed: false}
        ])
        setInputText("")
    }

    return(
        <Container>
            <Row className="pt-5">
                <Col className="text-center">
                    <Card>
                        <Card.Header className="bg-primary">
                            <h2 className="card-title text-white">Todo</h2>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div className="d-flex justify-content-center">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Adicionar Todo</Form.Label>
                                                <Form.Control type="text" value={inputText} onChange={e => inputTextHandler(e.target.value)}/>
                                            </Form.Group>
                                            <Button variant="dark" type="submit" onClick={submitTodoHandler}>
                                                Adicionar
                                            </Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="mt-5 px-5">
                                    <List todos={todos}/>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default FormTask