import React from "react";
import {ListGroup} from "react-bootstrap";
import Tasks from "./Tasks";

const List = ({todos}) => {
    return(
        <ListGroup variant="flush">
            {todos.map((todo, key) => (
                <Tasks key={key} text={todo.text}/>
            ))}
        </ListGroup>
    )
}

export default List