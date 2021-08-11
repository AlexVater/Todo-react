import {ListGroup} from "react-bootstrap";

const List = props => {
    return(
        <ListGroup variant="flush">
            <ListGroup.Item variant="secondary">Cras justo odio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, vero!</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item variant="secondary">Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
    )
}

export default List