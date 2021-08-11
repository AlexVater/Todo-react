import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import List from "./List";

const Main = props => {
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
                                        <InputGroup className="w-25">
                                            <FormControl placeholder="Adicionar Todo" />
                                        </InputGroup>
                                        <Button variant="primary" className="ms-2">Adicionar</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="mt-5 d-flex justify-content-center">
                                    <List />
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main