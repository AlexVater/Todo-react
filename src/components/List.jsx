import {Button, ListGroup} from "react-bootstrap";
import {useState} from "react";

const List = props => {
    const [task, setTask] = useState([props.tasks])
    console.log(task)

    return(
        <ListGroup variant="flush">
            <ListGroup.Item variant="secondary">s</ListGroup.Item>
        </ListGroup>

    )
}

export default List